import { ShoppingBag } from "lucide-react";
import Link from "next/link";
export default function Header() {
  return (
    <div className="container mx-auto flex justify-between items-center m-3 p-2">
      <h1 className="text-4xl"><Link href="/">BakeU</Link></h1>
      <ul className="flex gap-10 text-xl">
        <li><Link href="/cake">Cake</Link></li>
        <li><Link href="/bakery">Bakery</Link></li>
        <li><Link href="/about">About us</Link></li>
        <li><Link href="/cookies">Cookies</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
      <div className="flex gap-4 items-center">
        <button className="text-xl bg-amber-300 rounded-full px-4 py-2 cursor-pointer border-2 border-black">
          Start baking
        </button>
        <div className="flex items-center justify-center p-3 bg-white rounded-full cursor-pointer">
          <Link href="/store">
          <ShoppingBag />
          </Link>
        </div>
      </div>
    </div>
  );
}
