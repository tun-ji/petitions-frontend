export async function load({ fetch, params }) {
  const res = await fetch(`https://petitions.onrender.com/petitions/${params.slug}`);

  let petitionData = await res.json();
  petitionData = petitionData.payload;

  return {
    slug: params.slug,
    petitionData,
  };
}
