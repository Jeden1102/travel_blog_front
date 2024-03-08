<template>
    <div
        :class="`flex flex-col-reverse items-center justify-between gap-6 sm:flex-row container z-10 relative ${customClass ? customClass : ''}`">
        <div class="flex flex-col gap-2 w-full sm:flex-1 max-w-[632px] relative -mt-4 z-10 sm:mt-0">
            <div class="relative w-fit" data-aos="fade-down" data-aos-delay="100">
                <AtomsSubheading custom-class="w-fit">{{ blog.attributes.blog_category.data.attributes.name }}
                </AtomsSubheading>
                <p class="absolute left-0 -top-12 text-gray-100 opacity-50 font-numbers text-9xl font-bold -z-10">
                    0{{ index + 1 }}
                </p>
            </div>
            <AtomsHeading data-aos="fade-down" data-aos-delay="200">{{ blog.attributes.title }}</AtomsHeading>
            <p data-aos="fade-up" data-aos-delay="300" class="text-white font-semibold mt-2">
                {{ blog.attributes.short_content }}
            </p>
            <div data-aos="fade-up" data-aos-delay="500">
                <AtomsButton custom-class="mt-4" type="link" :uri="blogURI">read more
                    <Icon class="text-2xl" name="material-symbols-light:arrow-right-alt-rounded" />
                </AtomsButton>
            </div>
        </div>
        <NuxtImg data-aos="fade-left" data-aos-delay="300"
            class="w-full h-52 sm:h-full sm:flex-1 object-cover max-w-[560px]" loading="lazy" width="566" height="720"
            format="webp" :src="`${config.public.apiUrl}${blog.attributes.image.data.attributes.url}`" alt="" />
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import type { Blog } from "../../types";

const config = useRuntimeConfig()

const props = defineProps<{
    customClass?: string;
    blog: Blog;
    index: number;
}>()

const blogURI = `/blog/${convertToSlug(props.blog.attributes.title)}?id=${props.blog.id}`;
</script>
