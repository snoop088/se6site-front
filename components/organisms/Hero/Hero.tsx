import React from "react";

import Wrapper from "@/components/organisms/Wrapper/Wrapper";
import Button from "@/components/molecules/Button/Button";

import styles from "./Hero.module.scss";

interface Props {
  title: string;
  buttonTitle: string;
  buttonOnClick: () => void;
}

const Hero = ({ title, buttonTitle, buttonOnClick }: Props) => {
  return (
    <div className={styles.container}>
      <Wrapper className={styles.wrapper}>
        <h1 className={styles.title}>{title}</h1>
        <Button
          elevated
          title={buttonTitle}
          onClick={buttonOnClick}
          icon={"button-arrow"}
        />
      </Wrapper>
      <div className={styles.videoContainer}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className={styles.heroVideoBanner}
        >
          <source src="/se_site_1920x720_c.mp4" />
        </video>
      </div>
      <div className={styles.videoOverlay}></div>
    </div>
  );
};

export default Hero;
