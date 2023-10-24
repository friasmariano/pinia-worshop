
import { defineStore } from 'pinia'

export const useBasicStore = defineStore('basic', {
    state: () => {
        return {
            count: 0
        }
    },
    actions: {
        increment() {
            this.count++
        }
    }
})