"use client";
import React, { useState } from "react";

export default function GettingItemCat(item: any) {
  const [catTitle, setcatTitle] = useState(item.item.catTitle);
  const [catId, setcatId] = useState(item.item.catId);
  const data = item.item;
  const [showModal, setShowModal] = useState<any>(false!);

  const handleSubmit = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/itemCategory`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          catId: item.item.catId,
          catTitle: catTitle,
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

  const handleDelete = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/itemCategory", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ catId }),
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
  return (
    <div key={data.catId} className="flex gap-4 border border-black">
      <h1 onClick={() => setShowModal(true)}>{data.catId}</h1>
      <h1 onClick={() => setShowModal(true)}>{data.catTitle}</h1>
      <button onClick={() => handleDelete()}>DELETE</button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none h-screen">
            <div
              className="relative w-auto my-6 mx-auto max-w-3xl"
              onClick={() => setShowModal(true)}
            >
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none px-[40px] pt-[40px] h-auto">
                {/*body*/}
                <form onSubmit={handleSubmit}>
                  <label>
                    Item Title:
                    <input
                      type="text"
                      className="border border-black"
                      value={catTitle}
                      onChange={(e) => setcatTitle(e.target.value)}
                    />
                  </label>

                  <button type="submit">Update Changes</button>
                </form>
                {/*footer*/}
                <div>
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(!false);
                    }}
                  >
                    Close
                  </button>
                  <div className=" bg-indigo-500 hover:bg-blue-700 flex justify-center items-center py-2 px-6 rounded-lg">
                    <button
                      className="inline-block text-white font-medium"
                      onClick={() => {
                        handleSubmit();
                        setShowModal(false);
                      }}
                    >
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}
