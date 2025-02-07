
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Focused Care",
  description:
    "Client Focused Care is launching soon. We are committed to providing exceptional, client-focused care services. Stay tuned for updates!",
  openGraph: {
    title: "Coming Soon - Client Focused Care",
    description:
      "Client Focused Care is launching soon. We are committed to providing exceptional, client-focused care services. Stay tuned for updates!",
    url: "https://clientfocusedcare.co.uk",
    siteName: "Client Focused Care",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-gray-100 to-gray-400 px-4 text-center">
      <div className="max-w-xl">
        <h1 className="text-5xl font-extrabold text-blue-900 mb-6">
          Testing Feature
        </h1>
        <p className="text-lg text-blue-700 mb-8">
          We are working hard to launch our new website. Client Focused Care is
          dedicated to delivering exceptional care services with a personal
          touch.
        </p>
        {/* Optional: A placeholder image for visual appeal */}
        <div className="mb-8">
          {/*
            <img
              src="/images/care-agency-placeholder.jpg" // Place an image in the public/images folder or remove if not needed
              alt="Care Agency"
              className="mx-auto rounded-lg shadow-md"
            />
          */}
        </div>
        <p className="text-sm text-blue-600">
          Stay tuned for updates and thank you for your patience!
        </p>
      </div>
      <footer className="absolute bottom-4 text-sm text-blue-600">
        &copy; {new Date().getFullYear()} Client Focused Care. All rights reserved.
      </footer>
    </main>
  );
}
