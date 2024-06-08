export async function load({ fetch, params }) {
    const res = await fetch(
      `http://localhost:3000/petitions/${params.slug}`,
    );
  
    let petitionData = await res.json();
    petitionData = petitionData.payload
  
    return {
      slug: params.slug,
      petitionData,
    };
  }
  