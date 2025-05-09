import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { eventType } from "./eventType";
import { castType } from "./castType";
import { crewType } from "./crewType";
import { sponsorType } from "./sponsorType";
import { posterType } from "@sanity/schemaTypes/posterType";
import { articleType } from "./articleType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    eventType,
    castType,
    crewType,
    sponsorType,
    posterType,
    articleType,
  ],
};
