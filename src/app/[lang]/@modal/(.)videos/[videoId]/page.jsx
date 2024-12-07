import { HeroVideoDialog } from "@/components/hero-video-dialog";
import { getSingleVideo } from "@/lib/util";
import { notFound } from "next/navigation";

const Page = ({ params: { videoId } }) => {
  const data = getSingleVideo(videoId);

  if (!data) {
    notFound();
  }

  return (
    <div>
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="top-in-bottom-out"
        videoSrc={`https://www.youtube.com/embed/${data.videoId}?si=4rb-zSdDkVK9qxxb`}
      />
    </div>
  );
};

export default Page;
