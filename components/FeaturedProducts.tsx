import React from 'react';
import TitleSubtitle, { TitleSubtitleProps } from './TitleSubtitle';
import Product, { ProductProps } from './Product';

type FeaturedProductsProps = {
  titleSubtitleProps: TitleSubtitleProps;
  products: Array<ProductProps>;
  imageSrc: string;
};

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  titleSubtitleProps,
  products,
  imageSrc,
}) => {
  return (
    <div>
      <div className="mb-5 mt-10">
        <TitleSubtitle {...titleSubtitleProps} />
      </div>
      <div className="flex">
        <img
          src={imageSrc}
          alt="Imagen lateral"
          className="hidden lg:block w-110 h-177 mr-10"
        />
        <div className="flex flex-col items-start space-y-10">
          <div className="grid sm:grid-cols-3 grid-cols-2 gap-14">
            {products.map((product, index) => (
              <Product key={index} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
