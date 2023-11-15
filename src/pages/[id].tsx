import { useRouter } from "next/router";

const cows = [
  { id: 1, name: "Bessie" },
  { id: 2, name: "MooMoo" },
  { id: 10, name: "Buttercup" },
];

const someThing = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  //   if (isNaN(cowId)) {
  //     // Handle the error, perhaps show a not found message or redirect
  //     const cow = cows.find((cow) => cow.id === cowId);
  //     if (!cow) {
  //         return <p>Cow not found!</p>;
  //       }
  //     return <p>Cow not found!</p>;
  //   }
  return (<>
  <h1>Hello from this route</h1>
  </>)
};
export default someThing;
