<template>
    <div class="text-white container pt-20 md:pt-40 blog-full" v-if="blog">
        <AtomsHeading>{{ blog.data?.blog.data.attributes.title }}</AtomsHeading>
        <AtomsSubheading>{{ blog.data?.blog.data.attributes.blog_category.data.attributes.name }}</AtomsSubheading>
        <NuxtImg data-aos="fade-left" data-aos-delay="300" class="w-full h-72 object-cover my-4" loading="lazy" width="960"
            height="360" format="webp"
            :src="`http://localhost:1337${blog.data?.blog.data.attributes.landscape_image.data.attributes.url}`" alt="" />
        <div class="blog-full__content" v-html="blog.data?.blog.data.attributes.content">
        </div>
    </div>
</template>

<script setup lang="ts">
const route = useRoute()
const blogId: string = route.query.id;
const blog = await getBlogPost(blogId);
</script>

<style lang="scss">
.blog-full {
    &__content {
        h2 {
            @apply my-2 text-xl md:text-2xl font-semibold;
        }

        ul {
            li {
                @apply relative flex items-center gap-2;

                &::before {
                    content: '';
                    @apply w-2 h-2 bg-secondary block rounded-full;
                }
            }
        }
    }

}
</style>