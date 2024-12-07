import VideoPlayerContainer from "@/components/video-player-container";
import YouMayLike from "@/components/you-may-like";
import { getSingleVideo } from "@/lib/util";
import { notFound } from "next/navigation";
import { getDictionary } from "../../dictionaries/dictionaries";

const Page = async ({ params }) => {
  const data = getSingleVideo(params.videoId);
  const dictionary = await getDictionary(params.lang);

  if (!data) {
    notFound();
  }

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <VideoPlayerContainer data={data} />
      <YouMayLike dictionary={dictionary} />
    </div>
  );
};

export default Page;
