<template>
    <div class="flex justify-between px-8 py-2 fixed left-0 w-full z-10 text-white md:items-center md:px-20 md:py-8">
        <NuxtLink class="font-secondary font-bold text-3xl" to="/">MTNT</NuxtLink>
        <button class="space-y-2 z-10 md:hidden" @click="isMenuToggled = !isMenuToggled">
            <span class="block w-8 h-0.5 bg-gray-100 transition-transform"
                :class="{ 'rotate-45 translate-y-[10px] bg-gray-700': isMenuToggled }"></span>
            <span class="block w-8 h-0.5 bg-gray-100 transition-transform"
                :class="{ '-rotate-45 bg-gray-700': isMenuToggled }"></span>
            <span class="block w-5 h-0.5 bg-gray-100 transition-all"
                :class="{ 'translate-x-full opacity-0': isMenuToggled }"></span>
        </button>
        <div class="flex flex-col justify-center transition-transform items-center gap-4 md:gap-16 absolute left-0 min-h-[80vh] top-0 w-full h-4/5 bg-white shadow-md md:relative md:translate-y-0 md:flex-row md:bg-transparent md:min-h-0"
            :class="{ '-translate-y-full shadow-none': !isMenuToggled }">
            <NuxtLink class="text-lg uppercase text-gray-700 md:font-bold md:capitalize md:text-white" to="/">Blog
            </NuxtLink>
            <NuxtLink class="text-lg uppercase text-gray-700 md:font-bold md:capitalize md:text-white" to="/">About me
            </NuxtLink>
            <NuxtLink class="text-lg uppercase text-gray-700 md:font-bold md:capitalize md:text-white" to="/">Travel map
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const isMenuToggled = ref(false);
</script>