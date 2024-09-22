import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      
      <div className="flex flex-col items-center gap-6 pt-28">
        <h1 className="text-8xl font-bold">Build <span className="text-gradient">Website</span> Here</h1>
        <p className="text-xl text-gray-200">simple website builder made by yosef or PrimeVX</p>
        <div className="flex items-center gap-4">
          <Button asChild>
            <Link href={"/sign-up"}>Get Started</Link>
          </Button>
          <Button variant="outline">Learn more</Button>
        </div>
      </div>
    </div>
  );
}
