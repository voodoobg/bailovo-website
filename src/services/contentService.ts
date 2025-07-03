import { 
  fetchPosts, 
  fetchPostById, 
  fetchPostBySlug, 
  WP_CATEGORIES
} from '@/lib/wordpress';
import { 
  wpPostsToNewsItems, 
  wpPostsToEventItems,
  wpPostToNewsItem,
  wpPostToEventItem,
  getFeaturedNewsFromWP,
  getFeaturedEventsFromWP,
  getUpcomingEventsFromWP,
  getRecentNewsFromWP,
  isEventPost,
  isNewsPost
} from '@/data/wordpress-adapter';
import { NewsItem, EventItem, mockNews, mockEvents } from '@/data/mockData';

// Configuration
const USE_WORDPRESS = process.env.NEXT_PUBLIC_USE_WORDPRESS === 'true';
const FALLBACK_TO_MOCK = process.env.NEXT_PUBLIC_FALLBACK_TO_MOCK !== 'false';

// Debug logging
const DEBUG_MODE = process.env.NODE_ENV === 'development';

function debugLog(message: string, data?: unknown) {
  if (DEBUG_MODE) {
    console.log(`[Content Service] ${message}`, data || '');
  }
}

/**
 * Get all news articles
 */
export async function getNews(page: number = 1, perPage: number = 10): Promise<NewsItem[]> {
  debugLog('📰 getNews called', { page, perPage, USE_WORDPRESS, FALLBACK_TO_MOCK });
  
  if (!USE_WORDPRESS) {
    debugLog('🔄 Using mock data (WordPress disabled)');
    // Return mock data if WordPress is disabled
    return mockNews.slice((page - 1) * perPage, page * perPage);
  }

  try {
    debugLog('🌐 Fetching from WordPress API');
    const posts = await fetchPosts(WP_CATEGORIES.NEWS, perPage, page);
    debugLog('📝 WordPress posts received:', { count: posts.length });
    
    const newsItems = wpPostsToNewsItems(posts);
    debugLog('📰 News items converted:', { count: newsItems.length, items: newsItems.slice(0, 2) });
    
    if (newsItems.length === 0 && FALLBACK_TO_MOCK) {
      debugLog('⚠️ No WordPress news found, falling back to mock data');
      console.warn('No WordPress news found, falling back to mock data');
      return mockNews.slice((page - 1) * perPage, page * perPage);
    }
    
    return newsItems;
  } catch (error) {
    debugLog('💥 Error fetching news from WordPress:', error);
    console.error('Error fetching news:', error);
    
    if (FALLBACK_TO_MOCK) {
      debugLog('🔄 Falling back to mock data due to error');
      console.warn('WordPress error, falling back to mock data');
      return mockNews.slice((page - 1) * perPage, page * perPage);
    }
    
    return [];
  }
}

/**
 * Get all events
 */
export async function getEvents(page: number = 1, perPage: number = 10): Promise<EventItem[]> {
  if (!USE_WORDPRESS) {
    return mockEvents.slice((page - 1) * perPage, page * perPage);
  }

  try {
    const posts = await fetchPosts(WP_CATEGORIES.EVENTS, perPage, page);
    const eventItems = wpPostsToEventItems(posts);
    
    if (eventItems.length === 0 && FALLBACK_TO_MOCK) {
      console.warn('No WordPress events found, falling back to mock data');
      return mockEvents.slice((page - 1) * perPage, page * perPage);
    }
    
    return eventItems;
  } catch (error) {
    console.error('Error fetching events:', error);
    
    if (FALLBACK_TO_MOCK) {
      console.warn('WordPress error, falling back to mock data');
      return mockEvents.slice((page - 1) * perPage, page * perPage);
    }
    
    return [];
  }
}

/**
 * Get featured news articles
 */
export async function getFeaturedNews(): Promise<NewsItem[]> {
  if (!USE_WORDPRESS) {
    return mockNews.filter(item => item.featured);
  }

  try {
    const posts = await fetchPosts(WP_CATEGORIES.NEWS, 10, 1);
    const featuredNews = getFeaturedNewsFromWP(posts);
    
    if (featuredNews.length === 0 && FALLBACK_TO_MOCK) {
      return mockNews.filter(item => item.featured);
    }
    
    return featuredNews;
  } catch (error) {
    console.error('Error fetching featured news:', error);
    
    if (FALLBACK_TO_MOCK) {
      return mockNews.filter(item => item.featured);
    }
    
    return [];
  }
}

/**
 * Get featured events
 */
export async function getFeaturedEvents(): Promise<EventItem[]> {
  if (!USE_WORDPRESS) {
    return mockEvents.filter(item => item.featured);
  }

  try {
    const posts = await fetchPosts(WP_CATEGORIES.EVENTS, 10, 1);
    const featuredEvents = getFeaturedEventsFromWP(posts);
    
    if (featuredEvents.length === 0 && FALLBACK_TO_MOCK) {
      return mockEvents.filter(item => item.featured);
    }
    
    return featuredEvents;
  } catch (error) {
    console.error('Error fetching featured events:', error);
    
    if (FALLBACK_TO_MOCK) {
      return mockEvents.filter(item => item.featured);
    }
    
    return [];
  }
}

/**
 * Get upcoming events
 */
export async function getUpcomingEvents(limit: number = 3): Promise<EventItem[]> {
  debugLog('📅 getUpcomingEvents called', { limit, USE_WORDPRESS, FALLBACK_TO_MOCK });
  
  if (!USE_WORDPRESS) {
    debugLog('🔄 Using mock events (WordPress disabled)');
    const today = new Date();
    return mockEvents
      .filter(event => new Date(event.date) >= today)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .slice(0, limit);
  }

  try {
    debugLog('🌐 Fetching events from WordPress API');
    
    // First, try to get all posts to see what's available
    const allPosts = await fetchPosts(undefined, 20, 1);
    debugLog('📝 All WordPress posts received:', { count: allPosts.length });
    
    // Then get posts by events category
    const eventPosts = await fetchPosts(WP_CATEGORIES.EVENTS, 20, 1);
    debugLog('📝 WordPress event posts received:', { count: eventPosts.length });
    
    // If no events found by category, try filtering all posts
    const posts = eventPosts.length > 0 ? eventPosts : allPosts;
    debugLog('📝 Using posts:', { count: posts.length, source: eventPosts.length > 0 ? 'event category' : 'all posts' });
    
    const upcomingEvents = getUpcomingEventsFromWP(posts, limit);
    debugLog('📅 Upcoming events filtered:', { count: upcomingEvents.length, events: upcomingEvents });
    
    if (upcomingEvents.length === 0 && FALLBACK_TO_MOCK) {
      debugLog('⚠️ No upcoming WordPress events, falling back to mock data');
      const today = new Date();
      return mockEvents
        .filter(event => new Date(event.date) >= today)
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        .slice(0, limit);
    }
    
    return upcomingEvents;
  } catch (error) {
    debugLog('💥 Error fetching upcoming events from WordPress:', error);
    console.error('Error fetching upcoming events:', error);
    
    if (FALLBACK_TO_MOCK) {
      debugLog('🔄 Falling back to mock events due to error');
      const today = new Date();
      return mockEvents
        .filter(event => new Date(event.date) >= today)
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        .slice(0, limit);
    }
    
    return [];
  }
}

/**
 * Get recent news articles
 */
export async function getRecentNews(limit: number = 3): Promise<NewsItem[]> {
  debugLog('📰 getRecentNews called', { limit, USE_WORDPRESS, FALLBACK_TO_MOCK });
  
  if (!USE_WORDPRESS) {
    debugLog('🔄 Using mock news (WordPress disabled)');
    return mockNews
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, limit);
  }

  try {
    debugLog('🌐 Fetching recent news from WordPress API');
    const posts = await fetchPosts(WP_CATEGORIES.NEWS, limit, 1);
    debugLog('📝 WordPress news posts received:', { count: posts.length });
    
    const recentNews = getRecentNewsFromWP(posts, limit);
    debugLog('📰 Recent news filtered:', { count: recentNews.length, news: recentNews });
    
    if (recentNews.length === 0 && FALLBACK_TO_MOCK) {
      debugLog('⚠️ No recent WordPress news, falling back to mock data');
      return mockNews
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, limit);
    }
    
    return recentNews;
  } catch (error) {
    debugLog('💥 Error fetching recent news from WordPress:', error);
    console.error('Error fetching recent news:', error);
    
    if (FALLBACK_TO_MOCK) {
      debugLog('🔄 Falling back to mock news due to error');
      return mockNews
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, limit);
    }
    
    return [];
  }
}

/**
 * Get a single news article by ID
 */
export async function getNewsById(id: string): Promise<NewsItem | null> {
  if (!USE_WORDPRESS) {
    return mockNews.find(item => item.id === id) || null;
  }

  try {
    const post = await fetchPostById(parseInt(id));
    
    if (!post) {
      if (FALLBACK_TO_MOCK) {
        return mockNews.find(item => item.id === id) || null;
      }
      return null;
    }

    if (!isNewsPost(post)) {
      console.warn(`Post ${id} is not a news post`);
      if (FALLBACK_TO_MOCK) {
        return mockNews.find(item => item.id === id) || null;
      }
      return null;
    }

    return wpPostToNewsItem(post);
  } catch (error) {
    console.error('Error fetching news by ID:', error);
    
    if (FALLBACK_TO_MOCK) {
      return mockNews.find(item => item.id === id) || null;
    }
    
    return null;
  }
}

/**
 * Get a single event by ID
 */
export async function getEventById(id: string): Promise<EventItem | null> {
  if (!USE_WORDPRESS) {
    return mockEvents.find(item => item.id === id) || null;
  }

  try {
    const post = await fetchPostById(parseInt(id));
    
    if (!post) {
      if (FALLBACK_TO_MOCK) {
        return mockEvents.find(item => item.id === id) || null;
      }
      return null;
    }

    if (!isEventPost(post)) {
      console.warn(`Post ${id} is not an event post`);
      if (FALLBACK_TO_MOCK) {
        return mockEvents.find(item => item.id === id) || null;
      }
      return null;
    }

    return wpPostToEventItem(post);
  } catch (error) {
    console.error('Error fetching event by ID:', error);
    
    if (FALLBACK_TO_MOCK) {
      return mockEvents.find(item => item.id === id) || null;
    }
    
    return null;
  }
}

/**
 * Get a single news article by slug
 */
export async function getNewsBySlug(slug: string): Promise<NewsItem | null> {
  if (!USE_WORDPRESS) {
    return mockNews.find(item => item.slug === slug) || null;
  }

  try {
    const post = await fetchPostBySlug(slug);
    
    if (!post) {
      if (FALLBACK_TO_MOCK) {
        return mockNews.find(item => item.slug === slug) || null;
      }
      return null;
    }

    if (!isNewsPost(post)) {
      console.warn(`Post with slug ${slug} is not a news post`);
      if (FALLBACK_TO_MOCK) {
        return mockNews.find(item => item.slug === slug) || null;
      }
      return null;
    }

    return wpPostToNewsItem(post);
  } catch (error) {
    console.error('Error fetching news by slug:', error);
    
    if (FALLBACK_TO_MOCK) {
      return mockNews.find(item => item.slug === slug) || null;
    }
    
    return null;
  }
}

/**
 * Get a single event by slug
 */
export async function getEventBySlug(slug: string): Promise<EventItem | null> {
  if (!USE_WORDPRESS) {
    return mockEvents.find(item => item.slug === slug) || null;
  }

  try {
    const post = await fetchPostBySlug(slug);
    
    if (!post) {
      if (FALLBACK_TO_MOCK) {
        return mockEvents.find(item => item.slug === slug) || null;
      }
      return null;
    }

    if (!isEventPost(post)) {
      console.warn(`Post with slug ${slug} is not an event post`);
      if (FALLBACK_TO_MOCK) {
        return mockEvents.find(item => item.slug === slug) || null;
      }
      return null;
    }

    return wpPostToEventItem(post);
  } catch (error) {
    console.error('Error fetching event by slug:', error);
    
    if (FALLBACK_TO_MOCK) {
      return mockEvents.find(item => item.slug === slug) || null;
    }
    
    return null;
  }
} 