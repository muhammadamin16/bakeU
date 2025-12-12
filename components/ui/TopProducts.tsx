export default function TopProducts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center mt-20">
      <div className="w-[500px] h-[500px]">
        <img
          src="/images/baget.webp"
          className="w-full h-full rounded-4xl object-cover"
          alt="img"
        />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-6xl">Your only dose of delight</h1>
        <p className="text-xl">Featured Item -</p>
        <div className="flex items-center gap-5">
          <div className="w-[100px] h-[100px]">
            <img src="/images/crousant.png" className="rounded-xl" alt="img" />
          </div>
          <div>
            <h1 className="text-2xl">Crousant</h1>
            <p>Gluten Free</p>
          </div>
          <div className="h-12 w-px bg-black" />
          <p className="text-3xl">$12</p>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
          officiis, pariatur omnis quas aliquid rem vero unde laborum inventore
          veritatis.
        </p>
      </div>
      <div>
        <h1>
          Product we bake <br /> here daily -
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3">
          <span className="rounded-full px-4 py-3 bg-green-400"></span>
        </div>
      </div>
    </div>
  );
}
