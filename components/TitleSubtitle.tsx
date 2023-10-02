import React from 'react';

export type TitleSubtitleProps = {
  title: string;
  subtitle: string;
  subtitle2: string;
};

const TitleSubtitle: React.FC<TitleSubtitleProps> = ({
  title,
  subtitle,
  subtitle2,
}) => {
  return (
    <div className="flex flex-col items-start">
      <p
        className="w-150 text-sm text-gray-600 font-light leading-4 tracking-wide"
        style={{ fontFamily: 'Calibri' }}>
        {subtitle}
      </p>
      <h1
        className="w-74 text-lg text-red-600 font-bold leading-6 tracking-wide mt-1"
        style={{ fontFamily: 'Montserrat' }}>
        {title}
      </h1>
      <p
        className="w-150 text-base text-gray-600 font-light leading-4 tracking-wide mt-10"
        style={{ fontFamily: 'Calibri' }}>
        {subtitle2}
      </p>
    </div>
  );
};

export default TitleSubtitle;
