import React from "react";

function AboutComponent3() {
  return (
    <div className=" flex sm:gap-3 ">
      <div className="max-w-6xl mx-auto px-4 flex-col md:flex-row flex justify-between items-center">
        <section className=" md:w-[50%] grid place-items-center ">
          <img
            src="equip.jpg"
            alt="equiments"
            className=" w-[90%] sm:w-full h-[90%]  md:h-[90%] rounded-md brightness-75 object-cover"
          />
        </section>
        <section className=" md:w-[50%] flex justify-center flex-col gap-4 p-4 ">
          <h1 className=" text-3xl ">Our Mission</h1>
          <p className=" text-sky-600">
            At Accon Lab, our mission is to empower the next generation of
            scientists, educators, and innovators by making reliable,
            affordable, and accurate scientific equipment accessible to
            everyone. We believe that science should be hands-on, exciting, and
            built on a strong foundation of reliable tools.
          </p>
        </section>
      </div>
    </div>
  );
}

export default AboutComponent3;
