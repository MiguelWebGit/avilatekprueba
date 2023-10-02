import React from 'react';
import TitleSubtitle, { TitleSubtitleProps } from './TitleSubtitle';

type ServiceProps = {
  imageSrc: string;
  title: string;
  description: string;
};

type ServicesProps = {
  titleSubtitleProps: TitleSubtitleProps;
  subtitle2: string;
  services: Array<ServiceProps>;
};

const Service: React.FC<ServiceProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="flex flex-col items-start">
      <img src={imageSrc} alt={title} className="w-20 h-20" />
      <h2
        className="w-75 text-lg font-semibold leading-5 tracking-wide mt-6 mb-1"
        style={{ fontFamily: 'Montserrat' }}>
        {title}
      </h2>
      <p
        className="w-80 text-sm font-light leading-4 tracking-wide"
        style={{ fontFamily: 'Calibri' }}>
        {description}
      </p>
    </div>
  );
};

const Services: React.FC<ServicesProps> = ({
  titleSubtitleProps,
  subtitle2,
  services,
}) => {
  return (
    <div className="flex flex-col items-start">
      <TitleSubtitle {...titleSubtitleProps} />
      <p
        className="w-156 text-sm font-light leading-5 tracking-wide mb-10"
        style={{ fontFamily: 'Calibri' }}>
        {subtitle2}
      </p>
      <div>
        <div className="grid lg:grid-cols-4 gap-14">
          {services.slice(0, 3).map((service, index) => (
            <Service key={index} {...service} />
          ))}
        </div>
        <div className="grid lg:grid-cols-4 gap-14 mt-10">
          {services.slice(3).map((service, index) => (
            <Service key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
