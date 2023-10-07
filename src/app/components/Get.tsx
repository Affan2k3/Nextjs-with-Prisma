"use client";
import React, { useState } from "react";
export default function Get() {
  const [dataToReturn, setDataToReturn] = useState([] as any);
  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/itemMaster", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify({
        //   itemTitle,
        //   itemCategoryId,
        //   ItemUomId,
        // }),
      });
      let data = await response.json();
      if (response.ok) {
        // Handle success, e.g., show a success message
        console.log(data, "ItemMaster created successfully");
        setDataToReturn(data.itemCategories);
      } else {
        // Handle errors, e.g., show an error message
        console.error("Failed to create ItemMaster");
      }
    } catch (error) {
      // Handle network or other errors
      console.error("An error occurred", error);
    }
  };
  return (
    <div className="mt-32">
      <button onClick={handleSubmit}>CLICKKKK</button>
      {dataToReturn.map((item: any) => (
        <div>
          <h1>{item.itemTitle}</h1>
          <h1>{item.itemCategories}</h1>
          <h1>{item.ItemUomId}</h1>
        </div>
      ))}
    </div>
  );
}
