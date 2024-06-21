export async function load({ fetch, params }) {
  const res = await fetch(
    `https://petitions.onrender.com/signatures/visualize?petitionSlug=${params.slug}`,
  );

  const signatureData = await res.json();

  return {
    slug: params.slug,
    signatureData,
  };
}
