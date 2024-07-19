"use client";

import {
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Button,
} from "@nextui-org/react";
import { EmojiIcon, SearchIcon } from "@/shared";
import { useMemo, useState } from "react";
import { EMOJIS, RU_CATEGORIES } from "../model";

interface EmojiPickerProps {
  value: string;
  onValueChange?: (value: string) => void;
  withSearch?: boolean;
}

export const EmojiPicker = ({
  value,
  onValueChange,
  withSearch,
}: EmojiPickerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentEmoji, setCurrentEmoji] = useState(value);
  const categories = useMemo(
    () => Array.from(new Set(EMOJIS.map((emoji) => emoji.category))),
    []
  );

  return (
    <Popover isOpen={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger>
        <Button isIconOnly variant="light" className="text-[30px]">
          {currentEmoji || <EmojiIcon />}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="py-3 max-h-[468px]">
        {withSearch && (
          <Input
            size="sm"
            className="mb-3"
            classNames={{ inputWrapper: "rounded-full" }}
            type="search"
            placeholder="Поиск"
            startContent={<SearchIcon className="h-[16px] fill-gray-500" />}
          />
        )}
        <div className="flex flex-col gap-3 max-h-[400px] overflow-y-scroll no-scrollbar">
          {categories.map((category) => {
            return (
              <div key={category}>
                <h1>{RU_CATEGORIES[category as keyof typeof RU_CATEGORIES]}</h1>
                <div className="grid grid-cols-8">
                  {EMOJIS.filter((emoji) => emoji.category === category).map(
                    ({ emoji }) => (
                      <Button
                        className="text-[30px]"
                        isIconOnly
                        variant="light"
                        onClick={() => {
                          setCurrentEmoji(emoji);
                          if (onValueChange) {
                            onValueChange(emoji);
                          }
                          setIsOpen(false);
                        }}
                        key={emoji}
                      >
                        {emoji}
                      </Button>
                    )
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </PopoverContent>
    </Popover>
  );
};
