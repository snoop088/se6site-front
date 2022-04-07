import { IconTitle } from "@/components/atoms/icon-title/icon-title";
import Button from "@/components/molecules/Button/Button";
import { WhyIsStreameyeRight } from "@/components/molecules/why-is-streameye-right/why-is-streameye-right";
import Wrapper from "@/components/organisms/Wrapper/Wrapper";
import { CASE_STUDIES_FULL } from "api/mockdata/case-studies";
import { TESTIMONIALS } from "api/mockdata/testimonials";
import { CaseStudyItem } from "interfaces/case-study-item";
import { PageWithMeta } from "interfaces/page-with-meta";
import { Testimonial } from "interfaces/testimonial";
import { NextPage } from "next";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

import styles from "./[id].module.scss";

interface PageProps extends PageWithMeta {
  caseStudyItem: CaseStudyItem;
  testimonial: Testimonial;
  nextId: string;
  whyStreameye: {
    copy: string;
    cta: string;
    title: string;
  };
}
const CaseStudy: NextPage<PageProps> = ({
  caseStudyItem: { sections, titleMd, client, bullets, mediaUrl },
  nextId,
  testimonial,
  whyStreameye,
}: PageProps) => {
  return (
    <div className={styles.container}>
      <section className={styles.heroBanner}>
        <Wrapper isWide>
          <div className={styles.heroBannerContent}>
            <div className={styles.header}>
              <h2>
                CASE STUDY: <span>{client}</span>
              </h2>
              <h1>
                <ReactMarkdown>{titleMd}</ReactMarkdown>
              </h1>
            </div>

            <figure>
              <Image src={mediaUrl} alt={client} width={725} height={625} />
            </figure>
          </div>
        </Wrapper>
      </section>

      <section className={styles.bullets}>
        <Wrapper isWide>
          <ul>
            {bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </Wrapper>
      </section>
      <section className={styles.caseContent}>
        {sections.map((section) => (
          <Wrapper key={section.icon} className={styles.caseSection}>
            <IconTitle title={section.title} icon={section.icon} />
            <div className={styles.copy}>
              <ReactMarkdown>{section.copyMd}</ReactMarkdown>
            </div>
          </Wrapper>
        ))}
      </section>
      <section className={styles.testimonial}>
        <Wrapper className={styles.testimonialContent}>
          <blockquote>
            <div className={styles.copy}>
              <ReactMarkdown>{testimonial.copyMd}</ReactMarkdown>
            </div>
            <div className={styles.testimonialPerson}>
              <div className={styles.personName}>{testimonial.person.name}</div>
              <div className={styles.personPosition}>
                {testimonial.person.position}
              </div>
            </div>
            <div className={styles.testimonialClient}>{testimonial.client}</div>
          </blockquote>
        </Wrapper>
      </section>
      <section className={styles.whyStreameye}>
        <WhyIsStreameyeRight
          copy={whyStreameye.copy}
          title={whyStreameye.title}
          cta={
            <Button
              variant="white"
              elevated
              title="Ask us how"
              icon="button-arrow"
            />
          }
        />
      </section>
      {/* <section className={styles.actions}>
        <Wrapper>
          <h4>Continue reading?</h4>
        </Wrapper>
      </section> */}
    </div>
  );
};

export async function getStaticPaths() {
  const paths = CASE_STUDIES_FULL.map((item) => ({ params: { id: item.id } }));
  return {
    paths,
    fallback: false, // false or 'blocking'
  };
}
export async function getStaticProps({
  params: { id },
}: {
  params: { id: string };
}) {
  // eventually get meta data from CMS?
  const index = CASE_STUDIES_FULL.findIndex((item) => item.id === id);
  const nextId =
    index < CASE_STUDIES_FULL.length - 1 ? CASE_STUDIES_FULL[index + 1].id : 0;
  const testimonial = TESTIMONIALS.find(
    (testimonial) => testimonial.studyId === CASE_STUDIES_FULL[index].id
  );
  return {
    props: {
      meta: {
        title: "Streameye - Case Studies - " + CASE_STUDIES_FULL[index].titleMd,
        description: "I am the home page",
        keywords: ["kw1", "kw2"],
      },
      caseStudyItem: CASE_STUDIES_FULL[index],
      nextId,
      testimonial,
      whyStreameye: {
        title:
          "Need to scale your digital advertising while optimising team collaboration?",
        copy: "StreamEye will take your static, dynamic and HTML5 ads to the next level.",
        cta: "Get in touch",
      },
    } as PageProps, // will be passed to the page component as props
  };
}
export default CaseStudy;
