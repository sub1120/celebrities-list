import { Celebrity, convertToObject } from "../models/celebrity";

export const fetchCelebrities = async (dispatchCelebrities) => {
  try {
    const response = await fetch("./celebrities.json");
    const celebs_data = await response.json();

    const payload = celebs_data.map((data) => convertToObject(data));

    dispatchCelebrities({ type: "LOAD_CELEBRITIES", payload });
  } catch (error) {
    console.log(error);
  }
};

export const updateCelebrity = (updatedCelibrity, dispatchCelebrities) => {
  const payload = new Celebrity(
    updatedCelibrity.id,
    updatedCelibrity.picture,
    updatedCelibrity.fullname,
    updatedCelibrity.age,
    updatedCelibrity.gender,
    updatedCelibrity.country,
    updatedCelibrity.desc
  );

  dispatchCelebrities({ type: "UPDATE_CELEBRITY", payload });
};

export const deleteCelebrity = (dispatchCelebrities, id) => {
  const payload = { id };
  dispatchCelebrities({ type: "DELETE_CELEBRITY", payload });
};
