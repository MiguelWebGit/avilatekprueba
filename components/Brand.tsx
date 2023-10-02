import React from 'react';
import TitleSubtitle, { TitleSubtitleProps } from './TitleSubtitle';

type ServiceProps = {
  imageSrc: string;
  title: string;
  description: string;
};

type BrandProps = {
  titleSubtitleProps: TitleSubtitleProps;
  description: string;
  images: string[];
};

const Brand: React.FC<BrandProps> = ({
  titleSubtitleProps,
  description,
  images,
}) => {
  return (
    <div className="flex flex-col items-start">
      <TitleSubtitle {...titleSubtitleProps} />
      <div className="flex justify-between w-full mt-4 mb-10">
        <p
          className="mr-10 w-[22.5rem] text-sm font-light leading-5 tracking-wide"
          style={{ fontFamily: 'Calibri' }}>
          {description}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between w-full">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Imagen ${index + 1}`}
              className="mx-2 w-25 h-20"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brand;
