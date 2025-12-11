import { ShoppingBag } from "lucide-react";

export default function Header() {
  return (
    <div className="container mx-auto flex justify-between items-center p-2">
      <h1 className="text-4xl">BakeU</h1>
      <ul className="flex gap-10 text-xl">
        <li>Cake</li>
        <li>Bakery</li>
        <li>About us</li>
        <li>Cookies</li>
        <li>Contact</li>
      </ul>
      <div className="flex gap-4 items-center">
        <button className="text-xl bg-amber-300 rounded-full px-4 py-2 cursor-pointer border-2 border-black">
          Start baking
        </button>
        <div className="flex items-center justify-center p-3 bg-white rounded-full cursor-pointer">
          <ShoppingBag />
        </div>
      </div>
    </div>
  );
}
