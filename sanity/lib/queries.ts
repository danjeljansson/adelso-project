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
  defineQuery(`*[_type == "event"] | order(publishedAt desc)[0]{
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

export const BUTTON_QUERY =
  defineQuery(`*[_type == "event" && defined(title)][0] {
  "event": title,
  "hasCast": count(*[_type == "cast"]) > 0,
  ticketUrl
  }`);
