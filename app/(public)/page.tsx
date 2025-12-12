import Hero from "@/components/layout/hero/page";
import TopProducts from "@/components/ui/TopProducts";

export default function Home() {
  return (
    <div className="container mx-auto xl:px-4">
      <Hero />
      <TopProducts />
    </div>
  );
}
