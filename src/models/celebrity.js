import { calculateAge } from "../utils/helper";

export class Celebrity {
  constructor(id, picture, fullname, age, gender, country, desc) {
    this.id = id;
    this.picture = picture;
    this.fullname = fullname;
    this.age = age;
    this.gender = gender;
    this.country = country;
    this.desc = desc;
  }
}

export const convertToObject = (data) => {
  const fullname = `${data.first} ${data.last}`;
  const age = calculateAge(data.dob);

  return new Celebrity(
    data.id,
    data.picture,
    fullname,
    age,
    data.gender,
    data.country,
    data.description
  );
};
