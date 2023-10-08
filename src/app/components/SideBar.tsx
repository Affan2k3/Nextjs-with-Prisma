import Link from "next/link";
import React from "react";

export default function SideBar() {
  return (
    <div className="flex flex-col h-screen w-[300px] absolute z-10 left-0 top-0 bg-gray-100 items-center gap-3 pt-10">
      <Link className="border border-black px-3 py-1" href={"/itemCategory"}>
        Item Category
      </Link>
      <Link className="border border-black px-3 py-1" href={"/itemCategory"}>
        Item Category
      </Link>
      <Link className="border border-black px-3 py-1" href={"/itemCategory"}>
        Item Category
      </Link>
      <Link className="border border-black px-3 py-1" href={"/itemCategory"}>
        Item Category
      </Link>
      <Link className="border border-black px-3 py-1" href={"/itemCategory"}>
        Item Category
      </Link>
    </div>
  );
}
