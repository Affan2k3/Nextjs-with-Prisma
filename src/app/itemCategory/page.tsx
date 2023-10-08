"use client";
import React, { useEffect, useState } from "react";
import Check2 from "../components/check2";
import GettingItemCat from "../components/GettingItemCat";

export default function page() {
  const [dataToReturn, setDataToReturn] = useState([] as any);
  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/itemCategory", {
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
        // console.log(data, "ItemMaster created successfully");
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
  useEffect(() => {
    handleSubmit();
  }, []);
  //   console.log(dataToReturn);
  return (
    <div className="ml-[300px] bg-rose-50 flex flex-col gap-4 ">
      {dataToReturn.map((item: any) => (
        <GettingItemCat item={...item} />
      ))}
    </div>
  );
}
