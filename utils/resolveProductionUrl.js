// All Slugs go here...
const globalSlugs = {
  home: '/',
  blog: '/blog',
  games: '/games',
  caseStudies: '/games',
  about: '/about',
  careers: '/careers',
  homaLab: '/homa-lab',
  products: '/homa-lab',
  community: '/community',
  privacy: '/privacy',
}

const secret = process.env.SANITY_STUDIO_SANITY_PREVIEW_SECRET
export const getGlobalSlug = (slug) => globalSlugs[slug]

// Change remote url...
const remoteURL = 'https://homa.vercel.app'
const localURL = 'http://localhost:3000'
export const previewURL = window.location.hostname === 'localhost' ? localURL : remoteURL

export const createUrl = ({ slug, globalSlug }) => {
  if (!globalSlug || !previewURL) {
    console.warn('Missing slug or previewURL', { globalSlug, previewURL })
    return ''
  }
  let path = `${globalSlug}`
  if (slug) path += `/${slug.current}`
  return `${previewURL}/api/preview?secret=skX5idURmxw1hHJytBgWMI0szSbDWzpIhnPCThSzMWM6PWMh16t9tXNEJlWVugeGYCI60ITccuOVv0Decrznfv0Ijb6xzlBhVg0fETTGNweee3kIZmbxI3dmSoaYvwojjyEDHbWz21kdSnwa3JLVCnQlIyhjvy65Ek3pXlPuXOrKHimP1LE8&slug=${path}`
}

export default function resolveProductionUrl (document) {
  const url = createUrl({ globalSlug: getGlobalSlug(document._type), slug: document.slug })
  return url
}
