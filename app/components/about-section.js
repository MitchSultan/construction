import React from "react"

import { motion } from 'framer-motion'

export default function AboutSection  () {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="bg-blue-600 p-8 md:p-12 lg:px-16 lg:py-24">
              <div className="mx-auto max-w-xl text-center">
                <h2 className="text-2xl font-bold text-white md:text-3xl">
                  we are among the best in our field and strive to excell even
                  further
                </h2>

                <p className="hidden text-white/90 sm:mt-4 sm:block">
                  choice consultants boasts of an impressive catalogue of
                  project with the best engineering, design and management
                  services in East Africa.
                </p>

                <div className="mt-4 md:mt-8">
                    <a
                      href="/about/company"
                      className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-blue-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
                    >
                      About Us
                    </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
              <img
                alt=""
                src="/images/ren4.png"
                className="h-40 w-full object-cover sm:h-56 md:h-56 lg:h-full"
              />

              <img
                alt=""
                src="/images/ren5.png"
                className="h-40 w-full object-cover sm:h-56 md:h-56 lg:h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

