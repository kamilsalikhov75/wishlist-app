import { Modal, ModalBody, ModalContent } from "@nextui-org/react";
import { WishForm } from "./WishForm";

interface WishFormModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}
export const WishFormModal = ({ isOpen, onOpenChange }: WishFormModalProps) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        <ModalBody>
          <WishForm />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
