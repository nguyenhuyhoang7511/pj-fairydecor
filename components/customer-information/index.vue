<template>
  <div class="container-form">
    <h5 class="title-header">THÔNG TIN KHÁCH HÀNG</h5>

    <div class="c-form-custom">
      <div class="form-custom">
        <div class="split-layout">
          <div class="flex-auto width-50">
            <label class="label">Họ và tên </label>
            <InputText
              v-model="customerInformation.fullName"
              placeholder="Nhập họ và tên của bạn"
            />
          </div>

          <div class="flex-auto width-50">
            <label class="label">Số điện thoại </label>
            <InputText
              v-model="customerInformation.phoneNumber"
              placeholder="Nhập số điện thoại của bạn"
            />
          </div>
        </div>
        <div class="split-layout mt-field">
          <div class="flex-auto width-50">
            <label class="label">Email liên hệ </label>
            <InputText
              v-model="customerInformation.email"
              placeholder="Nhập email liên hệ của bạn"
            />
          </div>

          <div class="flex-auto width-50">
            <label class="label">Ngày nhận hàng </label>
            <Calendar
              v-model="customerInformation.deliveryDate"
              showIcon
              :showOnFocus="false"
              inputId="buttondisplay"
              placeholder="Chọn ngày nhận hàng"
            />
          </div>
        </div>

        <div class="split-layout mt-field">
          <div class="flex-auto width-50">
            <label class="label">Tỉnh | Thành phố </label>
            <InputText
              v-model="customerInformation.province"
              placeholder="Nhập tỉnh hoặc thành phố của bạn"
            />
          </div>

          <div class="flex-auto width-50">
            <label class="label">Quận | Huyện </label>
            <InputText
              v-model="customerInformation.district"
              placeholder="Nhập quận hoặc huyện của bạn"
            />
          </div>
        </div>

        <div class="mt-field">
          <div class="flex-auto">
            <label class="label">Phường | Xã </label>
            <InputText
              v-model="customerInformation.ward"
              placeholder="Nhập phường hoặc xã của bạn"
            />
          </div>
        </div>

        <div class="mt-field">
          <div class="flex-auto">
            <label class="label">Địa chỉ cụ thể (số nhà-ngõ-ngách) </label>
            <InputText
              v-model="customerInformation.specificAddress"
              placeholder="Nhập địa chỉ cụ thể"
            />
          </div>
        </div>

        <div class="mt-field">
          <div class="flex-auto">
            <label class="label">Ghi chú (nếu có)</label>
            <Textarea
              style="width: 100%"
              v-model="customerInformation.note"
              variant="filled"
              rows="5"
              cols="30"
              autoResize
            />
          </div>
        </div>
        <div class="container-btn-action">
          <Button
            icon="pi pi-check"
            aria-label="Submit"
            label="Xác nhận thông tin"
            @click="handleConfirm"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const customerInformation = reactive({
  fullName: "",
  phoneNumber: "",
  email: "",
  deliveryDate: null,
  province: "",
  district: "",
  ward: "",
  specificAddress: "",
  note: "",
});

const handleConfirm = () => {
  try {
    localStorage.setItem("customer", JSON.stringify(customerInformation));
    router.push("/payment");
  } catch (error) {
    toast.add({
      severity: "error",
      detail: "Đã xảy ra lỗi vui lòng thử lại",
      summary: "Thông báo",
      life: 3000,
    });
  }
};
</script>

<style lang="scss" scoped>
.container-form {
  .title-header {
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 0;
    text-align: center;
  }
  .c-form-custom {
    display: flex;
    justify-content: center;
    .form-custom {
      width: 60%;
      border: 1px solid #ccc;
      padding: 2rem;
      border-radius: 0.5rem;
      .split-layout {
        display: flex;
        gap: 2rem;
        justify-content: space-between;
        .width-50 {
          width: 50%;
        }
      }
    }
  }
}
.flex-auto {
  display: flex;
  flex-direction: column;
  .label {
    font-weight: bold;
    font-family: math;
    font-size: 1rem;
    margin-bottom: 0.2rem;
  }
}
.container-btn-action {
  display: flex;
  justify-content: end;
  margin-top: 2rem;
}
.mt-field {
  margin-top: 1.5rem;
}
:deep(.p-inputtext::placeholder) {
  font-size: 0.8rem;
}
:deep(.p-inputtext) {
  font-size: 0.8rem;
}
</style>
