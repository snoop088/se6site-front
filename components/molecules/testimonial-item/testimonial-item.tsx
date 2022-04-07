import styles from "./testimonial-item.module.scss";

interface TestimonialItemProps {
  copyMd: string;
  personName: string;
  personPosition: string;
  personCompany: string;
}
export const TestimonialItem = ({
  copyMd,
  personName,
  personPosition,
  personCompany,
}: TestimonialItemProps) => {
  return <div className={styles.container}>TestimonialItem</div>;
};
