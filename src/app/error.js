'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      flexDirection: 'column',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#EC595A' }}>
        Something went wrong!
      </h2>
      <p style={{ marginBottom: '2rem', color: '#666' }}>
        We're sorry, but something unexpected happened.
      </p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button
          onClick={() => reset()}
          className="btn btn-red"
          style={{ padding: '12px 24px' }}
        >
          Try again
        </button>
        <Link href="/" className="btn btn-outline">
          Go to Homepage
        </Link>
      </div>
    </div>
  )
}
