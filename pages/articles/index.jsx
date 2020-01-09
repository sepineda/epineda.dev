import React from 'react';
import { css } from 'styled-components';
import { parseISO, format } from 'date-fns';
import { Heading } from 'rebass/styled-components';
import PropTypes from 'prop-types';
import PageHeader from '../../components/PageHeader';
import Link from '../../components/Link';
import Text from '../../components/Text';
import { H3 } from '../../components/Heading';
import blogposts from '../../data/blog-posts';

const BlogPostListItem = ({ post, small, last }) => (
  <Link
    href={post.path}
    mt={small ? 3 : 4}
    pb={small ? 3 : 4}
    css={css`
      display: block;
      ${!last && 'border-bottom: 2px solid rgba(0, 0, 0, 0.1);'} &:hover {
        text-decoration: none;
        ${Heading} {
          text-decoration: underline;
        }
      }
    `}
  >
    <H3 mt={0} fontSize={small ? 2 : 4} mb={2}>
      {post.title}
    </H3>
    <Text
      color="quaternary"
      as="div"
      css={{ height: '1em' }}
      fontSize={small ? 1 : 2}
    >
      {format(parseISO(post.publishedAt), 'MMM do, yyyy')}
      {typeof post.external === 'string' && ` · ${post.external}`}
    </Text>
  </Link>
);

BlogPostListItem.propTypes = {
  post: PropTypes.object,
  small: PropTypes.bool,
  last: PropTypes.bool
};

const BlogIndex = () => (
  <>
    <PageHeader
      title="Articles"
      description="Candid thoughts about React.js, Node.js, startups and other interesting things."
      jsonld={{
        '@context': 'http://schema.org',
        '@type': 'Articles',
        about:
          'Candid thoughts about React.js, Node.js, startups and other interesting things.',
        author: {
          '@type': 'Person',
          '@id': 'sepineda',
          name: 'Eduardo Pineda'
        }
      }}
    >
    </PageHeader>
    {blogposts.map((post, index) => (
      <BlogPostListItem
        key={post.title}
        small={false}
        last={index === blogposts.length - 1}
        post={post}
        webmentions
      />
    ))}
    <hr />
  </>
);

export default BlogIndex;
