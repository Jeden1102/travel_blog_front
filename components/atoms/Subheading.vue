<template>
    <h2
        :class="`text-secondary text-lg uppercase tracking-widest font-secondary font-semibold ${customClass ? customClass : ''}`">
        <slot></slot>
    </h2>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps<{
    customClass?: string;
}>()
</script>