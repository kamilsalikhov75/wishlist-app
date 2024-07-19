"use client";

import { DotsVIcon } from "@/shared";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { WishFormModal } from "./WishFormModal";
import { useState } from "react";
import { Button } from "@/shared";

export const WishDropdownMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <Button isIconOnly variant="light">
            <DotsVIcon />
          </Button>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem onClick={() => setIsModalOpen(true)}>
            Редактировать
          </DropdownItem>
          <DropdownItem color="danger" className="text-danger">
            Удалить
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <WishFormModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
};
