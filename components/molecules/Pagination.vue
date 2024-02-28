<template>
    <nav aria-label="Page navigation example" class="flex justify-center" v-if="pagination.total > 0">
        <ul class="flex gap-4">
            <li v-if="pagination?.page > 1">
                <button class="text-secondary" @click="emits('page-change', 'prev')">Previous</button>
            </li>
            <li>
                <button class="text-secondary underline">{{ pagination.page }}</button>
            </li>
            <li v-if="pagination.pageCount > pagination.page">
                <button class="text-secondary" @click="emits('page-change', 'next')">Next</button>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue';
import type { Pagination } from '~/types';

const props = defineProps<{
    pagination: Pagination;
}>()

const emits = defineEmits(['page-change']);
</script>