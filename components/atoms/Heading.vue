<template>
    <div>
        <h1
            :class="`text-4xl md:text-7xl capitalize text-white font-secondary font-bold ${customClass ? customClass : ''}`">
            <slot></slot>
        </h1>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
    customClass?: string;
}>()
</script>
