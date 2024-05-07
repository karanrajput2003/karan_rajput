import React from "react";
import Navbar from "../components/Navbar";

function Education() {
  return (
    <>
      <Navbar />
      <section className="py-10 px-6 md:px-12 bg-gray-900 education">
        <div className="container mx-auto max-w-3xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Education
              </h2>
            </div>
          </div>
          <br />
          <hr />
          <div className="mt-8 space-y-8">
            <div>
              <h3 className="text-xl font-medium text-white">
              Fr. Conceicao Rodrigues College of Engineering, Bandra
              </h3>
              <p className="mt-1 text-gray-400">
              Bachelor of Engineering in Electronics & Computer Science (2021 - 2025)
              </p>
              <p className="mt-1 text-gray-400">
              CGPA - 9.75
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-white">Balmohan Higher Secondary School, Chopda</h3>
              <p className="mt-1 text-gray-400">HSC (2019 - 2021)</p>
              <p className="mt-1 text-gray-400">
                Percentage - 92
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-white">Pratap Vidya Mandir, Chopda</h3>
              <p className="mt-1 text-gray-400">SSC (2018 - 2019)</p>
              <p className="mt-1 text-gray-400">
                Percentage - 86.20
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Education;
