<script setup>
import { useBasicStore } from '../stores/basic'

const counter = useBasicStore()

counter.count++

counter.$patch({ count: counter.count + 1})

counter.increment()
</script>

<template>
    <div>Current Count: {{ counter.count }}</div>
    <button>Increment</button>
</template>
