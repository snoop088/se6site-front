type Person = {
  name: string;
  position: string;
};
export interface Testimonial {
  copyMd: string;
  person: Person;
  client: string;
  studyId: string;
}
