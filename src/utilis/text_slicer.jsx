import React from "react";
export function Text_slicer(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.slice(0, maxLength) + "...";
    }
  }