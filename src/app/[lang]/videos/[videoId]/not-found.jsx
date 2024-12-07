"use client";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  return (
    <div className="h-[600px] w-full flex flex-col justify-center items-center text-center">
      <h1 className="text-2xl font-bold mb-4">Oops! Video Not Found</h1>
      <p className="text-lg text-gray-600">
        The video you&apos;re looking for doesn&apos;t exist.
      </p>
      <p className="text-md text-gray-500 mt-2">
        This might be due to an incorrect ID, removal, or restricted access.
      </p>
      <button
        onClick={() => {
          router.back();
        }}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
