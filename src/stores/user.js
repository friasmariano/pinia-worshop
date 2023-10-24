
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

// This is a SetUp store
export const useUserStore = defineStore('userStore', () => {
    const name = ref('Mariano Frías Gómez')

    const cart = ref([10, 20, 30, 40, 50])

    const cartTotal = computed(() => {  
        let temp

        if (cart.length > 0) {
            cart.forEach((e) => {
                temp += e
            })
        }

    })

    function addToCart(number) {
        if (typeof 'number' === 'number')
            cart.push(number)
    }

    return { addToCart, cart, name }
})