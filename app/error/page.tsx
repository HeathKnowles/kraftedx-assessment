import Link from 'next/link';

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fefcea] to-[#e0f7fa] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-extrabold text-teal-500 mb-4">Oops!</h1>
      <p className="text-2xl font-semibold text-gray-800 mb-2">Something went wrong</p>
      <p className="text-gray-600 mb-6 max-w-md">
        We couldn’t process your request. Please try again later or contact support if the issue persists.
      </p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="px-6 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg shadow-md transition"
        >
          Go Home
        </Link>
        <Link
          href="/contact"
          className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg shadow-md transition"
        >
          Contact Support
        </Link>
      </div>
    </div>
  );
}
