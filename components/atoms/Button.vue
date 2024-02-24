<template>
    <button v-if="type !== 'link'" @click="() => emits('onClick')" :class="`${classes} ${customClass ? customClass : ''}`">
        <slot></slot>
    </button>
    <NuxtLink :to="uri" :target="target ? target : '_self'" v-if="type === 'link'"
        :class="`${classes} ${customClass ? customClass : ''}`">
        <slot></slot>
    </NuxtLink>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

const emits = defineEmits(['onClick'])

const classes = "text-secondary flex gap-4 items-center text-lg hover:-translate-y-[1px] transition-all hover:opacity-90"

const props = defineProps<{
    type?: 'link' | 'button';
    customClass?: string;
    target?: string;
    uri?: string;
}>()
</script>
