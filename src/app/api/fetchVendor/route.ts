import { vendorModel } from "@/schema/schemaVendor";
import { limit } from "firebase/firestore";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, response: NextResponse) {
  const { searchParams } = new URL(request.url);
  console.log(searchParams.get("limit"));
  const connection = await mongoose.connect(
    process.env.CONNECTION_STRING as string
  );
  const data = await vendorModel
    .find()
    .skip(Number(searchParams.get("offset")))
    .limit(6);
  connection.disconnect();

  return NextResponse.json(data);
}
