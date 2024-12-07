"use client"; // Error boundaries must be Client Components

export default function Error({ error, reset }) {
  const message =
    error?.message || " We encountered an error while processing your request";

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 text-gray-800 text-center px-6">
      <h1 className="text-4xl font-bold text-red-600 mb-4">
        Oops! Something went wrong.
      </h1>
      <p className="text-lg mb-6">{message} . Please try again.</p>
      <button
        onClick={reset}
        className="px-6 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
      >
        Try Again
      </button>
    </div>
  );
}
