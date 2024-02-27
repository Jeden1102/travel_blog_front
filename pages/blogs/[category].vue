<template>
    <div class="text-white container pt-20">
        <BlogListing :categoryName="route.params.category" :categoryID="route.query.id" />
    </div>
</template>

<script setup lang="ts">
const route = useRoute()
</script>