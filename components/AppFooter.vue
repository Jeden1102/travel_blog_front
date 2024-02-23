<template>
    <div class="flex flex-col py-10 md:py-20">
        <div class="flex flex-col md:flex-row container mt-20 gap-6 justify-between">
            <div class="flex flex-col gap-6 text-white" data-aos="fade-up" data-aos-delay="300">
                <p class="text-2xl font-secondary">MTNT</p>
                <p class="font-semibold">Get out there & discover your next slope, mountain & destination!</p>
            </div>
            <div class="flex gap-20 lg:gap-52">
                <div class="flex flex-col gap-6 text-white">
                    <p class="text-xl font-semibold text-secondary" data-aos="fade-left" data-aos-delay="300">More on the
                        blog</p>
                    <div class="flex flex-col gap-2">
                        <NuxtLink data-aos="fade-left" data-aos-delay="300" to="#">My travels</NuxtLink>
                        <NuxtLink data-aos="fade-left" data-aos-delay="400" to="#">Tips for beginners</NuxtLink>
                        <NuxtLink data-aos="fade-left" data-aos-delay="500" to="#">Daily</NuxtLink>
                        <NuxtLink data-aos="fade-left" data-aos-delay="600" to="#">Others</NuxtLink>
                    </div>
                </div>
                <div class="flex flex-col gap-6 text-white">
                    <p class="text-xl font-semibold text-secondary" data-aos="fade-left" data-aos-delay="300">More of MTNT
                    </p>
                    <div class="flex flex-col gap-2">
                        <NuxtLink data-aos="fade-left" data-aos-delay="700" to="#">Careers</NuxtLink>
                        <NuxtLink data-aos="fade-left" data-aos-delay="800" to="#">About us</NuxtLink>
                        <NuxtLink data-aos="fade-left" data-aos-delay="900" to="#">Contact</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <p class="opacity-75 text-white container mt-8">
            Copyright &copy;jeden1102 {{ currentYear }}
        </p>
    </div>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>
