<template>
  <div>
    <nav>
      <div class="flex justify-between">
        <button :class="{ 'disabled': currentPage === 1 }" @click="handlePrev">
          <i class="pi pi-chevron-left" />
        </button>

        <span class="flex items-center gap-6">
          <button
            :class="{ 'd-block': currentPage + 1 > totalPage }"
            class="link"
            @click="handleChangePage(1)"
          >
            1
          </button>
          <span class="ba-cham flex items-center" :class="{ 'd-block': currentPage - 2 >= 1 }">...</span>
          <button
            v-for="link in totalPage"
            :key="link"
            :class="{ 'active': currentPage === link, 'd-block': link <= currentPage + 1 && link >= currentPage - 1 }"
            class="link"
            @click="handleChangePage(link)"
          >
            {{ link }}
          </button>
          <span class="ba-cham flex items-center" :class="{ 'd-block': currentPage + 2 <= data.length }">...</span>
          <button
            :class="{ 'd-block': currentPage - 1 < 1 }"
            class="link"
            @click="handleChangePage(totalPage)"
          >
            {{ totalPage }}
          </button>
        </span>

        <button :class="{ 'disabled': currentPage === data.length }" @click="handleNext">
          <i class="pi pi-chevron-right" />
        </button>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
const currentPage = ref(1);
const total = ref(100);
const data = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const totalPage = Math.ceil(total.value / data.value.length);
console.log(totalPage);

function handleChangePage(page: number) {
  console.log(page);
  currentPage.value = page;
}
function handlePrev() {
  currentPage.value > 1 && currentPage.value--;
}
function handleNext() {
  currentPage.value < totalPage && currentPage.value++;
}

</script>

<style scoped lang="scss">
.link {
  display: none;
}
button {
  outline: none;
  border: 1px solid #cccccc;
  border-radius: 5px;
  width: 50px;
  height: 50px;
  background-color: transparent;
  color: #1571DA;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  &.active {
    background-color: #1571DA;
    color: #ffffff;
  }
  &.disabled {
    color: #64748b;
    opacity: 0.6;
    cursor: none;
  }
}
.ba-cham {
  align-items: baseline;
  color: #1571DA;
  display: none;
}
</style>