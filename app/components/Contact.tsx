'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function Contact() {
  const [status, setStatus] = useState('')
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      const response = await fetch('https://formspree.io/f/mgvvreyn', {
        method: 'POST',
        body: JSON.stringify(formState),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })

      if (response.ok) {
        setStatus('Message sent successfully!')
        setFormState({ name: '', email: '', message: '' })
      } else {
        setStatus('Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      setStatus('An error occurred. Please try again later.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  return (
    <section className="py-20" id="contact">
      <h2 className="text-3xl font-bold text-center mb-10">Contact Me</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            required
          />
        </div>
        <Button type="submit" className="w-full">Send Message</Button>
        {status && <p className="mt-4 text-center">{status}</p>}
      </form>
    </section>
  )
}

