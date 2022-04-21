import React from "react";

import Wrapper from "@/components/organisms/Wrapper/Wrapper";
import Button from "@/components/molecules/Button/Button";

import styles from "./Hero.module.scss";
import { useWindowSize } from "hooks/useWindowSize";
import Link from "next/link";

interface Props {
  title: string;
  buttonTitle: string;
  buttonOnClick: () => void;
}

const Hero = ({ title, buttonTitle, buttonOnClick }: Props) => {
  const wSize = useWindowSize();
  const videoSrc =
    wSize.width && wSize.width > 768
      ? "/se_site_1920x720.mp4"
      : "/se_site_720x720.mp4";
  return (
    <div className={styles.container}>
      <Wrapper className={styles.wrapper}>
        <h1 className={styles.title}>{title}</h1>
        <Link href="/contact" passHref>
          <a>
            <Button
              elevated
              title={buttonTitle}
              onClick={buttonOnClick}
              icon={"button-arrow"}
            />
          </a>
        </Link>
      </Wrapper>
      <div className={styles.videoContainer}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className={styles.heroVideoBanner}
          src={videoSrc}
        >
          <source src={videoSrc} />
        </video>
      </div>
      <div className={styles.videoOverlay}></div>
    </div>
  );
};

export default Hero;
