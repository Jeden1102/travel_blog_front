<template>
    <div>
        <h3 class="text-xl mb-2">There were not results found for <b>{{ category }}</b> category.</h3>
        <p>Try changing the category filter.</p>
    </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
    category?: string;
}>()

</script>