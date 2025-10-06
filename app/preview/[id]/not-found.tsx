import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-[#F8FAFC] flex flex-col items-center justify-center px-6">
      <div className="max-w-md text-center">
        <h1 className="text-6xl font-bold text-[#1AB0C8] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-[#001118] mb-4">
          Section Not Found
        </h2>
        <p className="text-[#75868D] mb-8">
          The section variant you're looking for doesn't exist.
        </p>
        <Link
          href="/"
          className="inline-block bg-gradient-to-br from-[#2EC1D9] to-[#179FB5] text-white font-bold px-6 py-3 rounded-lg hover:-translate-y-1 transition-all duration-300 shadow-md"
        >
          Back to Builder
        </Link>
      </div>
    </div>
  );
}
