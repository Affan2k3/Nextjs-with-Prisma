"use client";

import { useState } from "react";

export default function Check() {
  const [itemTitle, setItemTitle] = useState("");
  const [itemCategoryId, setItemCategoryId] = useState(1);
  const [ItemUomId, setItemUomId] = useState(1);

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/itemMaster", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          itemTitle,
          itemCategoryId,
          ItemUomId,
        }),
      });

      if (response.ok) {
        // Handle success, e.g., show a success message
        console.log("ItemMaster created successfully");
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
    <div>
      <h2
        onClick={() => {
          console.log("HEllo");
          handleSubmit();
        }}
      >
        Create ItemMaster
      </h2>
      <form onSubmit={handleSubmit}>
        <label>
          Item Title:
          <input
            type="text"
            value={itemTitle}
            onChange={(e) => setItemTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          Item Category ID:
          <input
            type="number"
            value={itemCategoryId}
            onChange={(e) => setItemCategoryId(e.target.valueAsNumber)}
          />
        </label>
        <br />
        <label>
          Item UOM ID:
          <input
            type="number"
            value={ItemUomId}
            onChange={(e) => setItemUomId(e.target.valueAsNumber)}
          />
        </label>
        <br />
        {/* <button type="submit">Create ItemMaster</button> */}
      </form>
    </div>
  );
}
