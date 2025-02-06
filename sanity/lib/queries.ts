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

export const SHOWS_QUERY = defineQuery(`*[_type == "show" 
  && published == true
  && defined(slug.current)][0...12]
{
  _id,
  title,
  slug,
  published,
  mainImage,
  body,
}`);
