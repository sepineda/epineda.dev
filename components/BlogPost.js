import React from 'react';
import { Flex, Box } from 'rebass';
import { withRouter } from 'next/router';
import { parse, format } from 'date-fns';
import Head from './Head';
import { H2 } from './Heading';
import Text from './Text';
import Link from './Link';
import Icon from './Icon';
import NextPost from './NextPost';
import BreadcrumbLink from './BreadcrumbLink';
import blogposts from '../data/blog-posts';
import { ChevronLeft } from 'react-feather';
import PrismTheme from './PrismTheme';

const BackToBlog = (props) => (
  <BreadcrumbLink {...props} color="primary" href="/blog">
    <Icon ml={0} mr={1}>
      <ChevronLeft size="1em" />
    </Icon>
    BACK TO BLOG
  </BreadcrumbLink>
);

export default withRouter((props) => {
  const { meta, children, router } = props;
  const published = format(parse(meta.publishedAt), 'MMMM Do, YYYY');
  const current = blogposts.map(({ title }) => title).indexOf(meta.title);
  const next = blogposts[current - 1];
  const prev = blogposts[current + 1];

  return (
    <>
      <Head
        title={meta.title}
        description={meta.summary}
        image={meta.image}
      >
        {meta.published !== true && <meta name="robots" content="noindex" />}
      </Head>
      <PrismTheme />

      <BackToBlog mb={4} mt={[4, 5]} />
      <H2 mb={3} mt={4}>
        {meta.title}
      </H2>
      <Text mt={3} mb={4} color="quaternary">
        {meta.published !== true ? 'Not yet published' : `Published ${published}`}
      </Text>
      {children}
      <hr />
      {(prev || next) && (
        <Flex
          justifyContent="space-between"
          flexDirection={['column-reverse', 'row']}
          my={5}
        >
          {prev && <NextPost position="left" title={prev.title} href={prev.path} />}
          <Box my={[2, 0]} />
          {next && <NextPost position="right" title={next.title} href={next.path} />}
        </Flex>
      )}
    </>
  );
});
