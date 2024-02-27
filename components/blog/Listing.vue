<template>
    <div class="text-white container pt-24 md:pt-40">
        <AtomsSubheading>Dive in the history.</AtomsSubheading>
        <AtomsHeading>Explore all of my blogs.</AtomsHeading>
        <div class="flex flex-wrap gap-x-10 gap-y-2 my-8" v-if="categories.data.blogCategories">
            <AtomsButton :active="category.id === props.categoryID" type="link"
                :uri="`/blogs/${convertToSlug(category.attributes.name)}?id=${category.id}`"
                v-for="category in categories.data.blogCategories.data">
                {{ category.attributes.name }}
            </AtomsButton>
        </div>
        <div class="flex flex-wrap gap-x-4 gap-y-8 my-8" v-if="blogs.data.blogs">
            <BlogTeaser v-for="blog in blogs.data.blogs.data" :blog="blog" />
        </div>
        <MoleculesPagination />
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
    categoryName?: string;
    categoryID?: string;
}>()

const categories = await getBlogCategories();
const blogs = await getBlogsByCategory(props.categoryID);
</script>
