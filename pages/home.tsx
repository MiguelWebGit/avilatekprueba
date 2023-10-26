import {
  FEATURED_PRODUCTS_TITLE_SUBTITLE,
  FEATURED_PRODUCTS,
  SHOP_BY_PETS_TITLE_SUBTITLE,
  SHOP_BY_PETS_CATEGORIES,
  LATEST_PRODUCTS,
  LATEST_PRODUCTS_TITLE_SUBTITLE,
  SERVICES_TITLE_SUBTITLE,
  SERVICES,
  BRAND_DESCRIPTION,
  BRAND_IMAGES,
  BRAND_TITLE_SUBTITLE,
} from '../lib/constants';
import FeaturedProducts from '../components/FeaturedProducts';
import { Banner } from '../components/Banner';
import ShopByPets from '../components/ShopByPets';
import Ad from '../components/Ad';
import BestSellers from '../components/BestSellers';
import LatestProducts from '../components/LatestProducts';
import Services from '../components/Services';
import Brand from '../components/Brand';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Banner
        imageUrls={['banner1.png', 'banner2.png', 'banner3.png', 'banner4.png']}
      />
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mt-20">
          <ShopByPets
            titleSubtitleProps={SHOP_BY_PETS_TITLE_SUBTITLE}
            categories={SHOP_BY_PETS_CATEGORIES}
          />
        </div>
        <div className="mt-20">
          <FeaturedProducts
            titleSubtitleProps={FEATURED_PRODUCTS_TITLE_SUBTITLE}
            imageSrc="lateral.png"
            products={FEATURED_PRODUCTS}
          />
          <div className="mt-20">
            <Ad images={['ad1.png', 'ad2.png']} />
          </div>
          <div className="mt-20">
            <BestSellers />
          </div>
          <div className="mt-20">
            <Ad images={['ad.png']} />
          </div>
          <div>
            <LatestProducts
              titleSubtitleProps={LATEST_PRODUCTS_TITLE_SUBTITLE}
              products={LATEST_PRODUCTS}
              imageSrc="lateral.png"
            />
          </div>
          <div className="flex flex-col items-start mt-20">
            <Services
              titleSubtitleProps={SERVICES_TITLE_SUBTITLE}
              services={SERVICES}
              subtitle2={''}
            />
          </div>
          <div className="flex flex-col items-start mt-20">
            <Brand
              titleSubtitleProps={BRAND_TITLE_SUBTITLE}
              description={BRAND_DESCRIPTION}
              images={BRAND_IMAGES}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
