import { site } from '../content/site'

const endpoint: string = import.meta.env.VITE_NOTIFY_ENDPOINT ?? ''

export type SubscribeResult = 'sent' | 'mailto'

/**
 * Sends an email address to the configured notify endpoint. Without an
 * endpoint it falls back to a pre-filled mailto so nothing is silently lost.
 */
export async function subscribe(email: string): Promise<SubscribeResult> {
  if (!endpoint) {
    const subject = encodeURIComponent('Notify me when the paper is out')
    const body = encodeURIComponent(`Please add ${email} to the list.`)
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
    return 'mailto'
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ email, source: 'argonrobotics.ai/research' }),
  })
  if (!response.ok) {
    throw new Error(`Notify endpoint responded ${response.status}`)
  }
  return 'sent'
}

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim())
}
