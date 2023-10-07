import React, { useState } from "react";

export default function Check2(item: any) {
  console.log("LLLL", item);
  const [itemid, setItemId] = useState(item.item.itemid);
  const [itemTitle, setItemTitle] = useState(item.item.itemTitle);
  const [itemCategoryId, setItemCategoryId] = useState(
    item.item.itemCategoryId
  );
  const [ItemUomId, setItemUomId] = useState(item.item.ItemUomId);

  const [showModal, setShowModal] = useState(false);

  const handleDelete = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/itemMaster", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemid }),
      });

      if (response.ok) {
        // Handle successful deletion
        console.log("Item deleted successfully");
      } else {
        // Handle deletion error
        console.log("Failed to delete item");
      }
    } catch (error) {
      // Handle network or other errors
      console.log("An error occurred");
    }
  };
  const handleSubmit = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/itemMaster`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          itemid: itemid,
          itemTitle: itemTitle,
          itemCategoryId: itemCategoryId,
          ItemUomId: ItemUomId,
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
      <div
        onClick={() => {
          setShowModal(true);
        }}
      >
        <h1>{item.item.itemTitle}</h1>
        <h1>{item.item.itemCategoryId}</h1>
        <h1>{item.item.ItemUomId}</h1>
      </div>
      {showModal && (
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
              value={item.item.itemCategoryId}
              onChange={(e) => setItemCategoryId(e.target.valueAsNumber)}
            />
          </label>
          <br />
          <label>
            Item UOM ID:
            <input
              type="number"
              value={item.item.ItemUomId}
              onChange={(e) => setItemUomId(e.target.valueAsNumber)}
            />
          </label>
          <br />
          <button type="submit">Create ItemMaster</button>
          <button onClick={() => handleDelete()}>DELETE</button>
        </form>
      )}
    </div>
  );
}
