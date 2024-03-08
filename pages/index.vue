<template>
  <div class="bg-primary">
    <HomeHeroSection />
    <div id="explore-more" class="flex flex-col gap-12 sm:gap-20 mt-20 md:mt-0">
      <template v-if="blogs.data.blogs?.data">
        <BlogTeaserFull v-for="(blog, key) in blogs.data.blogs.data" :blog="blog" :index="key"
          :custom-class="`${key === 0 ? 'mt-40' : key % 2 === 0 ? 'sm:flex-row-reverse' : ''}`" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
const blogs = await getPromotedBlogs();
</script>
