# WordPress REST API Integration

This document explains how to integrate the Bailovo village website with WordPress using the REST API.

## Overview

The website is designed to work with WordPress as a headless CMS, using the WordPress REST API to fetch posts (news and events) with custom fields and categories.

## Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# WordPress REST API Configuration
# Set this to your WordPress site URL (without trailing slash)
NEXT_PUBLIC_WP_API_URL=https://your-wordpress-site.com/wp-json/wp/v2

# WordPress Integration Settings
# Set to 'true' to enable WordPress API calls, 'false' to use mock data
NEXT_PUBLIC_USE_WORDPRESS=false

# Fallback to mock data if WordPress is unavailable
# Set to 'false' to show empty states instead of mock data when WordPress fails
NEXT_PUBLIC_FALLBACK_TO_MOCK=true
```

## WordPress Setup

### 1. Categories Setup

Create the following categories in your WordPress admin:

- **News** (slug: `news` or `новини`)
- **Events** (slug: `events` or `събития`)
- **Museum** (slug: `museum`)
- **Culture** (slug: `culture`)
- **History** (slug: `history`)

### 2. Custom Fields for Events

For events, you'll need to add the following custom fields using Advanced Custom Fields (ACF) plugin:

- `event_date` (Date Picker) - Event date
- `event_time` (Time Picker) - Event start time
- `event_location` (Text) - Event location in Bulgarian
- `event_location_en` (Text) - Event location in English
- `event_end_time` (Time Picker) - Event end time (optional)
- `ticket_price` (Text) - Ticket price or "Free"
- `max_attendees` (Number) - Maximum number of attendees (optional)

### 3. Post Structure

#### News Posts
- **Title**: Post title
- **Content**: Full article content
- **Excerpt**: Short summary (auto-generated if empty)
- **Featured Image**: Post thumbnail
- **Categories**: Assign to "News" category
- **Sticky Posts**: Use WordPress sticky posts feature for featured news

#### Event Posts
- **Title**: Event title
- **Content**: Event description
- **Excerpt**: Short event summary
- **Featured Image**: Event image
- **Categories**: Assign to "Events" category
- **Custom Fields**: Fill in event-specific fields (date, time, location, etc.)
- **Sticky Posts**: Use WordPress sticky posts feature for featured events

### 4. Recommended WordPress Plugins

1. **Advanced Custom Fields (ACF)** - For event custom fields
2. **Yoast SEO** - For better SEO
3. **Polylang** or **WPML** - For multilingual content (optional)
4. **WP REST API Controller** - For better REST API control (optional)

## API Endpoints Used

The website uses the following WordPress REST API endpoints:

- `GET /wp-json/wp/v2/posts` - Get all posts
- `GET /wp-json/wp/v2/posts?categories={id}` - Get posts by category
- `GET /wp-json/wp/v2/posts/{id}` - Get single post
- `GET /wp-json/wp/v2/posts?slug={slug}` - Get post by slug
- `GET /wp-json/wp/v2/categories` - Get all categories
- `GET /wp-json/wp/v2/categories?slug={slug}` - Get category by slug

## Development Modes

### 1. Mock Data Mode (Default)
```env
NEXT_PUBLIC_USE_WORDPRESS=false
NEXT_PUBLIC_FALLBACK_TO_MOCK=true
```
Uses built-in mock data for development and testing.

### 2. WordPress Mode with Fallback
```env
NEXT_PUBLIC_USE_WORDPRESS=true
NEXT_PUBLIC_FALLBACK_TO_MOCK=true
```
Tries to fetch from WordPress, falls back to mock data if unavailable.

### 3. WordPress Only Mode
```env
NEXT_PUBLIC_USE_WORDPRESS=true
NEXT_PUBLIC_FALLBACK_TO_MOCK=false
```
Only uses WordPress API, shows empty states if unavailable.

## Content Structure

### News Item Fields
- `id` - Post ID
- `title` - Post title
- `titleEn` - English title (from translation plugin or same as title)
- `slug` - Post slug
- `excerpt` - Post excerpt
- `excerptEn` - English excerpt
- `content` - Post content
- `contentEn` - English content
- `date` - Publication date
- `author` - Author name
- `authorEn` - English author name
- `category` - Category name
- `categoryEn` - English category name
- `image` - Featured image URL
- `featured` - Whether post is sticky/featured

### Event Item Fields
- `id` - Post ID
- `title` - Event title
- `titleEn` - English title
- `slug` - Post slug
- `excerpt` - Event excerpt
- `excerptEn` - English excerpt
- `content` - Event description
- `contentEn` - English description
- `date` - Event date (from custom field)
- `time` - Event time (from custom field)
- `location` - Event location
- `locationEn` - English location
- `category` - Category name
- `categoryEn` - English category name
- `image` - Featured image URL
- `featured` - Whether post is sticky/featured
- `ticketPrice` - Ticket price
- `maxAttendees` - Maximum attendees

## Testing

To test the WordPress integration:

1. **Create Environment File**: Create a `.env.local` file in your project root:
```env
# WordPress Integration Test
NEXT_PUBLIC_USE_WORDPRESS=true
NEXT_PUBLIC_WP_API_URL=https://your-wordpress-site.com/wp-json/wp/v2
NEXT_PUBLIC_FALLBACK_TO_MOCK=true
```

2. **Start Development Server**: Run `npm run dev` and open the homepage

3. **Use Debug Panel**: Look for the debug panel in the bottom-right corner (development only)
   - Check environment variables
   - Test API connection directly
   - View configuration status

4. **Check Browser Console**: Look for detailed debug logs:
   - `[WordPress API]` - API requests and responses
   - `[Content Service]` - Service layer operations
   - `[WP Adapter]` - Data conversion and filtering

5. **Common Debug Steps**:
   - Verify WordPress URL is accessible
   - Check if WordPress REST API is enabled
   - Confirm categories exist in WordPress
   - Test API endpoint manually: `https://your-site.com/wp-json/wp/v2/posts`

## Troubleshooting

### Common Issues

1. **CORS Errors**: Make sure your WordPress site allows requests from your domain
2. **API Not Available**: Check if WordPress REST API is enabled
3. **Empty Responses**: Verify categories are set up correctly
4. **Custom Fields Missing**: Ensure ACF plugin is installed and fields are configured
5. **No Data Fetched**: Check debug panel and console logs for specific errors

### Debug Steps for "No Data Fetched"

If you're seeing no data being fetched, follow these steps:

1. **Check Debug Panel**: Open the debug panel in bottom-right corner
   - Verify `WordPress Enabled` shows `true`
   - Confirm `WordPress URL` is set correctly
   - Click "Test API Connection" button

2. **Console Debug Logs**: Look for these specific logs:
   ```
   [Content Service] 📰 getNews called
   [Content Service] 🌐 Fetching from WordPress API
   [WordPress API] 🚀 Starting fetchPosts
   [WordPress API] 📍 WP_API_URL: your-url-here
   [WordPress API] 📡 Making request to: full-url
   [WordPress API] 📨 Response status: 200
   ```

3. **Manual API Test**: Test your WordPress API directly:
   ```
   # Test basic posts endpoint
   curl https://your-wordpress-site.com/wp-json/wp/v2/posts
   
   # Test categories endpoint
   curl https://your-wordpress-site.com/wp-json/wp/v2/categories
   ```

4. **Check Environment Variables**: Use debug panel "Log Environment" button to verify:
   - `NEXT_PUBLIC_USE_WORDPRESS` is `"true"`
   - `NEXT_PUBLIC_WP_API_URL` points to correct URL
   - URL format: `https://domain.com/wp-json/wp/v2` (no trailing slash)

5. **Category Issues**: Most common cause of no data:
   - WordPress posts must have categories: `news`, `events`, `новини`, or `събития`
   - Check debug logs for: `[WP Adapter] 🏷️ Checking if post is news/event`
   - Verify category slugs match exactly

### Debug Mode

The application includes comprehensive debug logging in development mode. All debug logs are prefixed with service names for easy filtering.

## Production Deployment

For production deployment:

1. Set `NEXT_PUBLIC_USE_WORDPRESS=true`
2. Configure your WordPress site URL
3. Set `NEXT_PUBLIC_FALLBACK_TO_MOCK=false` for production
4. Test all functionality before going live

## Security Considerations

- WordPress REST API is public by default
- Consider rate limiting for high-traffic sites
- Use HTTPS for all API requests
- Validate and sanitize all content from WordPress 