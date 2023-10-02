import React from 'react';
import TitleSubtitle from './TitleSubtitle';
import Product from './Product';
import { BEST_SELLERS, BEST_SELLERS_TITLE_SUBTITLE } from '../lib/constants';

const BestSellers: React.FC = () => {
  return (
    <div className="flex flex-col items-start">
      <TitleSubtitle title={BEST_SELLERS_TITLE_SUBTITLE.title} subtitle={BEST_SELLERS_TITLE_SUBTITLE.subtitle} subtitle2={''} />
      <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 w-full">
        {BEST_SELLERS.map((product, index) => (
          <Product key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
