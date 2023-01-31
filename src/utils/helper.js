export function calculateAge(dob) {
  const personDob = new Date(dob);
  const today = new Date();
  const ageInMilliseconds = today - personDob;
  const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
  return Math.floor(ageInYears);
}
