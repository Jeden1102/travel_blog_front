interface BlogCategory {
  data: {
    id: string;
    attributes: {
      name: string;
    };
  };
}
export interface Blog {
  id: string;
  attributes: {
    title: string;
    promoted: boolean;
    content: string;
    blog_category: BlogCategory;
    image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}

export interface BlogData {
  data: {
    blogs?: {
      data: Blog[];
    };
  };
}

interface BlogCategoryData {
  id: string;
  attributes: {
    name: string;
  };
}

export interface BlogCategoriesData {
  data: {
    blogCategories?: {
      data: BlogCategoryData[];
    };
  };
}
