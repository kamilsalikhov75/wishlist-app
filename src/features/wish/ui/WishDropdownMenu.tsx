"use client";
import { DotsVIcon } from "@/shared";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

export const WishDropdownMenu = () => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button isIconOnly variant="light">
          <DotsVIcon />
        </Button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownItem>Редактировать</DropdownItem>
        <DropdownItem color="danger" className="text-danger">Удалить</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
