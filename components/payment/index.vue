<template>
  <div class="container-form">
    <h4 class="title-header">Bước 1: Xác nhận đơn hàng</h4>
    <div>
      <div ref="divToExport" class="div-to-export">
        <div class="customer-info">
          <h4 style="margin-top: 0">Thông tin khách hàng</h4>
          <p>Tên khách hàng: {{ customerPayment.fullName }}</p>
          <p>Số điện thoại: {{ customerPayment.phoneNumber }}</p>
          <p>Email liên hệ: {{ customerPayment.email }}</p>
          <p>Ngày nhận hàng: {{ customerPayment.deliveryDate }}</p>
          <p>
            Địa chỉ: {{ customerPayment.ward }} - {{ customerPayment.district }} -
            {{ customerPayment.province }}
          </p>
          <p>Địa chỉ cụ thể: {{ customerPayment.specificAddress }}</p>
          <p>Lưu ý: {{ customerPayment.note }}</p>
        </div>
        <div class="order-infomation">
          <h4>Thông tin đơn hàng:</h4>
          <DataTable :value="productPayment" class="producst-payment-pc">
            <Column field="title" header="Tên"></Column>
            <Column header="Ảnh">
              <template #body="slotProps">
                <Image
                  :src="slotProps.data.image"
                  alt="Image"
                  width="164px"
                  preview
                  :alt="slotProps.data.image"
                />
              </template>
            </Column>
            <Column field="price" header="Giá tiền" style="min-width: 8rem">
              <template #body="slotProps">
                <span class="product-price">
                  {{ formatPrice(slotProps.data.price) }}</span
                >
              </template>
            </Column>
            <Column field="category" header="Phân loại" style="min-width: 10rem"></Column>
            <Column field="total" header="Số lượng" style="min-width: 8rem">
              <template #body="slotProps">
                <Chip :label="slotProps.data.total.toString()" />
              </template>
            </Column>
            <Column field="size" header="Kích thước" style="min-width: 12rem">
              <template #body="slotProps">
                <Tag severity="info" :value="slotProps.data.size"></Tag>
              </template>
            </Column>
            <Column
              field="total_price"
              header="Thành tiền"
              style="min-width: 8rem; text-align: center"
            >
              <template #body="slotProps">
                <span class="product-price">
                  {{ formatPrice(slotProps.data.total_price) }}</span
                >
              </template>
            </Column>
          </DataTable>

          <div class="producst-payment-sp">
            <div class="product-item" v-for="product in productPayment">
              <div class="left">
                <img :src="product.image" :alt="product.image" />
              </div>
              <div class="right">
                <p class="limit-line">
                  {{ product.title }}
                </p>
                <p>Giá: {{ formatPrice(product.price) }}</p>
                <p>Loại: {{ product.category }}</p>
                <p>Số lượng: {{ product.total }}</p>
                <p>Kích thước: {{ product.size }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="order-infomation">
          <h4>Thông tin thanh toán:</h4>
          <p>Tổng số: {{ productPayment.length }} sản phẩm</p>
          <p>Số tiền cần thanh toán: {{ formatPrice(totalPrice) }}</p>
          <p>Nhận hàng trước ngày {{ customerPayment.deliveryDate }}</p>
        </div>
      </div>
    </div>
    <h4 class="title-header">Bước 2: Xuất ảnh đơn hàng</h4>
    <div>
      <p>- Hãy thực hiện tải về đơn hàng của bạn</p>
      <Button
        icon="pi pi-download"
        label="Tải về tại đây"
        @click="exportToImage"
        :loading="loading"
      />
    </div>

    <h4 class="title-header">Bước 3: Xuất ảnh đơn hàng</h4>
    <div>
      <p>
        - Sử dụng ảnh đơn hàng vừa tải về và tiến hành gửi cho admin để tiến hành đặt hàng
      </p>
      <p>- Đơn hàng của bạn sẽ được xác nhận và gửi đi ngay sau khi được xác nhận</p>
      <Button
        icon="pi pi-whatsapp"
        label="Liên hệ quản trị viên tại đây"
        @click="handleRedirect"
      />
    </div>
  </div>
</template>
<script setup>
import { toPng } from "html-to-image";
import { onMounted } from "vue";

const divToExport = ref(null);
const productPayment = ref("");
const customerPayment = ref("");
const loading = ref(false);
const toast = useToast();

function formatPrice(value) {
  if (!value) {
    return "Cập nhật";
  }
  const formattedValue = new Intl.NumberFormat("vi-VN").format(value);
  return `${formattedValue}đ`;
}

const exportToImage = () => {
  if (divToExport.value) {
    loading.value = true;
    toPng(divToExport.value, { pixelRatio: 2 })
      .then(async (dataUrl) => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, "0");
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const day = now.getDate().toString().padStart(2, "0");
        const month = (now.getMonth() + 1).toString();
        const year = now.getFullYear();
        const fileName = `MyOrder_${hours}h${minutes}_${day}-${month}-${year}.png`;
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = fileName;
        link.click();
        loading.value = false;
      })
      .catch((error) => {
        toast.add({
          severity: "error",
          detail: "Đã xảy ra lỗi vui lòng thử lại",
          summary: "Thông báo",
          life: 3000,
        });
      });
  }
};
const handleRedirect = () => {
  window.open("https://zalo.me/0333568062", "_blank");
};

const getDataPayment = () => {
  const storedProductPayment = localStorage.getItem("productPayment");
  const storedCustomerPayment = localStorage.getItem("customer");

  if (storedProductPayment) {
    productPayment.value = JSON.parse(storedProductPayment);
  }
  if (storedCustomerPayment) {
    customerPayment.value = JSON.parse(storedCustomerPayment);
  }
};

const totalPrice = computed(() => {
  if (!Array.isArray(productPayment.value)) {
    return 0;
  }
  return productPayment.value.reduce((acc, product) => acc + product.total_price, 0);
});

onMounted(() => {
  getDataPayment();
});
</script>

<style lang="scss" scoped>
.div-to-export {
  padding: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  text-align: start;
  p {
    font-size: 0.9rem;
  }
}
:deep(.p-datatable .p-datatable-tbody > tr > td) {
  font-size: 0.8rem;
}
.producst-payment-sp {
  display: none;
}

.limit-line {
  font-size: 1rem !important;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: bold;
  font-family: emoji;
}
@media screen and (max-width: 575px) {
  .producst-payment-pc {
    display: none;
  }
  .producst-payment-sp {
    display: block;
    .product-item {
      display: flex;
      border-bottom: 1px solid #ccc;
      padding: 1rem 0;
      gap: 1rem;
      p {
        margin: 0;
        margin-bottom: 0.5rem;
      }
      .left {
        img {
          width: 9rem;
          height: 9rem;
        }
        width: 100%;
      }
      .right{
        width: 32rem;
      }
    }
  }
}
</style>
