<template>
    <div class="text-white container pt-20">
        Single blog page {{ route.params.title }} - {{ route.query.id }}
    </div>
</template>

<script setup lang="ts">
const route = useRoute()

console.log(route.params.title, "HALO", route.query.id)
</script>