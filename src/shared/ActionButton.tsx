import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedPageEnum } from './types';

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPageEnum) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="rounded-md transition bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
      onClick={() => setSelectedPage(SelectedPageEnum.ContactUs)}
      href={`#${SelectedPageEnum.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
