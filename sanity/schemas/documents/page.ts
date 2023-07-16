import {defineField, defineType} from 'sanity'
import { Paperclip } from 'react-feather'

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: Paperclip,
  fields: [
    // Title
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    /* // Body
    defineField({
      name: 'body',
      title: 'Body',
      type: 'body', //??A custom object? 
      group: 'editorial',
    }), */
  ]
})