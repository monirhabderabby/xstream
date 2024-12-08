import { getAllData } from "@/lib/util";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = getAllData();
    return Response.json(
      { data },
      {
        status: 200,
      }
    );
  } catch (error) {
    return new NextResponse.json(
      {
        success: false,
        data: error?.message,
      },
      {
        status: 500,
      }
    );
  }
}
