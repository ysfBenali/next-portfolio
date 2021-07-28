import Container from '@/components/common/Container';
import Image from 'next/image';
import { Wrapper, Details, SvgContainer } from './styles';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <Wrapper as={Container} id="contact">
      <Details>
        <ContactForm />
      </Details>
      <SvgContainer>
        <Image
          src="/assets/contact.svg"
          width={500}
          height={450}
          alt="Contact Picture"
          layout="responsive"
        />
      </SvgContainer>
    </Wrapper>
  );
};

export default Contact;
