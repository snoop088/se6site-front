import classNames from "classnames";
import styles from "./reveal-more.module.scss";
interface RevealMoreProps {
  copy: string;
  isRevealed?: boolean;
  overlapColour?: string;
  onReveal: () => void;
}
export const RevealMore = ({
  copy,
  isRevealed = false,
  overlapColour = "#fff",
  onReveal,
}: RevealMoreProps) => {
  const triangleColour = isRevealed
    ? `linear-gradient(
    to top right,
    transparent 50%,
    ${overlapColour} 0
  ),
  linear-gradient(to bottom right, ${overlapColour} 50%, transparent 0)`
    : `linear-gradient(
    to top right,
    transparent 50%,
    #84c9bb	 0
  ),
  linear-gradient(to bottom right, #84c9bb 50%, transparent 0)`;
  return (
    <div className={styles.container}>
      <h2>{copy}</h2>
      <div className={styles.revealFunction}>
        <div
          className={classNames([
            styles.arrowContainer,
            { [styles.revealed]: isRevealed },
          ])}
          onClick={() => onReveal()}
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
            })}
          ></span>
        </div>
      </div>
    </div>
  );
};
// #75c3b3
