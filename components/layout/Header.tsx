import {
  GalleryVerticalEnd,
  Heart,
  ShoppingBag,
  User,
  UserRoundSearch,
} from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="container mx-auto flex justify-between items-center m-3 ">
      <h1 className="text-4xl">
        <Link href="/">BakeU</Link>
      </h1>
      <ul className="flex gap-10 text-xl items-center">
        <li>
          <Link href="/catalog" className="flex">
            <GalleryVerticalEnd />
            Каталог
          </Link>
        </li>
        <li>
          <Link href="/sellers" className="flex">
            <UserRoundSearch />
            Продавцы
          </Link>
        </li>
        <li className="w-md bg-white border rounded-3xl overflow-hidden flex">
          <input
            type="text"
            placeholder="Искать товары и категории"
            className="flex-1 px-4 py-2.5 text-sm outline-none"
          />
        </li>
      </ul>
      <div className="flex">
        <Link href="/accaunt" className="flex cursor-pointer p-3">
          <User />
          Войти
        </Link>
        <Link href="/favorites" className="flex cursor-pointer p-3">
          <Heart />
          Избранное
        </Link>
        <Link href="/store" className="flex cursor-pointer p-3">
          <ShoppingBag />
          Корзина
        </Link>
      </div>
    </div>
  );
}
