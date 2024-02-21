import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Editor() {
  const [value, setValue] = useState("");

  return (
    <ReactQuill
      placeholder="Take note ......"
      theme="snow"
      className="h-96 bg-white rounded-lg w-full"
      value={value}
      onChange={setValue}
    />
  );
}
