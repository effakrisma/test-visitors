import { useEffect } from 'react'

export default function Contact() {
  useEffect(() => {
    window.visitors?.event('page_view', {
      page: 'contact',
    })
  }, [])

  return (
    <main style={{ padding: 24 }}>
      <h1>Contact Us</h1>
      <p>This is the contact page.</p>
    </main>
  )
}