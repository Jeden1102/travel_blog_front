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
    short_content: string;
    blog_category: BlogCategory;
    publishedAt: string;
    image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    landscape_image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}

export interface Pagination {
  page: number;
  pageCount: number;
  pageSize: number;
  total: number;
}

export interface BlogData {
  data: {
    blogs?: {
      data: Blog[];
      meta: {
        pagination: Pagination;
      };
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

export interface Journey {
  data: {
    id: string;
    attributes: {
      date: string;
      title: string;
      location: {
        lat: number;
        lon: number;
        display_name: string;
      };
    };
    blog: {
      data: Blog;
    };
  };
}

export interface JourneyData {
  data?: {
    journeys: {
      data: Journey;
    };
  };
}
