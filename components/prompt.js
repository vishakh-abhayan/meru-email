"use client";
import { useState, useRef } from "react";

export default function PromptGenerator() {
  const [geminiResponse, setGeminiResponse] = useState("");
  const editorRef = useRef(null);

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
            setGeminiResponse(data.text);
            injectTextAtCursor(data.text);
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
    range.insertNode(newNode);
    range.setStartAfter(newNode);
    selection.removeAllRanges();
    selection.addRange(range);
  };

  return (
    <div onKeyDown={handleKeyDown} tabIndex={0}>
      <textarea ref={editorRef} placeholder="Type your content here..." />
      <p>Gemini Response: {geminiResponse}</p>
    </div>
  );
}
