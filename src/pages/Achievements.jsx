import React from 'react'
import Navbar from '../components/Navbar'

function Achievements() {
  return (
    <>
        <Navbar />
        <section className="py-10 px-6 md:px-12 bg-gray-900 education">
        <div className="container mx-auto max-w-3xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Achievements
              </h2>
            </div>
          </div>
          <br />
          <hr />
          <div className="mt-8 space-y-8">
            <div>
              <h3 className="text-xl font-medium text-white">
             Achieved the 1st rank in the Computer Science And Electronics Department during the second year of study
              </h3>
              <p className="mt-1 text-gray-400">
             2023
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-white">Secured the 3rd position in the Prakalp 2.0 Inter-College Project Competition</h3>
              <p className="mt-1 text-gray-400">
                2024
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Achievements
