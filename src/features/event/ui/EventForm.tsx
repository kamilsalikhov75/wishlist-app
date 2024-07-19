"use client";

import { DEFAULT_ICON, EmojiPicker } from "@/shared";
import { Input } from "@nextui-org/react";
import { useState } from "react";
import { Button } from "@/shared";

export const EventForm = () => {
  const [icon, setIcon] = useState(DEFAULT_ICON);
  return (
    <form action="">
      <div className="flex items-center gap-3 mb-3">
        <EmojiPicker value={icon} onValueChange={setIcon} />
        <Input
          label="Название"
          size="sm"
          variant="bordered"
          classNames={{
            inputWrapper:
              "border-purple-100 group-data-[focus=true]:border-purple-300",
          }}
        />
      </div>
      <Button disableRipple className="w-full bg-purple-50">
        Сохранить
      </Button>
    </form>
  );
};

//z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-4 min-w-20 h-10 text-small gap-2 rounded-medium [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none text-default-foreground data-[hover=true]:opacity-hover w-full bg-purple-50
