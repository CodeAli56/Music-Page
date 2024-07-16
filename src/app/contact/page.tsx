'use client'
import { BackgroundBeams } from '@/components/ui/background-beams'
import { Button } from '@/components/ui/moving-border'
import { FormEvent, useState } from 'react'


function Contact() {

    const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submitted:', { email, message });
  };
  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased text-white">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Contact Us
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          We're here to help with any questions about our courses, programs, or events.
        </p>
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        <input type="text" onChange={(e)=> setEmail(e.target.value)} placeholder="hi@manuarora.in" className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-gray-900 placeholder:text-neutral-700 p-4" />

        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your message"       className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-gray-900 placeholder:text-neutral-700 mt-4" rows={5} />

        <button type="submit" className="px-6 py-2 mt-4 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">Send Message</button>
    </form>
      </div>
      <BackgroundBeams />
    </div>
  )
}

export default Contact


