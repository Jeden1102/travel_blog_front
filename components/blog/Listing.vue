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
        <BlogNoResults :category="categoryName" v-if="blogs.data.blogs?.meta.pagination.total === 0" />
        <MoleculesPagination v-if="blogs.data.blogs?.meta.pagination" :pagination="blogs.data.blogs?.meta.pagination"
            @page-change="(direction) => changePage(direction)" />
    </div>
</template>

<script setup lang="ts">
import { defineProps, ref, onMounted } from 'vue';
import type { BlogData, BlogCategoriesData } from '~/types';

const props = defineProps<{
    categoryName?: string;
    categoryID?: string;
}>()

const page = ref(1);

const blogs: Ref<BlogData> = ref({ data: {} });
const categories: Ref<BlogCategoriesData> = ref({ data: {} });

const changePage = async (direction: string) => {
    page.value = direction === 'prev' ? --page.value : ++page.value;
    blogs.value = await getBlogsByCategory(props.categoryID, page.value);
}

onMounted(async () => {
    blogs.value = await getBlogsByCategory(props.categoryID, page.value);
    categories.value = await getBlogCategories();
})
</script>
