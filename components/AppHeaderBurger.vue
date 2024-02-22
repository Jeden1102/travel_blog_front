<template>
    <button class="space-y-2 z-10 md:hidden" @click="() => emits('onClick')">
        <span class="block w-8 h-0.5 bg-gray-100 transition-transform"
            :class="{ 'rotate-45 translate-y-[10px] bg-gray-700': isMenuToggled }"></span>
        <span class="block w-8 h-0.5 bg-gray-100 transition-transform"
            :class="{ '-rotate-45 bg-gray-700': isMenuToggled }"></span>
        <span class="block w-5 h-0.5 bg-gray-100 transition-all"
            :class="{ 'translate-x-full opacity-0': isMenuToggled }"></span>
    </button>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue';

const emits = defineEmits(['onClick'])

const props = defineProps<{
    isMenuToggled: boolean;
}>()
</script>
