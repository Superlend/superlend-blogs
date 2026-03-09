import Link from "next/link";
import Header from "@/components/header";
import Container from "@/components/container";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Container>
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-secondary-navy dark:text-white mb-4">
            Page not found
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Check out our latest articles instead.
          </p>
          <Link
            href="/"
            className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-full text-sm font-medium transition-all hover:scale-105"
          >
            Browse all posts
          </Link>
        </div>
      </Container>
    </main>
  );
}
