"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
export function DialogEdit(prop: any) {
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
                {prop.VendorName}
              </ModalHeader>
              <ModalBody></ModalBody>
              <ModalFooter>
                <Button color="primary" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="danger" variant="solid" onPress={onClose}>
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
