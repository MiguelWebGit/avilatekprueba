import React from 'react';

type AdProps = {
  images: string[];
};

const Ad: React.FC<AdProps> = ({ images }) => {
  const isSingleImage = images.length === 1;
  return (
    <div className="flex">
      {images.map((image, index) => (
        <div
          key={index}
          className={`${isSingleImage ? 'w-full' : 'w-1/2'} h-56 bg-cover bg-center`}
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      ))}
    </div>
  );
};

export default Ad;
