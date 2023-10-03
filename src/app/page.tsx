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
export default async function Home() {
  // try {
  //   const data = await getPost();
  //   console.log("Data:", data);
  // } catch (error) {
  //   console.error("Error:", error);
  // }
  return <div></div>;
}
