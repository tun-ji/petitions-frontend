export async function load({ fetch, params }) {
  const popular = await fetch(`https://petitions.onrender.com/petitions/feed?limit=3`);
  const petitions = await fetch(`https://petitions.onrender.com/petitions/`);

  let popularPetitions = await popular.json();
  popularPetitions = popularPetitions.payload;

  let returnedPetitions = await petitions.json();
  returnedPetitions = returnedPetitions.payload;
  return {
    popularPetitions,
    returnedPetitions,
  };
}
