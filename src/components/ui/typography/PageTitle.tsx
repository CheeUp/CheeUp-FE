import { PropsWithChildren } from 'react';
import { H1 } from './Heading';

export default function PageTitle({ children }: PropsWithChildren) {
  return <H1 className='mb-6 mt-9'>{children}</H1>;
}
