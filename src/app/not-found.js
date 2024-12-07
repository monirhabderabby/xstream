import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen  text-white/80 text-center px-6">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
