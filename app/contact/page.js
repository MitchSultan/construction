'use client'

import { WelcomePopup } from '../components/welcomepopup'
import { ScrollAnimation } from '../components/scrollAnimation'
import { StaggeredList } from '../components/staggeredlist'
import { useEffect, useState } from 'react'

export default function Home() {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    // Show popup after a small delay
    const timer = setTimeout(() => setShowPopup(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const items = [
    "First Item",
    "Second Item",
    "Third Item",
    "Fourth Item"
  ]

  return (
    <main className="min-h-screen p-8">
      {showPopup && <WelcomePopup />}

      {/* Hero Section with scroll animation */}
      <ScrollAnimation>
        <h1 className="text-4xl font-bold mb-4">
          Welcome to My Website
        </h1>
      </ScrollAnimation>

      {/* Content sections with staggered animations */}
      <div className="mt-20">
        <ScrollAnimation>
          <h2 className="text-2xl font-bold mb-8">
            Featured Content
          </h2>
        </ScrollAnimation>

        <StaggeredList items={items} />
      </div>

      {/* Individual elements with scroll animations */}
      <div className="mt-20 space-y-12">
        <ScrollAnimation delay={0.2}>
          <section className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-bold">Section 1</h3>
            <p>Content for section 1...</p>
          </section>
        </ScrollAnimation>

        <ScrollAnimation delay={0.4}>
          <section className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-bold">Section 2</h3>
            <p>Content for section 2...</p>
          </section>
        </ScrollAnimation>
      </div>
      {/* Individual elements with scroll animations */}
      <div className="mt-20 space-y-12">
        <ScrollAnimation delay={0.2}>
          <section className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-bold">Section 1</h3>
            <p>Content for section 1...</p>
          </section>
        </ScrollAnimation>

        <ScrollAnimation delay={0.4}>
          <section className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-bold">Section 2</h3>
            <p>Content for section 2...</p>
          </section>
        </ScrollAnimation>
      </div>
      {/* Individual elements with scroll animations */}
      <div className="mt-20 space-y-12">
        <ScrollAnimation delay={0.2}>
          <section className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-bold">Section 1</h3>
            <p>Content for section 1...</p>
          </section>
        </ScrollAnimation>

        <ScrollAnimation delay={0.4}>
          <section className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-bold">Section 2</h3>
            <p>Content for section 2...</p>
          </section>
        </ScrollAnimation>
      </div>
      {/* Individual elements with scroll animations */}
      <div className="mt-20 space-y-12">
        <ScrollAnimation delay={0.2}>
          <section className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-bold">Section 1</h3>
            <p>Content for section 1...</p>
          </section>
        </ScrollAnimation>

        <ScrollAnimation delay={0.4}>
          <section className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-bold">Section 2</h3>
            <p>Content for section 2...</p>
          </section>
        </ScrollAnimation>
      </div>
    </main>
  )
}