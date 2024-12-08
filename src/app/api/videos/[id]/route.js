import videos from "@/data/videos.json";
import { getAllData } from "@/lib/util";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const videoId = params?.id;

  // If videoId is missing, throw an error
  if (!videoId) {
    return new Response(JSON.stringify({ error: "Missing video ID" }), {
      status: 400,
    });
  }

  try {
    // Fetch all data
    const data = await getAllData();

    // If no data is found
    if (!data) {
      return NextResponse.json(
        {
          success: false,
          message: "No data available.",
        },
        {
          status: 404,
        }
      );
    }

    // Find the specific video by videoId
    const singleVideo = data.find((item) => item.videoId == videoId);

    // If the video with the provided ID is not found
    if (!singleVideo) {
      return NextResponse.json(
        {
          success: false,
          message: `Video ID not found.`,
        },
        {
          status: 404,
        }
      );
    }

    // Return the found video
    return NextResponse.json(
      {
        success: true,
        data: singleVideo,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    // Handle unexpected errors
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred.",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(request, { params }) {
  const videoId = params.id;

  // If videoId is missing, throw an error
  if (!videoId) {
    return new Response(JSON.stringify({ error: "Missing video ID" }), {
      status: 400,
    });
  }

  const videoIndex = videos.findIndex((video) => video.videoId == videoId);

  if (!videoIndex) {
    return new Response(JSON.stringify({ error: "Video ID not found" }), {
      status: 404,
    });
  }

  const videoToDelete = videos[videoIndex];

  videos.splice(videoIndex, 1);

  return Response.json(videoToDelete);
}
