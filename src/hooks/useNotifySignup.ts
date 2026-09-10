import { useCallback, useState } from 'react'
import { isValidEmail, subscribe } from '../utils/subscribe'

export type SignupStatus = 'idle' | 'invalid' | 'sending' | 'done' | 'error'

export interface NotifySignup {
  email: string
  status: SignupStatus
  setEmail: (value: string) => void
  submit: () => Promise<void>
  reset: () => void
}

export function useNotifySignup(): NotifySignup {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<SignupStatus>('idle')

  const submit = useCallback(async () => {
    if (!isValidEmail(email)) {
      setStatus('invalid')
      return
    }
    setStatus('sending')
    try {
      await subscribe(email.trim())
      setStatus('done')
    } catch (error) {
      console.error('notify signup failed', error)
      setStatus('error')
    }
  }, [email])

  const reset = useCallback(() => {
    setEmail('')
    setStatus('idle')
  }, [])

  return { email, status, setEmail, submit, reset }
}
