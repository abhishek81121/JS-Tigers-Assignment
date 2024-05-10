"use client";
import mongoose from "mongoose";
import {
  Pagination,
  PaginationItem,
  PaginationCursor,
} from "@nextui-org/pagination";
import { useEffect, useState } from "react";
import { vendorSchema } from "@/schema/schemaVendor";

import { count } from "console";
import axios from "axios";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    axios.get("/api/countDocuments").then((response) => {
      setCount(response.data.count / 10);
    });
    console.log(count);
  }, []);

  return (
    <div className="m-5">
      {children}
      <div className="flex justify-center">
        <Pagination
          total={count}
          className="fixed bottom-3 "
          variant="bordered"
          initialPage={1}
          onChange={(number) => {}}
        />
      </div>
    </div>
  );
}
