"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"

import { motion, AnimatePresence } from 'framer-motion'

const carouselData = [
  {
    title: "Expert Construction Consultation",
    description: "We provide top-tier consultation services for all your construction needs.",
    buttonText: "Learn More",
    buttonLink: "/services",
    imageSrc: "/images/hero1.jpg",
    imageAlt: "Construction site with workers",
  },
  {
    title: "Project Management Excellence",
    description: "Our team ensures your projects are completed on time and within budget.",
    buttonText: "Our Projects",
    buttonLink: "/projects",
    imageSrc: "/images/hero2.jpg",
    imageAlt: "Project manager reviewing plans",
  },
  {
    title: "Innovative Building Solutions",
    description: "We leverage cutting-edge technology to deliver innovative building solutions.",
    buttonText: "Our Approach",
    buttonLink: "/about",
    imageSrc: "/images/hero3.jpg",
    imageAlt: "3D building model on a computer",
  },
  {
    title: "Sustainable Construction Practices",
    description: "We're committed to environmentally friendly and sustainable construction methods.",
    buttonText: "Learn More",
    buttonLink: "/services/sustainable-construction",
    imageSrc: "/images/hero4.jpg",
    imageAlt: "Green building with solar panels",
  },
]

export default function HeroCarousel() {
  const [api, setApi] = React.useState()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      if (api) {
        api.scrollNext()
      }
    }, 50000) // Change slide every 5 seconds

    return () => clearInterval(intervalId)
  }, [api])

  return (
    <div className="  max-w-full max-h-screen lg:overflow-hidden flex items-center justify-center p-5 sm:my-7 lg:p-10">  
          <Carousel setApi={setApi} className="w-full lg:p-10 mx-auto">
      <CarouselContent>
        {carouselData.map((item, index) => (
          <CarouselItem key={index}>
            <Card className="border-none">
              <CardContent className="flex flex-col md:flex-row items-center p-6">
                <div className="md:w-1/2 md:pr-6 mb-6 md:mb-0">
                  <motion.div><h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4">{item.title}</h1></motion.div>
                  <p className="text-lg mb-6">{item.description}</p>
                  <motion.button
                  whileHover={{ scale: 1.1 }}
                  
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}>
                    <Button asChild>
                    <Link href={item.buttonLink}>{item.buttonText}</Link>
                  </Button></motion.button>
                </div>
                <div className= "max-w-full h-auto md:w-1/2">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className=" md:flex -left-0" />
      <CarouselNext className=" md:flex -right-0" />
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 py-2">
        {Array.from({ length: count }).map((_, index) => (
          <Button
            key={index}
            variant="outline"
            size="icon"
            className={`w-2 h-2 rounded-full ${
              index === current - 1 ? "bg-primary" : "bg-secondary"
            }`}
            onClick={() => api?.scrollTo(index)}
          >
            <span className="sr-only">{`Go to slide ${index + 1}`}</span>
          </Button>
        ))}
      </div>
    </Carousel>
    </div>

  )
}