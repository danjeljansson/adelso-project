import { defineQuery } from "next-sanity";

export const POSTS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)][0...12]{
  _id, title, slug
}`);

export const POST_QUERY =
  defineQuery(`*[_type == "post" && slug.current == $slug][0]{
   _id,
  _type,
  title,
  body,
  mainImage,
  relatedPosts[]{
   _key, ...@->{_id, title, slug}
}}`);

export const EVENT_QUERY =
  defineQuery(`*[_type == "event" && defined(publishedAt) && publishedAt <= now()] 
  | order(publishedAt desc)[0] {
    _id,
    _type,
    title,
    subheading,
    slug,
    "authorName": author->name,
    mainImage,
    publishedAt,
    body,
    cast ->
  }`);

export const CAST_QUERY =
  defineQuery(`*[_type == "cast"] | order(_createdAt desc) {
    _id,
    _type,
    name,
    role,
    about,
    "castImageUrl": image.asset->url
  }
`);

export const CREW_QUERY = `*[_type == "crew"] {
  _id,
  title,
  subheading,
  slug,
  "authorName": author->name,
  publishedAt,
  body
}`;

export const POSTER_QUERY = `*[_type == "poster"] | order(_createdAt desc)[0] {
  _id,
  "posterUrl": image.asset->url,
  "altText": image.alt,
  ticketUrl
}`;

export const ARTICLE_QUERY = `*[_type == "article"][] {
  _id,
  title,                 
 articles[] {
  name,
  "articleUrl": url,
  "imageUrl": asset->url,
  "alt": alt
  }
}`;

export const SPONSOR_QUERY = `*[_type == "sponsor"][] {
  _id,
  title,
  url,
  sponsors[]{
    name,
    url,
    "imageUrl": asset->url,
    "alt": alt
  }
}`;

export const BUTTON_QUERY = `
*[_type == "event" && defined(title) && !(_id in path("drafts.**")) && publishedAt < now()][0] {
  "event": title,
  "hasCast": count(*[_type == "cast" && !(_id in path("drafts.**")) && publishedAt < now()]) > 0,
  ticketUrl
}
`;
