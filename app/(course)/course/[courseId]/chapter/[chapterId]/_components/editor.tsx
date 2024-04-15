import React, { useState } from "react";
import { EditorProvider, FloatingMenu, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { FormField } from "@/components/ui/form";

export default function Editor() {
  const [value, setValue] = useState("");

  return (
    <div>
      <textarea
        placeholder="Take note here..."
        value={value}
        className="w-full h-96 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
