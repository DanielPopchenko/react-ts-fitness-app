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

  // console.log('page: ', page);
  console.log('selectedPage: ', selectedPage);
  console.log('lowerCasedPage: ', lowerCasedPage);

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasedPage ? 'text-primary-500' : ''} transition duration-500 hover:text-primary-300 cursor-pointer`}
      onClick={() => setSelectedPage(lowerCasedPage)}
      href={`#${lowerCasedPage}`}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
