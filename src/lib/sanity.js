import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Sanity client configuration
export const client = createClient({
  projectId: 'lebhd5s0',
  dataset: 'production',
  useCdn: true, // Enable CDN for faster response
  apiVersion: '2024-01-01', // Use current date
});

// Helper function to generate image URLs
const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

// Query to fetch all blog posts
export async function getAllBlogPosts() {
  const query = `*[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    "mainImage": mainImage.asset->url,
    category,
    readTime,
    publishedAt,
    body,
    authorName,
    "authorImage": authorImage.asset->url,
    authorTitle
  }`;
  
  return await client.fetch(query);
}

// Query to fetch a single blog post by slug
export async function getBlogPostBySlug(slug) {
  const query = `*[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    "mainImage": mainImage.asset->url,
    category,
    readTime,
    publishedAt,
    body,
    seo,
    authorName,
    "authorImage": authorImage.asset->url,
    authorTitle
  }`;
  
  return await client.fetch(query, { slug });
}

// Query to fetch related posts by category
export async function getRelatedPosts(category, currentPostId, limit = 3) {
  const query = `*[_type == "blogPost" && category == $category && _id != $currentPostId] | order(publishedAt desc) [0...$limit] {
    _id,
    title,
    slug,
    excerpt,
    "mainImage": mainImage.asset->url,
    category,
    readTime,
    publishedAt
  }`;
  
  return await client.fetch(query, { category, currentPostId, limit });
}
