import React from 'react';
import TitleSubtitle, { TitleSubtitleProps } from './TitleSubtitle';

type CategoryProps = {
  title: string;
  imageSrc: string;
};

type ShopByPetsProps = {
  titleSubtitleProps: TitleSubtitleProps;
  categories: Array<CategoryProps>;
};

const Category: React.FC<CategoryProps> = ({ title, imageSrc }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={imageSrc} alt={title} className="w-30 h-30" />
      <h2
        className="w-14 text-sm text-gray-800 font-semibold leading-5 tracking-wide mt-5"
        style={{ fontFamily: 'Montserrat' }}>
        {title}
      </h2>
    </div>
  );
};

const ShopByPets: React.FC<ShopByPetsProps> = ({
  titleSubtitleProps,
  categories,
}) => {
  return (
    <div>
      <div className="mb-10">
        <TitleSubtitle {...titleSubtitleProps} />
      </div>
      <div className="grid md:grid-cols-6 gap-10 sm:grid-cols-3 grid-cols-2">
        {categories.map((category, index) => (
          <Category key={index} {...category} />
        ))}
      </div>
    </div>
  );
};

export default ShopByPets;
