
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

// This is a SetUp store
export const useUserStore = defineStore('userStore', () => {
    const name = ref('Mariano Frías Gómez')

    const cart = ref([10, 20, 30, 40, 50])

    const cartTotal = computed(() => {
        return cart.value.reduce((sum, item) => sum + item, 0)
    })

    function addToCart() {
        cart.value.push(5)
    }

    return { addToCart, cart, cartTotal, name }
})