import { getAllData } from "@/lib/util";
import Link from "next/link";
import StreamCard from "./cards/stream-card";

const StreamOfTheDay = () => {
  const data = getAllData();
  return (
    <section class="mt-12">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-2xl font-semibold">Streams of the day</h2>
        <Link
          href="/videos"
          class="bg-color-gray hover:bg-opacity-80 text-sm px-4 py-2 rounded-full"
        >
          View all
        </Link>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data?.slice(0, 12).map((video) => (
          <StreamCard key={video?.title} data={video} />
        ))}
      </div>
    </section>
  );
};

export default StreamOfTheDay;
