import { WPPost, cleanWPContent, extractExcerpt } from '@/lib/wordpress';
import { NewsItem, EventItem } from './mockData';

/**
 * Preserve formatting HTML tags while cleaning content
 */
function preserveFormattingHtml(html: string): string {
  // List of allowed HTML tags for formatting
  const allowedTags = [
    'p', 'br', 'strong', 'b', 'em', 'i', 'u', 'span',
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'ul', 'ol', 'li',
    'a', 'blockquote'
  ];
  
  // Store allowed tags temporarily
  const preservedTags: string[] = [];
  
  // Create regex pattern for allowed tags
  const allowedTagsPattern = allowedTags.join('|');
  const allowedTagRegex = new RegExp(`<(/?)\\s*(${allowedTagsPattern})(?:\\s[^>]*)?\\s*/?>`, 'gi');
  
  // Replace allowed tags with placeholders and store them
  let cleanHtml = html.replace(allowedTagRegex, (match) => {
    const index = preservedTags.length;
    preservedTags.push(match);
    return `__PRESERVED_TAG_${index}__`;
  });
  
  // Remove all remaining HTML tags (these are not allowed)
  cleanHtml = cleanHtml.replace(/<[^>]*>/g, '');
  
  // Restore the preserved tags
  preservedTags.forEach((tag, index) => {
    cleanHtml = cleanHtml.replace(`__PRESERVED_TAG_${index}__`, tag);
  });
  
  // Clean up HTML entities
  cleanHtml = cleanHtml
    .replace(/&nbsp;/g, '<br>')  // Convert &nbsp; to line breaks
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&hellip;/g, '...')
    .replace(/&rsquo;/g, "'")
    .replace(/&lsquo;/g, "'")
    .replace(/&rdquo;/g, '"')
    .replace(/&ldquo;/g, '"')
    .replace(/&ndash;/g, '–')
    .replace(/&mdash;/g, '—')
    // Clean up multiple spaces and normalize whitespace
    .replace(/\s+/g, ' ')
    .trim();
    
  return cleanHtml;
}

/**
 * Convert WordPress post to NewsItem interface
 */
export function wpPostToNewsItem(post: WPPost): NewsItem {
  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/images/placeholder-news.jpg';
  const author = post._embedded?.author?.[0]?.name || 'Administrator';
  const categories = post._embedded?.['wp:term']?.[0] || [];
  const primaryCategory = categories.find(cat => cat.taxonomy === 'category');
  
  // Extract clean content and excerpt
  const cleanContent = cleanWPContent(post.content.rendered);
  const excerpt = post.excerpt.rendered 
    ? preserveFormattingHtml(cleanWPContent(post.excerpt.rendered))
    : preserveFormattingHtml(extractExcerpt(cleanContent));

  return {
    id: post.id.toString(),
    title: post.title.rendered,
    titleEn: post.title.rendered, // For now, same as title - can be enhanced with translation plugins
    slug: post.slug,
    excerpt: excerpt,
    excerptEn: excerpt, // For now, same as excerpt
    content: cleanContent,
    contentEn: cleanContent, // For now, same as content
    date: post.date.split('T')[0], // Convert to YYYY-MM-DD format
    author: author,
    authorEn: author, // For now, same as author
    category: primaryCategory?.name || 'Новини',
    categoryEn: primaryCategory?.name || 'News', // Can be enhanced with translations
    image: featuredImage,
    featured: post.sticky || false
  };
}

/**
 * Convert WordPress post to EventItem interface
 */
export function wpPostToEventItem(post: WPPost): EventItem {
  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/images/placeholder-event.jpg';
  const categories = post._embedded?.['wp:term']?.[0] || [];
  const primaryCategory = categories.find(cat => cat.taxonomy === 'category');
  
  // Extract clean content and excerpt
  const cleanContent = cleanWPContent(post.content.rendered);
  const excerpt = post.excerpt.rendered 
    ? preserveFormattingHtml(cleanWPContent(post.excerpt.rendered))
    : preserveFormattingHtml(extractExcerpt(cleanContent));

  // Extract event-specific data from ACF fields
  const acf = post.acf || {};
  let eventDate = acf.event_date || post.date.split('T')[0];
  
  // Handle different date formats
  if (eventDate && eventDate.length === 8 && /^\d{8}$/.test(eventDate)) {
    // Format: YYYYMMDD -> YYYY-MM-DD
    eventDate = `${eventDate.substring(0, 4)}-${eventDate.substring(4, 6)}-${eventDate.substring(6, 8)}`;
  } else if (eventDate && eventDate.includes('/')) {
    // Format: DD/MM/YYYY -> YYYY-MM-DD
    const parts = eventDate.split('/');
    if (parts.length === 3) {
      eventDate = `${parts[2]}-${parts[1].padStart(2, '0')}-${parts[0].padStart(2, '0')}`;
    }
  }
  
  const eventTime = acf.event_time || '10:00';
  const eventLocation = acf.event_location || 'Село Байлово';
  const eventLocationEn = acf.event_location_en || 'Bailovo Village';
  const ticketPrice = acf.ticket_price || 'Безплатен';
  const maxAttendees = acf.max_attendees ? parseInt(acf.max_attendees.toString()) : undefined;

  return {
    id: post.id.toString(),
    title: post.title.rendered,
    titleEn: post.title.rendered, // For now, same as title
    slug: post.slug,
    excerpt: excerpt,
    excerptEn: excerpt, // For now, same as excerpt
    content: cleanContent,
    contentEn: cleanContent, // For now, same as content
    date: eventDate,
    time: eventTime,
    location: eventLocation,
    locationEn: eventLocationEn,
    category: primaryCategory?.name || 'Събития',
    categoryEn: primaryCategory?.name || 'Events',
    image: featuredImage,
    featured: post.sticky || false,
    ticketPrice: ticketPrice,
    maxAttendees: maxAttendees
  };
}

/**
 * Determine if a WordPress post is an event or news based on categories
 */
export function isEventPost(post: WPPost): boolean {
  const categories = post._embedded?.['wp:term']?.[0] || [];
  
  const isEvent = categories.some(cat => 
    cat.taxonomy === 'category' && 
    (cat.slug === 'events' || cat.slug === 'event' || cat.name.toLowerCase().includes('event') || cat.slug === 'събития')
  );
  
  console.log(`🔍 isEventPost check for "${post.title.rendered}":`, {
    postId: post.id,
    categories: categories.map(cat => ({ name: cat.name, slug: cat.slug, taxonomy: cat.taxonomy })),
    isEvent
  });
  
  return isEvent;
}

/**
 * Determine if a WordPress post is a news item based on categories
 */
export function isNewsPost(post: WPPost): boolean {
  const categories = post._embedded?.['wp:term']?.[0] || [];
  
  const isNews = categories.some(cat => 
    cat.taxonomy === 'category' && 
    (cat.slug === 'news' || cat.name.toLowerCase().includes('news') || cat.slug === 'новини')
  );
  
  return isNews;
}

/**
 * Convert array of WordPress posts to NewsItem array
 */
export function wpPostsToNewsItems(posts: WPPost[]): NewsItem[] {
  const filtered = posts.filter(isNewsPost);
  const converted = filtered.map(wpPostToNewsItem);
  return converted;
}

/**
 * Convert array of WordPress posts to EventItem array
 */
export function wpPostsToEventItems(posts: WPPost[]): EventItem[] {
  const filtered = posts.filter(isEventPost);
  const converted = filtered.map(wpPostToEventItem);
  return converted;
}

/**
 * Get featured news from WordPress posts
 */
export function getFeaturedNewsFromWP(posts: WPPost[]): NewsItem[] {
  return wpPostsToNewsItems(posts).filter(item => item.featured);
}

/**
 * Get featured events from WordPress posts
 */
export function getFeaturedEventsFromWP(posts: WPPost[]): EventItem[] {
  return wpPostsToEventItems(posts).filter(item => item.featured);
}

/**
 * Get upcoming events from WordPress posts (events with future dates)
 */
export function getUpcomingEventsFromWP(posts: WPPost[], limit: number = 3): EventItem[] {
  const today = new Date();
  const today_str = today.toISOString().split('T')[0];
  
  console.log('🔍 getUpcomingEventsFromWP debugging:', {
    totalPosts: posts.length,
    todayDate: today_str,
    postsWithCategories: posts.map(p => ({
      id: p.id,
      title: p.title.rendered,
      categories: p._embedded?.['wp:term']?.[0]?.map(cat => ({ name: cat.name, slug: cat.slug })) || []
    }))
  });
  
  const eventItems = wpPostsToEventItems(posts);
  console.log('📅 Converted event items:', eventItems.length);
  
  const upcomingEvents = eventItems
    .filter(event => {
      const eventDate = new Date(event.date);
      const todayReset = new Date(today);
      
      // Reset time to compare only dates
      todayReset.setHours(0, 0, 0, 0);
      eventDate.setHours(0, 0, 0, 0);
      
      const isUpcoming = eventDate >= todayReset;
      console.log(`📅 Event "${event.title}" (${event.date}) - upcoming: ${isUpcoming}`);
      return isUpcoming;
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, limit);
    
  console.log('📅 Final upcoming events:', upcomingEvents);
  return upcomingEvents;
}

/**
 * Get recent news from WordPress posts
 */
export function getRecentNewsFromWP(posts: WPPost[], limit: number = 3): NewsItem[] {
  return wpPostsToNewsItems(posts)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
} 