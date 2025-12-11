import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="bg-white rounded-[32px] p-10 shadow-md">
      <h1 className="uppercase text-[64px] md:text-[90px] leading-[0.8] font-black origin-left [transform:scaleX(1.1)] tracking-[0.05em]">
        bake the cookies
      </h1>

      <div className="mt-6 flex items-start justify-between gap-8">
        <div className="flex flex-col gap-4">
          <p className="uppercase text-3xl md:text-4xl font-semibold">
            Premium bread <br /> and cookies made <br /> from scratch
          </p>
          <span className="inline-flex items-center px-4 py-1 rounded-full bg-sky-500 text-white font-semibold w-fit">
            Fresh
          </span>
          <p className="text-lg md:text-xl">
            We're literally obsessed with <br /> giving more of what you love!
          </p>
          <div className="flex items-center gap-4 text-xl">
            <button className="bg-amber-300 rounded-full px-6 py-3 cursor-pointer border-2 border-black font-semibold">
              Order Now
            </button>
            <button className="flex items-center gap-1">
              Cooking blog
              <ChevronRight />
            </button>
          </div>
        </div>

        <div className="w-[600px] h-[280px] rounded-[32px] overflow-hidden bg-yellow-300 flex items-end justify-center">
          <img
            width={600}
            height={300}
            src="/hero_photo.jpg"
            className="h-full object-cover"
            alt="hero photo"
          />
        </div>
      </div>
    </div>
  );
}
