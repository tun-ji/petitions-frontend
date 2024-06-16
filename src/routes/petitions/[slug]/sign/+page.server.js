import { error } from "@sveltejs/kit";

export const actions = {
  signPetition: async ({ request }) => {
    let data = await request.formData();
    let signatoryData = data.get("signatory");

    signatoryData = JSON.parse(signatoryData);

    try {
      const res = await fetch("http://localhost:3000/signatures/sign", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signatoryData),
      });

      const result = await res.json();

      return {
        result,
      };
    } catch (error) {
      console.log(error);
    }
  },
};
