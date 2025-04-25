import styles from "./MemoryGame.module.css";

const MemoryGame = ({ images }) => {
  return (
    <div>
      <h1 className={styles.title}>Memory Game</h1>
      <ul className={styles.gameBoard}>
        {images.map((image) => (
          <li key={image} className={styles.pictureContainer}>
            <img src={image} className={styles.picture} alt="Game picture" />
          </li>
        ))}
        {images.map((image) => (
          <li key={image} className={styles.pictureContainer}>
            <img src={image} className={styles.picture} alt="Game picture" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemoryGame;
