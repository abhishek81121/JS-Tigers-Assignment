import { conn } from "@/schema/connection";
import { vendorModel } from "@/schema/schemaVendor";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request: Request, response: Response) {
  const info = await request.json();
  const objectId = info._id;
  await conn();
  await vendorModel.deleteOne({ _id: objectId });

  return NextResponse.json({});
}
