import React from 'react'

export default function Btn({text, bgColor, textColor}) {
  return (
 <button style={{
        width: "150px",
        height: "50px",
        border: "2px solid black",
        borderRadius: "8px",
        backgroundColor: bgColor,
        color: textColor,
        fontSize: "16px",
        fontWeight: "bold",
        cursor: "pointer",
      }}>
{text}
 </button>
  )
}
