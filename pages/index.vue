<template>
  <div class="bg-primary">
    <HomeHeroSection />
    <div class="flex flex-col gap-12 sm:gap-20">
      <template v-if="blogs">
        <BlogTeaserFull v-for="(blog, key) in blogs.data.blogs.data" :blog="blog" :index="key"
          :custom-class="`${key === 0 ? 'mt-40' : key % 2 === 0 ? 'sm:flex-row-reverse' : ''}`" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BlogData } from "../types";

const graphql = useStrapiGraphQL()

const blogs: BlogData = await graphql(`
query {
  blogs(filters:{promoted:{eq:true}}) {
    data {
      id
      attributes {
        title
        promoted
        image {
          data {
            attributes{
              url
            }
          }
        }
        content
        blog_category{
          data{
            attributes{
            name
            }
          }
        }
      }
    }
  }
}
`);
console.log(blogs)
</script>