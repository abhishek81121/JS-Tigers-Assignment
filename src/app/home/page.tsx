"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Pagination } from "@nextui-org/pagination";
import axios from "axios";
import clsx from "clsx";
import { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(1);
  const [page, setPage] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("/api/countDocuments").then((response) => {
      setCount(response.data.count / 6);
      setIsVisible(false);
      setPage(1);
    });
  }, []);

  const paginationStyle = clsx(
    isVisible && "invisible",
    "fixed",
    "bottom-3",
    "z-10"
  );

  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={data}></HoverEffect>
      <div className="flex justify-center">
        <Pagination
          total={count}
          className={paginationStyle}
          initialPage={1}
          variant="bordered"
          onChange={async (number) => {
            setPage(number);
            axios
              .get("/api/fetchVendor", {
                params: { limit: (page - 1) * 6, offset: 6 },
              })
              .then((response) => {
                setData(response.data);
              });
          }}
        />
      </div>
    </div>
  );
}
