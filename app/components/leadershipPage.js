'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const executives = [
  {
    name: "John Smith",
    title: "Chief Executive Officer",
    image: "/api/placeholder/150/150",
    bio: "20+ years of industry experience. Previously CEO of Tech Innovations Inc.",
    linkedin: "#",
    department: "Executive"
  },
  {
    name: "Sarah Johnson",
    title: "Chief Operating Officer",
    image: "/api/placeholder/150/150",
    bio: "15+ years operational excellence. Led global operations at Fortune 500 companies.",
    linkedin: "#",
    department: "Operations"
  },
  {
    name: "Mike Chen",
    title: "Chief Technology Officer",
    image: "/api/placeholder/150/150",
    bio: "Former VP of Engineering at Major Tech. PhD in Computer Science.",
    linkedin: "#",
    department: "Technology"
  },
  // Add more executives...
]

const departments = ["Executive", "Operations", "Technology", "Finance"]

export default function LeadershipPage() {
  const [selectedDepartment, setSelectedDepartment] = useState("All")

  const filteredExecutives = selectedDepartment === "All" 
    ? executives 
    : executives.filter(exec => exec.department === selectedDepartment)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Leadership
          </h1>
          <p className="text-xl text-gray-600">
            Meet the team driving our vision and success
          </p>
        </motion.div>
      </section>

      {/* Department Filter */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <button
            onClick={() => setSelectedDepartment("All")}
            className={`px-6 py-2 rounded-full ${
              selectedDepartment === "All"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            All
          </button>
          {departments.map(dept => (
            <button
              key={dept}
              onClick={() => setSelectedDepartment(dept)}
              className={`px-6 py-2 rounded-full ${
                selectedDepartment === dept
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Leadership Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredExecutives.map((executive, index) => (
            <motion.div
              key={executive.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="aspect-square relative">
                <img
                  src={executive.image}
                  alt={executive.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{executive.name}</h3>
                <p className="text-blue-600 mb-4">{executive.title}</p>
                <p className="text-gray-600 mb-4">{executive.bio}</p>
                <a>
                  href={executive.linkedin}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                
                  <span>LinkedIn Profile</span>
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Organization Chart Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Organizational Structure
        </h2>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          {/* Mermaid diagram will be rendered here */}
          
        </div>
      </section>
    </div>
  )
}