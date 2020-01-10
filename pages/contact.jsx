import React from 'react';
import { PageHeader, Paragraph, Main, Link } from '../components';
import { H3 } from '../components/Heading';

const Contact = () => (
  <Main>
    <PageHeader title="Contact Me">
      <Paragraph centered>
        Thanks for wanting to get in touch with me!. Please refer to the following
        channels.
      </Paragraph>
    </PageHeader>
    <Paragraph centered>
      <H3 mb={3} mt={4}>
        Twitter: <Link href="https://twitter.com/@sepineda">@sepineda</Link>
      </H3>
    </Paragraph>

    <Paragraph centered>
      <H3 mb={3} mt={4}>
        LinkedIn: <Link href="https://www.linkedin.com/in/sepineda/">/in/sepineda</Link>
      </H3>
    </Paragraph>

    <Paragraph centered>
      <H3 mb={3} mt={4}>
        Email: <Link href="mailto:contact@fullstackengine.net">contact@fullstackengine.net</Link>
      </H3>
    </Paragraph>
  </Main>
);

export default Contact;
