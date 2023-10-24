
import { defineStore } from 'pinia'
import { ref } from 'vue'

// This is a SetUp store
export const useUserStore = defineStore('userStore', () => {
    const name = ref('Mariano Frías Gómez')

    const cart = ref([])

    function addToCart(number) {
        if (typeof 'number' === 'number')
            cart.push(number)
    }

    return { addToCart, cart, name }
})