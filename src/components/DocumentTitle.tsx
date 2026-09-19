import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { metaForPath, origin } from '../content/routes'

function setMeta(selector: string, attribute: string, value: string) {
  document.querySelector(selector)?.setAttribute(attribute, value)
}

/** Keeps the title, description, canonical and social tags in step with
 *  client-side navigation. The prerendered HTML already carries the right
 *  values on first load, so this only matters after an in-app link. */
export function DocumentTitle() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = metaForPath(pathname)
    const url = origin + (meta.path === '/' ? '/' : meta.path)

    document.title = meta.title
    setMeta('meta[name="description"]', 'content', meta.description)
    setMeta('link[rel="canonical"]', 'href', url)
    setMeta('meta[property="og:title"]', 'content', meta.title)
    setMeta('meta[property="og:description"]', 'content', meta.description)
    setMeta('meta[property="og:url"]', 'content', url)
    setMeta('meta[name="twitter:title"]', 'content', meta.title)
    setMeta('meta[name="twitter:description"]', 'content', meta.description)
  }, [pathname])

  return null
}
