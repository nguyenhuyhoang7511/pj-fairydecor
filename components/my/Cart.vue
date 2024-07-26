<template>
  <div class="container-cart">
    <h5
      class="title-header"
      style="text-align: center; margin-bottom: 2rem"
      v-if="productsInsideCart && productsInsideCart.length > 0"
    >
      CHI TIẾT GIỎ HÀNG
    </h5>

    <div class="card" v-if="productsInsideCart && productsInsideCart.length > 0">
      <DataTable
        ref="dt"
        :value="productsInsideCart"
        v-model:selection="selectedProducts"
        dataKey="code"
      >
        <template #header>
          <div class="flex-container">
            <IconField iconPosition="right" class="input-search">
              <InputIcon>
                <i class="pi pi-search" />
              </InputIcon>
              <InputText v-model="filters['global'].value" placeholder="Tìm kiếm..." />
            </IconField>
            <Button
              class="download-svg"
              label="Tải về"
              icon="pi pi-download"
              severity="help"
              @click="exportCSV($event)"
            />
          </div>
        </template>

        <Column selectionMode="multiple" style="width: 3rem" :exportable="false"></Column>
        <Column field="id" header="STT" style="min-width: 8rem">
          <template #body="{ index }">{{ index + 1 }}</template>
        </Column>
        <Column header="Ảnh" style="min-width: 10rem">
          <template #body="slotProps">
            <Image
              :src="slotProps.data.image"
              alt="Image"
              width="64px"
              preview
              :alt="slotProps.data.image"
            />
          </template>
        </Column>
        <Column field="title" header="Tiêu đề" style="min-width: 16rem"></Column>
        <Column field="price" header="Giá tiền" sortable style="min-width: 8rem">
          <template #body="slotProps">
            <span class="product-price"> {{ formatPrice(slotProps.data.price) }}</span>
          </template>
        </Column>
        <Column
          field="category"
          header="Phân loại"
          sortable
          style="min-width: 10rem; text-align: center"
        ></Column>
        <Column
          field="total"
          header="Số lượng"
          sortable
          style="min-width: 8rem; text-align: center"
        >
          <template #body="slotProps">
            <Chip :label="slotProps.data.total.toString()" />
          </template>
        </Column>
        <Column field="size" header="Kích thước" style="min-width: 12rem">
          <template #body="slotProps">
            <Tag severity="info" :value="slotProps.data.size"></Tag>
          </template>
        </Column>
        <Column :exportable="false" style="min-width: 8rem">
          <template #body="slotProps">
            <Button
              icon="pi pi-trash"
              outlined
              rounded
              severity="danger"
              @click="confirmDeleteProduct(slotProps.data)"
            />
          </template>
        </Column>
      </DataTable>

      <div class="container-button-action">
        <Button
          label="Tiến hành thanh toán"
          icon="pi pi-money-bill"
          severity="danger"
          @click="confirmPayment"
          v-if="selectedProducts && selectedProducts.length"
        />
      </div>
    </div>

    <div v-else class="show-cart-empty">
      <img
        src="https://bizweb.dktcdn.net/100/360/810/themes/732049/assets/empty-cart.png?1669015697083"
        alt=""
      />
    </div>
    <Dialog
      v-model:visible="confirmPaymentDialog"
      :style="{ width: '450px' }"
      header="Xác nhận thanh toán"
      :modal="true"
    >
      <div class="confirmation-content">
        <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
        <span v-if="product">Bạn có chắc chắn muốn tiến hành thanh toán?</span>
      </div>
      <template #footer>
        <Button label="Huỷ bỏ" text @click="confirmPaymentDialog = false" />
        <Button
          label="Thanh toán"
          icon="pi pi-check"
          text
          @click="handleConfirmPayment"
        />
      </template>
    </Dialog>

    <Dialog
      v-model:visible="confirmDeleteProductDialog"
      :style="{ width: '450px' }"
      header="Xác nhận xoá sản phẩm"
      :modal="true"
    >
      <div class="confirmation-content">
        <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
        <span v-if="product">Xác nhận xoá sản phẩm khỏi giỏ hàng?</span>
      </div>
      <template #footer>
        <Button label="Huỷ bỏ" text @click="confirmDeleteProductDialog = false" />
        <Button label="Xác nhận" icon="pi pi-check" text @click="handleDeteleProduct" />
      </template>
    </Dialog>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { FilterMatchMode } from "primevue/api";
import { useToast } from "primevue/usetoast";
import { useCartStore } from "~/store/cartStore";

// VARIABLE
const toast = useToast();
const cartStore = useCartStore();
const router = useRouter()
const dt = ref();
const productsInsideCart = ref();
const confirmPaymentDialog = ref(false);
const productForDelete = ref();
const confirmDeleteProductDialog = ref(false);
const product = ref({});
const selectedProducts = ref();
const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
});

// HOOK
function formatPrice(value) {
  if (!value) {
    return "Cập nhật";
  }
  const formattedValue = new Intl.NumberFormat("vi-VN").format(value);
  return `${formattedValue}đ`;
}

const exportCSV = () => {
  dt.value.exportCSV();
};

// GET LIST
const handleGetProductsForCard = () => {
  const cartString = localStorage.getItem("cart");
  let response = cartString ? JSON.parse(cartString) : [];
  productsInsideCart.value = response;
};

// DELETE
const confirmDeleteProduct = (product) => {
  productForDelete.value = product;
  confirmDeleteProductDialog.value = true;
};

const handleDeteleProduct = () => {
  try {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart = cart.filter((item) => item.code !== productForDelete.value.code);
    confirmDeleteProductDialog.value = false;
    localStorage.setItem("cart", JSON.stringify(cart));
    handleGetProductsForCard();
    cartStore.deleteProduct();
    toast.add({
      severity: "success",
      detail: "Xoá sản phẩm thành công",
      summary: "Thông báo",
      life: 3000,
    });
  } catch (error) {
    toast.add({
      severity: "error",
      detail: "Xoá sản phẩm thất bại",
      summary: "Thông báo",
      life: 3000,
    });
  }
};

// PAYMENT
const confirmPayment = () => {
  confirmPaymentDialog.value = true;
};
const handleConfirmPayment = () => {
  confirmPaymentDialog.value = false;
  try {
    localStorage.setItem("productPayment", JSON.stringify(selectedProducts.value));
  } catch (error) {
    toast.add({
      severity: "error",
      detail: "Đã xảy ra lỗi vui lòng thử lại",
      summary: "Thông báo",
      life: 3000,
    });
  }
};

onMounted(() => {
  handleGetProductsForCard();
});
</script>

<style lang="scss" scoped>
.show-cart-empty {
  display: flex;
  justify-content: center;
}
.container-button-action {
  display: flex;
  justify-content: end;
  padding: 1rem 0;
}
.container-cart {
  p,
  h5 {
    margin: 0;
  }
  .title-header {
    font-size: 1.5rem;
    font-weight: bold;
  }
}
.flex-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  align-items: center;
  justify-content: space-between;
}

.card {
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

.product-price {
  color: brown;
  font-weight: 500;
}

@media screen and (max-width: 575px) {
  .download-svg {
    display: none;
  }
  .input-search {
    width: 100%;
  }
  :deep(.p-inputtext) {
    width: 100%;
  }
  .container-button-action {
    justify-content: center;
    button {
      width: 100%;
      margin-top: 2rem;
    }
  }
}
</style>
