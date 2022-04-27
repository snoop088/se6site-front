import { useRef, useState } from "react";
import Icon from "../Icon/Icon";
import styles from "./video-player.module.scss";

interface VideoPlayerProps {
  videoSourceUrl: string;
}

export const VideoPlayer = ({ videoSourceUrl }: VideoPlayerProps) => {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const handleVidepPlayClick = () => {
    if (videoRef && videoRef.current) {
      videoRef.current.play();
      setVideoPlaying(true);
    }
  };
  return (
    <div className={styles.videoAdContainer} onClick={handleVidepPlayClick}>
      <video
        width={"100%"}
        height={"auto"}
        ref={videoRef}
        src={"/showcase/videos/" + videoSourceUrl}
      >
        <source src={"/showcase/videos/" + videoSourceUrl} />
      </video>
      {!videoPlaying && (
        <div className={styles.videoOverlay}>
          <Icon icon="videos" className={styles.videoThumbIcon} />
        </div>
      )}
    </div>
  );
};
