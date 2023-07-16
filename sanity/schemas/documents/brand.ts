import { Compass } from "react-feather";
import { defineField, defineType } from "sanity";
import { validateSlug } from "src/utils/validateSlug";

export const brand = defineType({
    name: 'brand',
  title: 'Brand',
  type: 'document',
  icon: Compass,
  fields: [
    defineField({
        name: "companyName",
        type: "string",
        title: "Company name",
        validation: Rule => Rule.required()
    }),
    defineField({
        name: "slugRef",
        type: "slug",
        title: "Reference",
        options: { source: 'title'},
        validation: validateSlug
    }),
  ]
})