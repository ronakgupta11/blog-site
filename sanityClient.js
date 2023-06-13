import React from 'react'

import imageUrlBuilder from '@sanity/image-url'
import { createClient } from "next-sanity";




export const client = createClient(
 { projectId: "j0uq2vaz",
  dataset: "production",
  apiVersion: "2023-06-12",
  useCdn: false
})


// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client)

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
export function urlFor(source) {
  return builder.image(source)
}