<template>
    <Button
      :type="props.type"
      :label="props.label"
      severity="info"
      :outlined="props.outline"
      :class="[props.className, props.outline ? 'border-primary color-primary' : 'bg border-0']"
      :style="{ minWidth: `${props.width}`, height: `${props.height}`, maxWidth: `${props.width}` }"
      class="btn-custom"
      @click="handleClick"
    />
</template>

<script setup lang="ts">
const props = defineProps({
  outline: { type: Boolean, default: false },
  className: { type: String, required: false, default: '' },
  width: { type: String, required: false, default: 'auto' },
  height: { type: String, required: false, default: 'auto' },
  label: { type: String, required: true },
  fontSize: { type: String, default: '15px' },
  fontWeight: { type: Number, default: 700 },
  type: { type: String as () => 'button' | 'submit', default: 'button' },
});

const emit = defineEmits<{
  (e: 'onClick'): void
}>();

function handleClick() {
  emit('onClick');
}
</script>

<style scoped lang="scss">
.btn-custom {
  font-size: v-bind('props.fontSize');
  font-family: 'Noto Sans JP';
  padding: 0;
  :deep(.p-button-label) {
    font-weight: v-bind('props.fontWeight');
  }
}
.bg {
  background-color: #1571DA;
}
.border-primary {
  border-color: #1571DA;
}
.border-0 {
  border: 0;
}
.color-primary {
  color: #1571DA;
}
:deep(.p-dropdown-label) {
  font-size: 12px;
}
</style>
