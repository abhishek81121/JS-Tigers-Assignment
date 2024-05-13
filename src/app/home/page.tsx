"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Pagination } from "@nextui-org/pagination";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import axios from "axios";
import clsx from "clsx";
import { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(1);
  type VendorInfo = {
    vendorName: string;
    bankName: string;
    bankNo: string;
    address1: string;
    address2: string;
    city: string;
    country: string;
    zipCode: string;
    [key: string]: string; // Index signature
  };
  const initialState: VendorInfo = {
    vendorName: "",
    bankName: "",
    bankNo: "",
    address1: "",
    address2: "",
    city: "",
    country: "",
    zipCode: "",
  };
  const [isVisible, setIsVisible] = useState(true);
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState(initialState);
  function handleChange(index: string, value: string) {
    setFormData(() => {
      var list = formData;
      list[index] = value;
      return list;
    });
  }
  useEffect(() => {
    axios.get("/api/countDocuments").then((response) => {
      setCount(Math.round(response.data.count / 6));
      setData(response.data.initialData);
      setIsVisible(false);
    });
  }, []);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const paginationStyle = clsx(
    isVisible && "invisible",
    "fixed",
    "bottom-3",
    "z-10"
  );

  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={data} />

      <div className="flex justify-center ">
        <Button color="success" className="z-50" onPress={onOpen}>
          Create Vendor
        </Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Create vendor
                </ModalHeader>
                <ModalBody>
                  <Input
                    variant="bordered"
                    onChange={(e) => {
                      handleChange("vendorName", e.target.value);
                    }}
                    label="Vendor Name"
                  />
                  <Input
                    variant="bordered"
                    onChange={(e) => {
                      handleChange("bankName", e.target.value);
                    }}
                    label="Bank Name"
                  />
                  <Input
                    variant="bordered"
                    type="number"
                    label="Bank Account Number"
                    onChange={(e) => {
                      handleChange("bankNo", e.target.value);
                    }}
                  />
                  <Input
                    variant="bordered"
                    onChange={(e) => {
                      handleChange("address1", e.target.value);
                    }}
                    label="Address Line 1"
                  />
                  <Input
                    variant="bordered"
                    onChange={(e) => {
                      handleChange("address2", e.target.value);
                    }}
                    label="Address Line 2"
                  />
                  <Input
                    variant="bordered"
                    onChange={(e) => {
                      handleChange("city", e.target.value);
                    }}
                    label="City"
                  />
                  <Input
                    variant="bordered"
                    onChange={(e) => {
                      handleChange("country", e.target.value);
                    }}
                    label="Country"
                  />
                  <Input
                    variant="bordered"
                    onChange={(e) => {
                      handleChange("zipCode", e.target.value);
                    }}
                    type="number"
                    label="Zip Code"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button
                    color="primary"
                    onPress={onClose}
                    onClick={() => {
                      axios.post("/api/createDocument", formData);
                    }}
                  >
                    Create
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>

        <Pagination
          total={count}
          className={paginationStyle}
          variant="bordered"
          onChange={async (number) => {
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
