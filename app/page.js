import PeopleList from "../app/ppl-list/index";

const values = ["m","j","a","g","f"];

const didNameCondition = values.some((value, index) => {
  console.log({ index, value });
  if (value >= "f") {
    return true;
  }
});


export default function People() {
  return (
    <>
      <div className="container">
  <h1 className="text-2xl font-bold mb-4">People</h1>
  <section className=" p-4 rounded-lg">
    <PeopleList />
  </section>
</div>
    </>
  );
}
