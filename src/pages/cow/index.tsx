import { useRouter } from "next/router";

const cows = [
  { id: 1, name: "Bessie" },
  { id: 2, name: "MooMoo" },
  { id: 10, name: "Buttercup" },
];

const CowProfile = () => {
  const router = useRouter();
  const { id } = router.query;
  if (typeof id !=="string"){
    return <div>Invalid</div>
  }
  const cowId = parseInt(id, 10);
  //   console.log(id);
    if (isNaN(cowId)) {
      // Handle the error, perhaps show a not found message or redirect
      const cow = cows.find((cow) => cow.id === cowId);
      if (!cow) {
          return <p>Cow not found!</p>;
        }
      return <p>Cow not found!</p>;
    }
  if (cowId === undefined) {
    return "Not found";
  } else {
    const FindCow = cows.find((cow) => cow.id === cowId);
    return (
      <>
        <h1>Cow Profile</h1>
        <p>Welcome to the profile of {FindCow?.name}</p>
      </>
    );
  }
};
export default CowProfile;
