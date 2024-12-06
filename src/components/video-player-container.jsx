import { icons } from "./icons";

const VideoPlayerContainer = ({ data }) => {
  return (
    <div class="lg:w-3/4">
      <div class="relative">
        <iframe
          src={`https://www.youtube.com/embed/${data.videoId}`}
          title="YouTube video player"
          frameborder="0"
          class="w-full aspect-video h-[500px]"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>

        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <div class="flex items-center space-x-4">
            <button class="bg-color-gray hover:bg-opacity-80 rounded-full p-2">
              {icons.play}
            </button>
            <div class="bg-color-purple text-white px-2 py-1 rounded text-sm">
              LIVE
            </div>
            <span class="text-sm">46:02</span>
            <button class="bg-color-purple hover:bg-opacity-80 text-white px-4 py-1 rounded-full text-sm">
              Donate
            </button>
          </div>
        </div>
      </div>
      <h1 class="text-2xl font-bold mt-4">{data.title}</h1>
      <div class="flex items-center space-x-4 mt-2">
        <img
          src="https://avatar.iran.liara.run/public"
          alt="Avatar"
          class="w-10 h-10 rounded-full"
        />
        <div>
          <p class="font-semibold">{data.channelTitle}</p>
        </div>
        <button class="bg-color-purple hover:bg-opacity-80 text-white px-4 py-1 rounded-full text-sm ml-auto">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default VideoPlayerContainer;
