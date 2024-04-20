"use client";
import * as React from "react";
import { useState, useRef } from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  const [textarea, setTextarea] = useState("");
  const editorRef = useRef(null);

  const handleTextareaChange = (event) => {
    setTextarea(event.target.value);
  };

  const handleKeyDown = async (e) => {
    if (e.altKey && e.key === "k") {
      e.preventDefault();
      const prompt = window.prompt("Enter your prompt:");
      if (prompt) {
        try {
          const response = await fetch("/api/prompt", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ prompt }),
          });

          const data = await response.json();
          console.log(data);
          if (response.ok) {
            const updatedText = textarea + data.text;
            setTextarea(updatedText);
            injectTextAtCursor(updatedText);
          } else {
            console.error("Error:", data.error);
          }
        } catch (error) {
          console.error("Error:", error);
        }
      }
    }
  };

  const injectTextAtCursor = (text) => {
    const editor = editorRef.current;
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);

    const newNode = document.createTextNode(text);
    range.deleteContents();
    range.insertNode(newNode);
    range.setStartAfter(newNode);
    selection.removeAllRanges();
    selection.addRange(range);
  };

  return (
    <div onKeyDown={handleKeyDown} tabIndex={0}>
      <textarea
        ref={editorRef}
        value={textarea}
        onChange={handleTextareaChange}
        className="flex h-[350px] w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:ring-offset-gray-950 dark:placeholder:text-gray-400 dark:focus-visible:ring-gray-300"
        {...props}
      />
    </div>
  );
});

Textarea.displayName = "Textarea";
export { Textarea };
