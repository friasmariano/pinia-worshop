<script setup>
import { useBasicStore } from '../stores/basic'
import { useUserStore } from '../stores/user'

const counter = useBasicStore()

// Calling Setup Store
const user = useUserStore()

counter.count++

counter.$patch({ count: counter.count + 1})

function incrementCount() {
    counter.increment()
}

function addToCart() {
    user.addToCart()
}

</script>

<template>
    <div>Current Count: {{ counter.count }}</div>
    <button @click="incrementCount">Increment</button>

    <p>My name is: {{ user.name }}</p>

    <p>Cart Total: {{ user.cartTotal }}</p>

    <button @click="addToCart">Add to cart</button>
</template>
