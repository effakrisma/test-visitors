export default function Contact() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Contact Us</h1>
      <p>This is the contact page.</p>

      <button
        onClick={() => alert('Contact button clicked')}
        style={{ marginTop: 16 }}
      >
        Contact Button
      </button>
    </main>
  )
}