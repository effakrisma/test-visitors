import { useEffect } from 'react'

export default function Contact() {
  useEffect(() => {
    // tracking page view sebagai event
    window.visitors?.event('page_view', {
      page: 'contact',
    })
  }, [])

  const handleClick = () => {
    window.visitors?.event('contact_button_click', {
      label: 'Contact Us Button',
    })
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>Contact Us</h1>
      <p>You can reach us through this page.</p>

      <button onClick={handleClick}>
        Contact Button
      </button>
    </main>
  )
}