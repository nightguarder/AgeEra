// /schemas/product.js (.ts)

import { Box } from "react-feather";
import { defineType, defineField, defineArrayMember } from "sanity";

export const product = defineType({
  name: "product",
  type: "document",
  title: "Product",
  icon: Box,
  fields: [
    defineField({
      name: "productName",
      type: "string",
      title: "Product name",
    }),
    defineField({
      name: "tags",
      type: "array",
      title: "Tags for item",
      of: [
        defineArrayMember({
          type: 'object',
          name: 'tag',
          fields: [
            {name:'companyName', type: 'reference',to: [{type:'brand'}]},
            {type: 'string', name: 'label'},
            {type: 'string', name: 'value'},
          ]
        })
      ]
    }),
    defineField({
        name: "description",
        title: "Description",
        rows: 4,
        type: "text",
    }),
    defineField(
        {
            title: 'Country of Origin',
            name: 'region',
            type: 'string',
            initialValue: 'cz',
            options: {
              list: [
                { title: 'United States', value: 'us' },
                { title: 'Canada', value: 'can' },
                { title: 'Norway',  value: 'nor' },
                { title: 'Germany',  value: 'de' },
                { title: 'UK',       value: 'uk' },
                { title: 'Czech Republic', value: 'cz' },
              ],
               // <-- predefined values
              //layout: 'radio' // <-- defaults to 'dropdown'
            }
        },
    )
  ],
  preview: {
    select: {
      title: 'Product',
      subtitle: 'productName'
    }
  }
})