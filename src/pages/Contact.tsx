import { useEffect } from 'react'

export default function Contact() {
  useEffect(() => {
    const timer = setTimeout(() => {
      if ((window as any).visitors) {
        ;(window as any).visitors.event('page_view', {
          page: 'contact',
        })
      }
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const handleClick = () => {
    if ((window as any).visitors) {
      ;(window as any).visitors.event('contact_button_click', {
        label: 'Contact Button',
      })
    }
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>Contact Us</h1>
      <p>This is the contact page.</p>

      <button onClick={handleClick}>
        Contact Button
      </button>
    </main>
  )
}