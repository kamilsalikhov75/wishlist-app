"use client";

import { Input } from "@nextui-org/react";
import { useState } from "react";
import { EmojiPicker } from "@/features";

export const WishForm = () => {
  const [icon, setIcon] = useState("🎁");
  return (
    <form>
      <EmojiPicker value={icon} onValueChange={setIcon} />
      <Input />
    </form>
  );
};
