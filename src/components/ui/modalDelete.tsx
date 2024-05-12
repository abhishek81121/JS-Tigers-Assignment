import { conn } from "@/schema/connection";
import { vendorModel } from "@/schema/schemaVendor";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import axios from "axios";

export default function Modaldelete(props: any) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button variant="solid" color="danger" onPress={onOpen}>
        Delete
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {props.VendorName}
              </ModalHeader>
              <ModalBody>Would you like to delete the vendor?</ModalBody>
              <ModalFooter>
                <Button color="primary" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="danger"
                  variant="solid"
                  onPress={onClose}
                  onClick={() => {
                    axios.post("/api/deleteDocuments", {
                      _id: props._id,
                    });
                    console.log("done dna dan");
                  }}
                >
                  Delete
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
