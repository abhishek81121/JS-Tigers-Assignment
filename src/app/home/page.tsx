"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Pagination } from "@nextui-org/pagination";
import axios from "axios";
import clsx from "clsx";
import { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(1);

  const [isVisible, setIsVisible] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("initlal render");
    axios.get("/api/countDocuments").then((response) => {
      setCount(Math.round(response.data.count / 6));
      setData(response.data.initialData);
      setIsVisible(false);
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
      <HoverEffect items={data} />
      <div className="flex justify-center z-50">
        <Pagination
          total={count}
          className={paginationStyle}
          variant="bordered"
          onChange={async (number) => {
            console.log(number);
            axios
              .get("/api/fetchVendor", {
                params: {
                  offset: (number - 1) * 6,
                },
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
