<template>
    <div class="flex justify-between px-8 py-2 fixed left-0 w-full z-10 text-white md:items-center md:px-20 md:py-8 ">
        <NuxtLink class="font-secondary font-bold text-3xl" to="/">MTNT</NuxtLink>
        <AppHeaderBurger :onClick="() => { isMenuToggled = !isMenuToggled }" :is-menu-toggled="isMenuToggled" />
        <div class="flex flex-col justify-center transition-transform items-center rounded-b-xl gap-4 md:gap-16 absolute left-0 min-h-[80vh] top-0 w-full h-4/5 bg-white shadow-md md:relative md:translate-y-0 md:flex-row md:bg-transparent md:min-h-0"
            :class="{ '-translate-y-full shadow-none': !isMenuToggled }">
            <NuxtLink class="menu-link" to="/">
                Blog
            </NuxtLink>
            <NuxtLink class="menu-link" to="/">
                About me
            </NuxtLink>
            <NuxtLink class="menu-link" to="/">
                Travel map
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const isMenuToggled = ref(false);
</script>