// WordPress REST API Configuration
const WP_API_URL = process.env.NEXT_PUBLIC_WP_API_URL || 'https://your-wordpress-site.com/wp-json/wp/v2';

// Debug logging
const DEBUG_MODE = process.env.NODE_ENV === 'development';

function debugLog(message: string, data?: unknown) {
  if (DEBUG_MODE) {
    console.log(`[WordPress API] ${message}`, data || '');
  }
}

// WordPress API Types
export interface WPPost {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: Record<string, unknown>;
  categories: number[];
  tags: number[];
  acf?: {
    event_date?: string;
    event_time?: string;
    event_location?: string;
    event_location_en?: string;
    event_end_time?: string;
    ticket_price?: string;
    max_attendees?: number;
    [key: string]: unknown;
  };
  _embedded?: {
    author?: WPUser[];
    'wp:featuredmedia'?: WPMedia[];
    'wp:term'?: WPCategory[][];
  };
}

export interface WPUser {
  id: number;
  name: string;
  url: string;
  description: string;
  link: string;
  slug: string;
  avatar_urls: {
    [size: string]: string;
  };
}

export interface WPMedia {
  id: number;
  date: string;
  slug: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  author: number;
  caption: {
    rendered: string;
  };
  alt_text: string;
  media_type: string;
  mime_type: string;
  media_details: {
    width: number;
    height: number;
    file: string;
    sizes: {
      [size: string]: {
        file: string;
        width: number;
        height: number;
        mime_type: string;
        source_url: string;
      };
    };
  };
  source_url: string;
}

export interface WPCategory {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  parent: number;
  meta: Record<string, unknown>;
}

// WordPress API Categories
export const WP_CATEGORIES = {
  NEWS: 'news',
  EVENTS: 'events',
  MUSEUM: 'museum',
  CULTURE: 'culture',
  HISTORY: 'history'
} as const;

// Helper function to clean WordPress content
export function cleanWPContent(content: string): string {
  // Remove WordPress auto-generated paragraphs and clean HTML
  return content
    .replace(/\[caption[^\]]*\]/g, '')
    .replace(/\[\/caption\]/g, '')
    .replace(/<p>&nbsp;<\/p>/g, '')
    .trim();
}

// Helper function to extract excerpt from content
export function extractExcerpt(content: string, maxLength: number = 200): string {
  const textContent = content.replace(/<[^>]*>/g, '').trim();
  return textContent.length > maxLength 
    ? textContent.substring(0, maxLength) + '...'
    : textContent;
}

// API Functions
export async function fetchPosts(
  category?: string,
  per_page: number = 10,
  page: number = 1,
  include_embedded: boolean = true
): Promise<WPPost[]> {
  try {
    debugLog('🚀 Starting fetchPosts', { category, per_page, page, include_embedded });
    debugLog('📍 WP_API_URL:', WP_API_URL);
    
    const params = new URLSearchParams({
      per_page: per_page.toString(),
      page: page.toString(),
      status: 'publish',
      orderby: 'date',
      order: 'desc'
    });

    if (category) {
      debugLog('🔍 Fetching category ID for:', category);
      // Get category ID first
      const categoryData = await fetchCategoryBySlug(category);
      if (categoryData) {
        params.append('categories', categoryData.id.toString());
        debugLog('✅ Found category ID:', categoryData.id);
      } else {
        debugLog('❌ Category not found:', category);
      }
    }

    if (include_embedded) {
      params.append('_embed', 'true');
    }

    const url = `${WP_API_URL}/posts?${params.toString()}`;
    debugLog('📡 Making request to:', url);

    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 60 } // Cache for 1 minute
    });

    debugLog('📨 Response status:', response.status);
    debugLog('📨 Response headers:', Object.fromEntries(response.headers.entries()));

    if (!response.ok) {
      const errorText = await response.text();
      debugLog('❌ Response error:', errorText);
      throw new Error(`HTTP error! status: ${response.status}, body: ${errorText}`);
    }

    const posts: WPPost[] = await response.json();
    debugLog('✅ Posts fetched successfully:', { count: posts.length, posts: posts.slice(0, 2) });
    return posts;
  } catch (error) {
    debugLog('💥 Error fetching posts:', error);
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function fetchPostBySlug(slug: string, include_embedded: boolean = true): Promise<WPPost | null> {
  try {
    const params = new URLSearchParams({
      slug,
      status: 'publish'
    });

    if (include_embedded) {
      params.append('_embed', 'true');
    }

    const response = await fetch(`${WP_API_URL}/posts?${params.toString()}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 60 }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const posts: WPPost[] = await response.json();
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error('Error fetching post by slug:', error);
    return null;
  }
}

export async function fetchPostById(id: number, include_embedded: boolean = true): Promise<WPPost | null> {
  try {
    const params = new URLSearchParams();

    if (include_embedded) {
      params.append('_embed', 'true');
    }

    const response = await fetch(`${WP_API_URL}/posts/${id}?${params.toString()}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 60 }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const post: WPPost = await response.json();
    return post;
  } catch (error) {
    console.error('Error fetching post by ID:', error);
    return null;
  }
}

export async function fetchCategories(): Promise<WPCategory[]> {
  try {
    const response = await fetch(`${WP_API_URL}/categories?per_page=100`, {
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 300 } // Cache for 5 minutes
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const categories: WPCategory[] = await response.json();
    return categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export async function fetchCategoryBySlug(slug: string): Promise<WPCategory | null> {
  try {
    const url = `${WP_API_URL}/categories?slug=${slug}`;
    debugLog('🏷️ Fetching category by slug:', { slug, url });
    
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 300 }
    });

    debugLog('📨 Category response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      debugLog('❌ Category fetch error:', errorText);
      throw new Error(`HTTP error! status: ${response.status}, body: ${errorText}`);
    }

    const categories: WPCategory[] = await response.json();
    debugLog('✅ Categories fetched:', { count: categories.length, categories });
    return categories.length > 0 ? categories[0] : null;
  } catch (error) {
    debugLog('💥 Error fetching category by slug:', error);
    console.error('Error fetching category by slug:', error);
    return null;
  }
} 