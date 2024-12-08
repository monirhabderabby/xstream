import { getAllData } from "@/lib/util";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const videoId = params?.id;

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
          message: `Video with ID ${videoId} not found.`,
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
