import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    cartNumber: JSON.parse(localStorage.getItem('cart'))?.length || 0,
  }),
  getters: {
    cartCount: (state) => state.cartNumber,
  },
  actions: {
    addProduct() {
      this.cartNumber++;
    },
    deleteProduct() {
      this.cartNumber--;
    },
  },
});
