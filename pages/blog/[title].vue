<template>
    <div class="text-white container pt-20 md:pt-40" v-if="blog">
        <AtomsHeading>{{ blog.data?.blog.data.attributes.title }}</AtomsHeading>
        <AtomsSubheading>{{ blog.data?.blog.data.attributes.blog_category.data.attributes.name }}</AtomsSubheading>
    </div>
</template>

<script setup lang="ts">
const route = useRoute()
const blogId: string = route.query.id;
const blog = await getBlogPost(blogId);
</script>