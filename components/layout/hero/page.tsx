import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="bg-white rounded-4xl p-10 shadow-md relative mt-6">
      <h1 className="uppercase text-[64px] md:text-[90px] leading-[0.8] font-black origin-left transform-[scaleX(1.1)] tracking-[0.05em]">
        bake the cookies
      </h1>

      <div className="mt-6 flex items-start justify-between gap-8">
        <div className="flex flex-col gap-4 relative">
          <p className="uppercase text-3xl md:text-4xl font-semibold">
            Premium bread <br /> and cookies made <br /> from scratch
          </p>
          <span className="absolute items-center px-4 py-1 rounded-full bg-sky-500 text-white w-fit right-0 bottom-37">
            Fresh
          </span>
          <p className="text-lg md:text-xl">
            We're literally obsessed with <br /> giving more of what you love!
          </p>
          <div className="flex items-center gap-4 text-xl">
            <button className="bg-amber-300 rounded-full px-6 py-3 cursor-pointer border-2 border-black">
              Order Now
            </button>
            <button className="flex items-center gap-1">
              Cooking blog
              <ChevronRight />
            </button>
          </div>
        </div>

        <div className="w-[600px] h-[280px] rounded-4xl overflow-hidden bg-yellow-300 flex items-end justify-center">
          <img
            width={600}
            height={300}
            src="/images/hero_photo.jpg"
            className="h-full object-cover"
            alt="hero photo"
          />
        </div>
      </div>
      <span className="absolute items-center px-4 py-1 rounded-full bg-green-600 text-white  w-fit top-15 left-50 -rotate-15 uppercase">
        Tasty
      </span>
      <span className="absolute items-center px-4 py-1 rounded-full bg-orange-500 text-white  w-fit top-15 left-180">
        Crunchy
      </span>
    </div>
  );
}
