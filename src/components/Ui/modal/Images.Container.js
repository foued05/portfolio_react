import { useEffect, useState } from 'react'
import { faChevronLeft, faChevronRight  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ImagesContainer = ({ images }) => {
  const [index, setIndex] = useState(0);
  

  //Grap next image
  const nextImageHandler = () => {
    setIndex(index + 1)
  }

  //Grap prev image
  const prevImageHandler = () => {
    setIndex(index - 1)
  }

  useEffect(() => {
    const lastIndex = images.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [images, index])

  return (
    <div className="image-container">
      {images &&
        images.length &&
        images.map((img, imgIndex) => {
          let position = 'nextImg'
          if (imgIndex === index) {
            position = 'currentImg'
          } else if (
            imgIndex === index - 1 ||
            (index === 0 && imgIndex === images.length - 1)
          ) {
            position = 'prevImg'
          }

          return (
            <img
              src={img}
              alt={`sample ${imgIndex}`}
              key={imgIndex}
              className={position}
            />
          )
        })}
      <i className="left" onClick={prevImageHandler}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </i>
      <i className="right" onClick={nextImageHandler}>
        <FontAwesomeIcon icon={faChevronRight} />
      </i>
    </div>
  )
}

export default ImagesContainer
