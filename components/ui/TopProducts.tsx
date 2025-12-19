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
        <h1 className="text-6xl">Маленькое удовольствие на каждый день</h1>
        <p className="text-xl">Рекомендуем сегодня -</p>
        <div className="flex items-center gap-5">
          <div className="w-[100px] h-[100px]">
            <img src="/images/crousant.png" className="rounded-xl" alt="img" />
          </div>
          <div>
            <h1 className="text-2xl">Круассан</h1>
            <p>Без глютена</p>
          </div>
          <div className="h-12 w-px bg-black" />
          <p className="text-3xl">$12</p>
        </div>
        <p>
          Домашний круассан с хрустящей корочкой и мягкой серединой. Готовим
          небольшими партиями, без спешки и фабричных трюков. Простой состав,
          понятный вкус и то самое чувство, когда «хочу ещё».
        </p>
      </div>
    </div>
  );
}
