<template>
    <div class="flex justify-between px-8 py-2 fixed left-0 w-full z-20 text-white md:items-center md:px-20 md:py-8 transition-all"
        :class="{ 'bg-gray-500 bg-opacity-60 backdrop-blur-md': isScrolled }">
        <NuxtLink class="font-secondary font-bold text-3xl" to="/" data-aos="fade-down">MTNT</NuxtLink>
        <AppHeaderBurger :onClick="() => { isMenuToggled = !isMenuToggled }" :is-menu-toggled="isMenuToggled" />
        <div class="flex flex-col justify-center transition-transform items-center rounded-b-xl gap-4 md:gap-16 absolute left-0 min-h-[80vh] top-0 w-full h-4/5 bg-white shadow-md md:relative md:translate-y-0 md:flex-row md:bg-transparent md:min-h-0"
            :class="{ '-translate-y-full shadow-none': !isMenuToggled }">
            <NuxtLink class="menu-link" to="/" data-aos="fade-down">
                Blog
            </NuxtLink>
            <NuxtLink class="menu-link" to="/" data-aos="fade-down" data-aos-delay="100">
                About me
            </NuxtLink>
            <NuxtLink class="menu-link" to="/" data-aos="fade-down" data-aos-delay="200">
                Travel map
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
const isMenuToggled = ref(false);
const isScrolled = ref(false);

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

const handleScroll = () => {
    isScrolled.value = window.scrollY > 0;
}
</script>
