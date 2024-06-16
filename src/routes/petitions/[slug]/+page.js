export async function load({ fetch, params }) {
  const res = await fetch(`http://localhost:3000/petitions/${params.slug}`);

  const petition = await res.json();
  let returnedPetition = petition.payload;

  return {
    slug: params.slug,
    returnedPetition,
  };
}
