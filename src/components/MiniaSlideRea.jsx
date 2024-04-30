'use Client'

import { useState } from 'react';

const MiniaSlideRea = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);
  const [selectedThumbnail, setSelectedThumbnail] = useState(images[0]);

  const handleThumbnailClick = (image) => {
    setMainImage(image);
    setSelectedThumbnail(image);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center lg:justify-between w-full">
      <div className="w-[60%] lg:h-[500px] h-auto">
        <img src={mainImage} alt="Main Image" className="w-full h-full object-contain" />
      </div>
      <div className="w-[38%] grid grid-cols-2 gap-4 justify-center mt-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`lg:w-full w-12 object-contain h-auto max-h-[200px] mr-2 cursor-pointer ${selectedThumbnail === image ? 'outline outline-[#DF0624] outline-offset-2 outline-1' : ''}`}
            onClick={() => handleThumbnailClick(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default MiniaSlideRea;


