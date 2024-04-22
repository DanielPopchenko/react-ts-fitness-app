export enum SelectedPageEnum {
  Home = 'home',
  Benefits = 'benefits',
  OurClasses = 'ourclasses',
  ContactUs = 'contactus',
}

export interface IBenefit {
  icon: React.ReactNode;
  title: string;
  text: string;
}

export interface IClass {
  name: string;
  description?: string;
  image: string;
}
