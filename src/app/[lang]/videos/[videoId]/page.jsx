import VideoPlayerContainer from "@/components/video-player-container";
import YouMayLike from "@/components/you-may-like";
import { getSingleVideo } from "@/lib/util";
import { notFound } from "next/navigation";

const Page = ({ params }) => {
  const data = getSingleVideo(params.videoId);

  if (!data) {
    notFound();
  }

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <VideoPlayerContainer data={data} />
      <YouMayLike />
    </div>
  );
};

export default Page;
