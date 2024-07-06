<template>
  <div class="paging-custom">
    <Paginator
      v-if="props.totalRecords"
      :rows="props.rows"
      :total-records="props.totalRecords"
      :template="'PrevPageLink PageLinks NextPageLink'"
      :page-link-size="pageLinkSize"
      @page="handleChangePage"
    >
      <template #prevpagelinkicon>
        <i class="pi pi-chevron-left" />
      </template>
      <template #nextpagelinkicon>
        <i class="pi pi-chevron-right" />
      </template>
    </Paginator>
  </div>
</template>

<script setup lang="ts">
import type { PageState } from "primevue/paginator";

const props = defineProps({
  rows: { type: Number, required: true },
  totalRecords: { type: Number, required: true },
  pageLinkSize: { type: Number, default: 5 },
  justify: { type: String, default: "center" },
  paddingLeft: { type: String, default: "0px" },
});
const emit = defineEmits<{
  (e: "update-page", value: PageState): void;
}>();

function handleChangePage(e: PageState) {
  emit("update-page", e);
}
</script>

<style lang="scss">
.paging-custom {
  .p-paginator {
    justify-content: v-bind("props.justify");
    padding-left: v-bind("props.paddingLeft");
    padding: 0.5rem 0;
  }
  .p-paginator-element {
    width: 50px;
    height: 50px;
    border: 1px solid #cccccc;
    border-radius: 5px;
  }
  .p-paginator .p-paginator-pages .p-paginator-page.p-highlight {
    background-color: #1571da;
    color: #ffffff;
  }
  .p-paginator-prev {
    margin-right: 40px;
  }
  .p-paginator-next {
    margin-left: 40px;
  }
}
</style>
