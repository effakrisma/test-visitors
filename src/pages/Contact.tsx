import { useEffect } from 'react'

export default function Contact() {
  // Event saat halaman Contact dibuka
  useEffect(() => {
    window.visitors?.event('page_view', {
      page: 'contact',
    })
  }, [])

  // Event saat tombol diklik
  const handleContactClick = () => {
    window.visitors?.event('contact_button_clicked', {
      page: 'contact',
      action: 'click_email_button',
    })
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>Contact Us</h1>
      <p>Jika ingin menghubungi kami, klik tombol di bawah.</p>

      <button
        onClick={handleContactClick}
        style={{
          padding: '10px 16px',
          borderRadius: 8,
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Contact via Email
      </button>
    </main>
  )
}