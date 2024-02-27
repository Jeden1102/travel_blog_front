<template>
    <button v-if="type !== 'link'" @click="() => emits('onClick')"
        :class="`atoms-button ${customClass ? customClass : ''} ${props.active ? 'underline' : ''}`">
        <slot></slot>
    </button>
    <NuxtLink :to="uri" :target="target ? target : '_self'" v-if="type === 'link'"
        :class="`atoms-button ${customClass ? customClass : ''} ${props.active ? 'underline' : ''}`">
        <slot></slot>
    </NuxtLink>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
    type?: 'link' | 'button';
    customClass?: string;
    target?: string;
    uri?: string;
    active?: boolean;
}>()

const emits = defineEmits(['onClick'])
</script>
