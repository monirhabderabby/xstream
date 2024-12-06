import StreamCard from "@/components/cards/stream-card";
import { getAllData } from "@/lib/util";

const Page = () => {
  const data = getAllData();
  return (
    <section class="mt-12">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-2xl font-semibold">
          Streams of the day ({data.length})
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data?.slice(0, 12).map((video) => (
          <StreamCard key={video?.title} data={video} />
        ))}
      </div>
    </section>
  );
};

export default Page;
