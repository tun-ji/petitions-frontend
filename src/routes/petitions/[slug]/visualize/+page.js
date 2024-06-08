export async function load({ fetch, params }) {
  const res = await fetch(
    `http://localhost:3000/signatures/visualize?petitionSlug=${params.slug}`,
  );

  const signatureData = await res.json();

  return {
    slug: params.slug,
    signatureData,
  };
}
