export async function load({ fetch, params }) {
  const popular = await fetch(`http://localhost:3000/petitions/feed?limit=3`);
  const petitions = await fetch(`http://localhost:3000/petitions/`);

  let popularPetitions = await popular.json();
  popularPetitions = popularPetitions.payload;

  let returnedPetitions = await petitions.json();
  returnedPetitions = returnedPetitions.payload;
  return {
    popularPetitions,
    returnedPetitions,
  };
}
