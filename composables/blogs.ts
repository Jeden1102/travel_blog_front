import type { BlogData, BlogCategoriesData, Blog } from "../types";

export const getPromotedBlogs = async () => {
  const graphql = useStrapiGraphQL();
  let blogs: BlogData = { data: {} };
  try {
    blogs = await graphql(`
      query {
        blogs(filters: { promoted: { eq: true } }) {
          data {
            id
            attributes {
              title
              promoted
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
              content
              short_content
              blog_category {
                data {
                  attributes {
                    name
                  }
                }
              }
            }
          }
        }
      }
    `);
  } catch (err) {
    console.log(err);
  }
  return blogs;
};

export const getBlogCategories = async () => {
  const graphql = useStrapiGraphQL();
  let categories: BlogCategoriesData = { data: {} };
  try {
    categories = await graphql(`
      query {
        blogCategories {
          data {
            id
            attributes {
              name
            }
          }
        }
      }
    `);
  } catch (err) {
    console.log(err);
  }
  return categories;
};

export const getBlogsByCategory = async (categoryID?: string) => {
  const graphql = useStrapiGraphQL();

  let blogs: BlogData = { data: {} };
  try {
    const query = `
    query {
      blogs${categoryID ? `(filters: { blog_category: { id: { eq: ${categoryID} } } })` : ""} {
        data {
          id
          attributes {
            title
            promoted
            image {
              data {
                attributes {
                  url
                }
              }
            }
            content
            short_content
            blog_category {
              data {
                attributes {
                  name
                }
              }
            }
          }
        }
      }
    }
  `;

    blogs = await graphql(query);
  } catch (err) {
    console.log(err);
  }
  return blogs;
};

export const getBlogPost = async (blogID?: string) => {
  const graphql = useStrapiGraphQL();

  let blogs: { data?: { blog: { data: Blog } } } = {};
  try {
    const query = `
    query {
      blog(id : ${blogID}){
        data {
          id
          attributes {
            title
            promoted
            image {
              data {
                attributes {
                  url
                }
              }
            }
            landscape_image {
              data {
                attributes {
                  url
                }
              }
            }
            content
            blog_category {
              data {
                attributes {
                  name
                }
              }
            }
          }
        }
      }
    }
  `;

    blogs = await graphql(query);
  } catch (err) {
    console.log(err);
  }
  console.log(blogs);
  return blogs;
};
