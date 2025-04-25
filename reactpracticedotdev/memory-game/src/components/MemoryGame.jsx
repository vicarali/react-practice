import styles from "./MemoryGame.module.css";
import lodash from "lodash";

const MemoryGame = ({ images }) => {
  const generatedBoardImages = generateBoardImages(images);

  return (
    <div>
      <h1 className={styles.title}>Memory Game</h1>
      <ul className={styles.gameBoard}>
        {generatedBoardImages.map((image) => (
          <li key={image} className={styles.pictureContainer}>
            <img src={image} className={styles.picture} alt="Game picture" />
          </li>
        ))}
      </ul>
    </div>
  );
};

function generateBoardImages(images) {
  const copiedImages = [...images];

  return lodash.shuffle([...images, ...copiedImages]);
}

export default MemoryGame;
