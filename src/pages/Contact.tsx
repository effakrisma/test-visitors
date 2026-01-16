export default function Contact() {
  const handleClick = () => {
    alert('berhasil membuat event')
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>Contact Us</h1>
      <p>This is the contact page.</p>

      <button
        onClick={handleClick}
        style={{ marginTop: 16 }}
      >
        Contact Button
      </button>
    </main>
  )
}