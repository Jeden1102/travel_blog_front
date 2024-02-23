<template>
    <h2
        :class="`text-secondary flex gap-4 items-center text-lg uppercase tracking-widest font-secondary font-semibold relative ${customClass ? customClass : ''}`">
        <slot></slot>
    </h2>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps<{
    customClass?: string;
}>()
</script>

<style scoped>
h2::before {
    content: '';
    @apply h-[2px] w-20 bg-secondary block;
}
</style>