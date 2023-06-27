/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

// see https://www.sanity.io/docs/api-versioning for how versioning works
import { apiVersion, dataset, projectId } from './sanity/env'
import schemaObjects from './sanity/schemas/index'

export default defineConfig({
  title: "Age Era website",
  basePath: '/studio', // <-- important that `basePath` matches the route you're mounting your studio from, it applies to both `/pages` and `/app`
  projectId,
  dataset,
  //edit schemas in './sanity/schema'
  schema: {
    types: schemaObjects
  },
  plugins: [
    deskTool(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
