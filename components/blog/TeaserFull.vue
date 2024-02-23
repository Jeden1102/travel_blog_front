<template>
    <div
        :class="`flex flex-col-reverse items-center justify-between gap-6 sm:flex-row container z-10 relative ${customClass ? customClass : ''}`">
        <div class="flex flex-col gap-2 sm:flex-1 max-w-[632px] relative -mt-4 z-10 sm:mt-0">
            <div class="relative w-fit" data-aos="fade-down" data-aos-delay="100">
                <AtomsSubheading custom-class="w-fit">My travels</AtomsSubheading>
                <p class="absolute left-0 -top-12 text-gray-100 opacity-50 font-numbers text-9xl font-bold -z-10">01</p>
            </div>
            <AtomsHeading data-aos="fade-down" data-aos-delay="200">What level of hiker are you?</AtomsHeading>
            <p data-aos="fade-up" data-aos-delay="300" class="text-white font-semibold mt-2">Determining what level of
                hiker you are can be an important tool when
                planning future
                hikes. This hiking
                level guide will help you plan hikes according to different hike ratings set by various websites like All
                Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert
                backpacker?</p>
            <div data-aos="fade-up" data-aos-delay="500">
                <AtomsButton custom-class="mt-4" type="link" uri="#test">read more
                    <Icon class="text-2xl" name="material-symbols-light:arrow-right-alt-rounded" />
                </AtomsButton>
            </div>
        </div>
        <NuxtImg data-aos="fade-left" data-aos-delay="300"
            class="w-full h-52 sm:h-full sm:flex-1 object-cover max-w-[560px]" loading="lazy" width="566" height="720"
            format="webp" src="01.jpg" alt="" />
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps<{
    customClass?: string;
}>()
</script>
