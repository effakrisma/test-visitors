export {}

declare global {
  interface Window {
    visitors?: {
      event: (name: string, data?: Record<string, any>) => void
    }
  }
}