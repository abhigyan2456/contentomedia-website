import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

// IMPORTANT: Replace 'YOUR_PROJECT_ID_HERE' with your actual Sanity Project ID
// You can find it in your main .env file as VITE_SANITY_PROJECT_ID
export default defineConfig({
  name: 'default',
  title: 'Contentora Media Blog',

  // Project ID from Sanity
  projectId: 'lebhd5s0',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
