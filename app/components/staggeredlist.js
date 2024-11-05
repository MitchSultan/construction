'use client'

import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
}

export function StaggeredList({ items }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          variants={item}
          className="mb-4 p-4 bg-white rounded shadow"
        >
          {item}
        </motion.div>
      ))}
    </motion.div>
  )
}