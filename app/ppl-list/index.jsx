"use client";

import { faker } from "@faker-js/faker";
import { useState } from "react";

faker.seed(1);

const makeProfile = () => {
  return {
    id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
  };
};
console.log(faker);

const makeProfiles = () => {
  return faker.helpers.multiple(makeProfile, { count: 50 });
};

const initialProfiles = makeProfiles();

export default function PeopleList() {
  const [profiles, setProfiles] = useState(initialProfiles);

  function handleOnSubmit(event) {
    event.preventDefault();
    const searchTerm = event.currentTarget.elements.search.value.toLowerCase();

    setProfiles((prevProfiles) => {
      return initialProfiles.filter((person) => {
        return person.firstName.toLowerCase().includes(searchTerm);
      });
    });
  }

  function resetForm() {
    event.preventDefault();
    setProfiles(initialProfiles);
    document.getElementById("search").value = "";
  }

  return (
    <div className="container mx-auto p-4">
      <section className="mb-4">
        <form onSubmit={handleOnSubmit} className="flex flex-col gap-4">
          <label htmlFor="search" className="text-sm font-semibold">
            Search:
          </label>
          <div className="flex items-center">
            <input
              type="search"
              name="search"
              id="search"
              className="p-2 rounded border outline-none flex-grow text-black"
            />
            <button
              className="bg-red-600 text-white py-2 px-4 rounded"
              type="submit"
            >
              Search
            </button>
            <button
              className="bg-gray-600 text-white py-2 px-4 rounded"
              type="button"
              onClick={resetForm}
            >
              Reset
            </button>
          </div>
        </form>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {profiles.map(({ id, firstName, lastName }) => (
          <div
            key={id}
            className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
          >
            <h2 className="text-lg font-semibold text-black">
              {firstName} {lastName}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
