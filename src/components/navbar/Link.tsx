import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedPageEnum } from '@shared/types';

interface IProps {
  page: string;
  selectedPage: SelectedPageEnum;
  setSelectedPage: (value: SelectedPageEnum) => void;
}

const Link = ({ page, selectedPage, setSelectedPage }: IProps) => {
  // ! .replace(/ /g, "")  - replaces spaces
  const lowerCasedPage = page.toLowerCase().replace(/ /g, '') as SelectedPageEnum;

  const handleClick = () => {};
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasedPage ? 'text-primary-500' : ''} transition duration-500 hover:text-primary-300 cursor-pointer`}
      href={`#${lowerCasedPage}`}
      onClick={() => setSelectedPage(lowerCasedPage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;