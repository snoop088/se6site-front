import classNames from "classnames";
import styles from "./reveal-more.module.scss";
interface RevealMoreProps {
  copy: string;
  isRevealed?: boolean;
  isAnimated?: boolean;
  overlapColour?: string;
  onReveal: () => void;
}
export const RevealMore = ({
  copy,
  isRevealed = false,
  isAnimated = false,
  overlapColour = "#fff",
  onReveal,
}: RevealMoreProps) => {
  const triangleColour = isRevealed
    ? `linear-gradient(
    to top right,
    transparent 48%,
    ${overlapColour} 50%
  ),
  linear-gradient(to bottom right, ${overlapColour} 48%, transparent 50%)`
    : `linear-gradient(
    to top right,
    transparent 48%,
    #84c9bb	50%
  ),
  linear-gradient(to bottom right, #84c9bb 48%, transparent 50%)`;
  return (
    <div
      className={classNames([
        styles.container,
        { [styles.animated]: isAnimated },
      ])}
    >
      <h2 onClick={() => isAnimated && onReveal()}>{copy}</h2>
      <div
        className={styles.revealFunction}
        onClick={() => isAnimated && onReveal()}
      >
        <div
          className={classNames([
            styles.arrowContainer,
            { [styles.revealed]: isRevealed },
          ])}
        >
          <span
            className={classNames([
              styles.triangle,
              { [styles.revealed]: isRevealed },
            ])}
            style={{ backgroundImage: triangleColour }}
          ></span>
          <span
            className={classNames([styles.arrow], {
              [styles.toReveal]: !isRevealed,
              [styles.animated]: isAnimated,
            })}
          ></span>
        </div>
      </div>
    </div>
  );
};
// #75c3b3
