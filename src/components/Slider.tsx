"use client";

import Link from "next/link";

const Slider = () => {
  return (
    <div className="relative h-[calc(100vh-80px)] overflow-hidden">
      {/* VIDEO */}
      <div className="relative w-screen h-full">
        <video
          className="absolute inset-0 object-cover w-full h-full"
          src="/slider/show2.mp4" // Replace with the path to your video file
          autoPlay
          loop
          muted
          playsInline
        />
        {/* OVERLAY */}
        <div className="vid-overlay absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6 pt-40 md:pt-0">
          <h2 className="text-lg md:text-2xl font-light mb-4">
            Porque todas merecemos cosas únicas
          </h2>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-8 z-1">
            Ropa diseñada para ti
          </h1>
          <Link href="/list?cat=all-products">
            <button className="rounded-2xl bg-button text-white py-3 px-4 hover:bg-hovr transition duration-500">
              EXPLORA
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slider;
