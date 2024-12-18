import { H1 } from './Heading';

interface PPageTitle {
  children: React.ReactNode;
}

const PageTitle: React.FC<PPageTitle> = ({ children }) => {
  return <H1 className='mb-6 mt-9'>{children}</H1>;
};

export default PageTitle;
