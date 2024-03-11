'use Client'

import { useState } from 'react';

const MiniaSlide = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);
  const [selectedThumbnail, setSelectedThumbnail] = useState(images[0]);

  const handleThumbnailClick = (image) => {
    setMainImage(image);
    setSelectedThumbnail(image);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="lg:w-[80%] w-full lg:h-[700px] h-auto">
        <img src={mainImage} alt="Main Image" className="w-full h-full object-cover" />
      </div>
      <div className="w-full flex justify-center mt-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`lg:w-32 w-16 object-cover h-auto mr-2 cursor-pointer ${selectedThumbnail === image ? 'outline outline-[#DF0624] outline-offset-2 outline-1' : ''}`}
            onClick={() => handleThumbnailClick(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default MiniaSlide;


