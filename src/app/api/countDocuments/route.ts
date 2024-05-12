import { conn } from "@/schema/connection";
import { vendorModel, vendorSchema } from "@/schema/schemaVendor";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
export async function GET(response: Response) {
  await conn();
  const data = await vendorModel.find().skip(0).limit(6);

  const num = await vendorModel.countDocuments({});

  return NextResponse.json({ count: num, initialData: data });
}
