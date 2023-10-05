import Image from "next/image";
import { GetStaticProps } from "next";
import SignUpForm from "./components/signInForm";
// async function getPost() {
//   const res = await fetch("http://localhost:3000/api/getPost");
//   if (!res.ok) {
//     const errorData = await res.json(); // Read the error response once
//     console.log("Error Data:", errorData);
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// // }
// export const getStaticProps: GetStaticProps = async () => {
//   const feed = await prisma.post.findMany({
//     where: { published: true },
//     include: {
//       author: {
//         select: { name: true },
//       },
//     },
//   });
//   return {
//     props: { feed },
//     revalidate: 10,
//   };
// };
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function fetchData() {
  try {
    const itemCategories = await prisma.vehicleMaster.findMany({
      include: {
        CustomerVehicle: true, // Include related items
      },
    });
    // ////////////////////////////////////////////////////////
    // .//////////////////////////////////////////////////
    // //////////////////////////////

    // /////////////////      FOR POSTING DATA

    // const itemCategories = await prisma.itemCategory.create({
    //   data: {
    //     catTitle: "hi",
    //   },
    // });

    // /////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////

    return itemCategories;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Call the fetchData function to retrieve data
fetchData()
  .then((data) => {
    console.log("Fetched data:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
export default async function Home() {
  // try {
  //   const data = await getPost();
  //   console.log("Data:", data);
  // } catch (error) {
  //   console.error("Error:", error);
  // }
  return <div></div>;
}
