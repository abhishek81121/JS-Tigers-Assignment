import { conn } from "@/schema/connection";
import { vendorModel } from "@/schema/schemaVendor";
import { limit } from "firebase/firestore";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, response: NextResponse) {
  const { searchParams } = new URL(request.url);

  await conn();

  const data = await vendorModel
    .find()
    .skip(Number(searchParams.get("offset")))
    .limit(6);

  return NextResponse.json(data);
}
