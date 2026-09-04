import inventory from '../data/site-content.json';

type Rendered = { rendered: string };

export type WpPage = {
  id: number;
  slug: string;
  link: string;
  title: Rendered;
  content: Rendered;
  excerpt: Rendered;
  featured_media: number;
};

export type WpPost = WpPage & {
  date: string;
};

type Inventory = {
  pages: WpPage[];
  posts: WpPost[];
};

const data = inventory as Inventory;

export const pages = data.pages;
export const posts = data.posts;

export function findPage(slug: string) {
  const page = pages.find((entry) => entry.slug === slug);
  if (!page) {
    throw new Error(`Missing page in content inventory: ${slug}`);
  }
  return page;
}

export function findPost(slug: string) {
  const post = posts.find((entry) => entry.slug === slug);
  if (!post) {
    throw new Error(`Missing post in content inventory: ${slug}`);
  }
  return post;
}

export function decodeEntities(value: string) {
  return value
    .replace(/&#8211;/g, '-')
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#038;/g, '&')
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/<[^>]+>/g, '')
    .trim();
}

export function staticHtml(html: string) {
  return html
    .replaceAll('https://facilitr.org/wp-content/', '/wp-content/')
    .replaceAll('https:\\/\\/facilitr.org\\/wp-content\\/', '\\/wp-content\\/')
    .replaceAll('https://facilitr.org/', '/')
    .replaceAll('http://facilitr.org/', '/')
    .replace(/<h1(\s+class="eael-entry-title"[^>]*)>/gi, '<h2$1>')
    .replace(/<\/h1>(<\/header><div class="eael-entry-content">)/gi, '</h2>$1')
    .replace(/<a\s+href="\/author\/ananda-academy\/">(<img[^>]+>)<\/a>/gi, '<span class="static-author-avatar">$1</span>')
    .replaceAll('data-src="/wp-content/', 'src="/wp-content/')
    .replaceAll('data-srcset="/wp-content/', 'srcset="/wp-content/')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<link[^>]+wp-json[^>]*>/gi, '')
    .replace(/<a[^>]+full\.services[^>]*>[\s\S]*?<\/a>/gi, '');
}

export function postPath(post: WpPost) {
  const date = new Date(post.date);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `/${year}/${month}/${day}/${post.slug}/`;
}
