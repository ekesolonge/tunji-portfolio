import { buttonVariants } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container flex min-h-[calc(100dvh-5.375rem)] items-center justify-center px-4 md:min-h-[calc(100dvh-4.75rem)]">
      <div className="text-center text-[#4D5153]">
        <h1 className="mb-4 text-6xl font-bold text-[#121212]">404</h1>
        <p className="mb-4 text-2xl font-bold">Oops! Page not found</p>
        <p className="mb-8">The page you’re looking for doesn’t exist or has been moved.</p>
        <Link href="/" className={buttonVariants({ size: "lg" })}>
          <Home className="mr-2 size-4" />
          Go Home
        </Link>
      </div>
    </div>
  );
}
