import styles from "./MemoryGame.module.css";
import lodash from "lodash";
import { useEffect, useRef, useState } from "react";

const MemoryGame = ({ images }) => {
  const [boardImages, setBoardImages] = useState([]);
  const [firstImage, setFirstImage] = useState(null);
  const [secondImage, setSecondImage] = useState(null);
  const currentImageNode = useRef(null);

  useEffect(() => {
    setBoardImages(generateBoardImages(images));
  }, [setBoardImages, images]);

  function generateBoardImages(images) {
    const copiedImages = images.map((image) => {
      return { ...image, id: image.id + images.length };
    });

    return lodash.shuffle([...images, ...copiedImages]);
  }

  function handleImageClick(event, image) {
    event.target.classList.add("selected");

    if (!firstImage && !secondImage && currentImageNode.current) {
      setFirstImage(image);
      currentImageNode.current.classList.remove("selected");
    } else if (!firstImage && !secondImage) {
      setFirstImage(image);
    } else if (firstImage && secondImage) {
      setFirstImage(image);
      setSecondImage(null);
    } else if (firstImage.url !== image.url) {
      currentImageNode.current.classList.remove("selected");
      setFirstImage(image);
      setSecondImage(null);
    } else {
      setSecondImage(image);
    }

    currentImageNode.current = event.target;
  }

  return (
    <div>
      <h1 className={styles.title}>Memory Game</h1>
      <ul className={styles.gameBoard}>
        {boardImages.map((image) => (
          <li
            key={image.id}
            className={styles.pictureContainer}
            onClick={(event) => handleImageClick(event, image)}
          >
            <img
              src={image.url}
              className={styles.picture}
              alt="Game picture"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemoryGame;
