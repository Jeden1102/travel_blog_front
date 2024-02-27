<template>
    <div
        :class="`flex flex-col-reverse min-w-72 items-center justify-between gap-6   z-10 relative ${customClass ? customClass : ''}`">
        <div class="flex flex-col gap-2 w-full  md:max-w-[332px] relative -mt-4 z-10 px-2">
            <div class="relative w-fit" data-aos="fade-down" data-aos-delay="100">
                <AtomsSubheading custom-class="w-fit text-sm">{{ blog.attributes.blog_category.data.attributes.name }}
                </AtomsSubheading>
            </div>
            <AtomsHeading data-aos="fade-down" data-aos-delay="200" custom-class="md:text-xl">{{ blog.attributes.title }}
            </AtomsHeading>
            <p data-aos="fade-up" data-aos-delay="300" class="text-white font-semibold mt-2">
                {{ blog.attributes.short_content }}
            </p>
            <div data-aos="fade-up" data-aos-delay="500">
                <AtomsButton custom-class="mt-4" type="link" :uri="blogURI">read more
                    <Icon class="text-2xl" name="material-symbols-light:arrow-right-alt-rounded" />
                </AtomsButton>
            </div>
        </div>
        <NuxtImg data-aos="fade-left" data-aos-delay="300" class="w-full h-52  object-cover max-w-[350px]" loading="lazy"
            width="250" height="360" format="webp"
            :src="`http://localhost:1337${blog.attributes.image.data.attributes.url}`" alt="" />
    </div>
</template>

<script lang="ts" setup>
import type { Blog } from '~/types';
import { defineProps } from 'vue';

const props = defineProps<{
    customClass?: string;
    blog: Blog;
}>()

const blogURI = `/blog/${convertToSlug(props.blog.attributes.title)}?id=${props.blog.id}`;
</script>
