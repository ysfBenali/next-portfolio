import Image from 'next/image';
import Container from '@/components/common/Container';
import ContactForm from './ContactForm';
import { Wrapper, Details, SvgContainer } from './styles';

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
          sizes="100vh"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </SvgContainer>
    </Wrapper>
  );
};

export default Contact;
