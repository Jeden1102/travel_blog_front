<template>
    <div class="bg-primary">
        <HomeHeroSection />
        <div class="flex flex-col gap-12 sm:gap-20">
            <BlogTeaserFull v-for="blog, key in blogs" custom-class="mt-40" />
            <BlogTeaserFull custom-class="sm:flex-row-reverse" />
            <BlogTeaserFull />
        </div>
    </div>
</template>

<script setup>
const graphql = useStrapiGraphQL()

const blogs = await graphql(`
query {
  blogs(filters:{promoted:{eq:true}}) {
    data {
      attributes {
        title
        promoted
        content
        image {
          data {
            attributes{
              url
            }
          }
        }
      }
    }
  }
}
`)
</script>