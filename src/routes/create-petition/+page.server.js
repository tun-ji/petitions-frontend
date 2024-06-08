import { error } from "@sveltejs/kit";

export const actions = {
  createPetition: async ({ request }) => {
    let data = await request.formData();
    let creatorData = data.get("creator");
    let petitionData = data.get("petition");
    creatorData = JSON.parse(creatorData);
    petitionData = JSON.parse(petitionData);
    delete petitionData["why"];
    delete petitionData["how"];
    let formattedData = {
      petition: petitionData,
      creator: creatorData,
    };

    try {
      const res = await fetch(`http://localhost:3000/petitions/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedData),
      });

      const petition = await res.json();

      return {
        petition,
      };
    } catch {
      console.log(error);
    }
  },

};
