import data from "@/data/videos";
export const getAllData = () => {
  return data;
};

export const getSingleVideo = (videoId) => {
  return data.find((item) => item.videoId === videoId);
};
