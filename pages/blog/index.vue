<template>
    <div class="text-white container pt-24 md:pt-40">
        <AtomsSubheading>Dive in the history.</AtomsSubheading>
        <AtomsHeading>Explore all of my blogs.</AtomsHeading>
        <div class="flex flex-wrap gap-x-10 gap-y-2 my-8">
            <AtomsButton v-for="category in categories">{{ category }}</AtomsButton>
        </div>
        <div class="flex flex-wrap gap-x-4 gap-y-8 my-8">
            <BlogTeaser v-for="a in 10" />
        </div>
        <MoleculesPagination />
    </div>
</template>

<script setup lang="ts">
const categories = ['My Tips', 'Daily', 'Others', 'Travel Guide', 'Inspiring Travel Stories', 'Culinary Discoveries', 'Adventures on the Trail', 'Luxury Travel', 'Budget Traveling', 'City Exploration', 'Encounters with Local Culture', 'Nature and Ecotourism', 'Active Leisure', 'Packing Tips', 'Photography Guides', 'Road Trips', 'Exotic Island Hopping', 'Traveling with Kids'];
</script>
