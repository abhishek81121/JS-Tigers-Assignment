import { conn } from "@/schema/connection";
import { vendorModel } from "@/schema/schemaVendor";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
export async function POST(request: Request) {
  await conn();

  const info = await request.json();
  console.log(info);
  const toSave = new vendorModel({
    "Vendor Name": info.vendorName as string,
    "Bank Account No": info.bankNo as string,
    "Bank Name": info.bankName as string,
    "Address Line 1": info.address1 as string,
    "Address Line 2": info.address2 as string,
    City: info.city as string,
    Country: info.country as string,
    "Zip Code": info.zipCode as string,
  });
  console.log(await toSave.save());
  return NextResponse.json({});
}
