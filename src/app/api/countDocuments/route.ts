import { vendorModel, vendorSchema } from "@/schema/schemaVendor";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
export async function GET(response: NextResponse) {
  const connection = await mongoose.connect(
    process.env.CONNECTION_STRING as string
  );

  const num = await vendorModel.countDocuments({});
  connection.disconnect();
  return NextResponse.json({ count: num });
}
