<template>
  <div class="container-form">
    <h5 class="title-header">THÔNG TIN KHÁCH HÀNG</h5>
    <form @submit="handleConfirm">
      <div class="c-form-custom">
        <div class="form-custom">
          <div class="split-layout height-field">
            <div class="flex-auto width-50">
              <label class="label">Họ và tên </label>
              <InputText
                v-model="fullName"
                v-bind="fullNameAttrs"
                placeholder="Nhập họ và tên của bạn"
              />
              <div class="message-error">{{ errors.fullName }}</div>
            </div>

            <div class="flex-auto width-50">
              <label class="label">Số điện thoại </label>
              <InputText
                v-model="phoneNumber"
                v-bind="phoneNumberAttrs"
                placeholder="Nhập số điện thoại của bạn"
              />
              <div class="message-error">{{ errors.phoneNumber }}</div>
            </div>
          </div>
          <div class="split-layout height-field">
            <div class="flex-auto width-50">
              <label class="label">Email liên hệ </label>
              <InputText
                v-model="email"
                v-bind="emailAttrs"
                placeholder="Nhập email liên hệ của bạn"
              />
              <div class="message-error">{{ errors.email }}</div>
            </div>

            <div class="flex-auto width-50">
              <label class="label">Ngày nhận hàng </label>
              <Calendar
                v-model="deliveryDate"
                v-bind="deliveryDateAttrs"
                showIcon
                :showOnFocus="false"
                inputId="buttondisplay"
                placeholder="Chọn ngày nhận hàng"
              />
              <div class="message-error">{{ errors.deliveryDate }}</div>
            </div>
          </div>

          <div class="split-layout height-field">
            <div class="flex-auto width-50">
              <label class="label">Tỉnh | Thành phố </label>
              <InputText
                v-model="province"
                v-bind="provinceAttrs"
                placeholder="Nhập tỉnh hoặc thành phố của bạn"
              />
              <div class="message-error">{{ errors.province }}</div>
            </div>

            <div class="flex-auto width-50">
              <label class="label">Quận | Huyện </label>
              <InputText
                v-model="district"
                v-bind="districtAttrs"
                placeholder="Nhập quận hoặc huyện của bạn"
              />
              <div class="message-error">{{ errors.district }}</div>
            </div>
          </div>

          <div class="height-field">
            <div class="flex-auto">
              <label class="label">Phường | Xã </label>
              <InputText
                v-model="ward"
                v-bind="wardAttrs"
                placeholder="Nhập phường hoặc xã của bạn"
              />
              <div class="message-error">{{ errors.ward }}</div>
            </div>
          </div>

          <div class="height-field">
            <div class="flex-auto">
              <label class="label">Địa chỉ cụ thể (số nhà-ngõ-ngách) </label>
              <InputText
                v-model="specificAddress"
                v-bind="specificAddressAttrs"
                placeholder="Nhập địa chỉ cụ thể"
              />
              <div class="message-error">{{ errors.specificAddress }}</div>
            </div>
          </div>

          <div class="height-field">
            <div class="flex-auto">
              <label class="label">Ghi chú (nếu có)</label>
              <Textarea
                style="width: 100%"
                v-model="note"
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
              type="submit"
              label="Xác nhận thông tin"
              @click="handleConfirm"
            />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import { useForm } from "vee-validate";
import * as yup from "yup";

// VALIDATE
const { errors, handleSubmit, defineField,setFieldValue } = useForm({
  validationSchema: yup.object({
    fullName: yup.string().required("Họ và tên không được để trống"),
    phoneNumber: yup
      .string()
      .required("Số điện thoại không được để trống")
      .typeError("Số điện thoại phải là kiểu số ")
      .matches(
        /^(0\d{9,10})$/,
        "Số điện thoại phải bắt đầu bằng số 0 và có độ dài 10 hoặc 11 chữ số"
      ),
    email: yup
      .string()
      .required("Email liên hệ không được để trống")
      .email("Email không hợp lệ"),
    deliveryDate: yup.string().required("Ngày nhận hàng không được để trống"),
    province: yup.string().required("Tỉnh hoặc thành phố không được để trống"),
    district: yup.string().required("Quận hoặc huyện không được để trống"),
    ward: yup.string().required("Phường hoặc xã không được để trống"),
    specificAddress: yup.string().required("Địa chỉ cụ thể không được để trống"),
  }),
});

const [fullName, fullNameAttrs] = defineField("fullName");
const [phoneNumber, phoneNumberAttrs] = defineField("phoneNumber");
const [email, emailAttrs] = defineField("email");
const [deliveryDate, deliveryDateAttrs] = defineField("deliveryDate");
const [province, provinceAttrs] = defineField("province");
const [district, districtAttrs] = defineField("district");
const [ward, wardAttrs] = defineField("ward");
const [specificAddress, specificAddressAttrs] = defineField("specificAddress");

const router = useRouter();
const note = ref('')

const getCustomerInfo = () => {
  // const cartString = localStorage.getItem("cart");
  // let response = cartString ? JSON.parse(cartString) : [];
  // productsInsideCart.value = response;
  // console.log(productsInsideCart.value);
  // setFieldValue("fullName", 'test123');

};

const handleConfirm = handleSubmit(async (values) => {
  const customerInfo = {...values,...note.value}
  console.log(customerInfo);
  try {
    localStorage.setItem("customer", JSON.stringify(customerInformation));
    // router.push("/payment");
  } catch (error) {
    toast.add({
      severity: "error",
      detail: "Đã xảy ra lỗi vui lòng thử lại",
      summary: "Thông báo",
      life: 3000,
    });
  }
});

onMounted(() => {
  getCustomerInfo()
})
</script>

<style lang="scss" scoped>
.message-error {
  color: red;
  text-align: left;
  font-size: 0.8rem;
  margin-left: 0.2rem;
  margin-top: 0.2rem;
}
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

.height-field {
  min-height: 5rem;
}
:deep(.p-inputtext::placeholder) {
  font-size: 0.8rem;
}
:deep(.p-inputtext) {
  font-size: 0.8rem;
}
</style>
