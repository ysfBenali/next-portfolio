import Image from 'next/image';
import Container from '@/components/common/Container';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <Container
      id="contact"
      className="flex justify-between items-start pt-9 pb-8 md:flex-col-reverse md:pt-0"
    >
      <div className="flex-1 pr-12 md:w-full md:p-0">
        <ContactForm />
      </div>
      <div className="flex-1 self-center md:w-full md:py-4 md:px-0">
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
      </div>
    </Container>
  );
};

export default Contact;
