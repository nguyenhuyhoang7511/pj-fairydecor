<template>
  <div class="container-form">
    <h5 class="title-header">HANDLE PAYMENT</h5>

    <div>
      <div ref="divToExport" class="div-to-export">
        
        <div v-for="product in productPayment" key="code">
          <p>TITLE : {{product.title}}</p>
          <p>image : <img width="100px" :src="product.image" alt=""></p>
        </div>
        <!-- <img src="https://media.loveitopcdn.com/3807/kich-thuoc-la-co-viet-nam-3.jpg" alt=""> -->

       
      </div>
      <div>

        
      </div>
      <button @click="exportToImage">Export to Image</button>
    </div>
  </div>
</template>
<script setup>
import { toPng } from 'html-to-image';
import { onMounted } from 'vue';

const divToExport = ref(null);
const productPayment = ref('')
const customerPayment = ref('')

const exportToImage = () => {
  if (divToExport.value) {
    toPng(divToExport.value, { pixelRatio: 2 }) // Tăng pixelRatio để tăng độ phân giải
      .then((dataUrl) => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const day = now.getDate().toString().padStart(2, '0');
        const month = (now.getMonth() + 1).toString();
        const year = now.getFullYear();
        const fileName = `MyOrder_${hours}h${minutes}_${day}-${month}-${year}.png`; 
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = fileName;
        link.click();
      })
      .catch((error) => {
        console.error('oops, something went wrong!', error);
      });
  }
};


const getDataPayment = () => {
  const storedProductPayment = localStorage.getItem('productPayment');
  const storedCustomerPayment = localStorage.getItem('customer');

  if (storedProductPayment) {
    productPayment.value = JSON.parse(storedProductPayment);
  }
  if (storedCustomerPayment) {
    customerPayment.value = JSON.parse(storedCustomerPayment);
  }
  console.log( storedProductPayment);
  console.log( storedCustomerPayment);
}

onMounted(() => {
  getDataPayment()
})
</script>

<style lang="scss" scoped>
.div-to-export {
  padding: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  text-align: center;
}
</style>
