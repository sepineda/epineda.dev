// @noflow
import React from 'react';
import { parseISO, format } from 'date-fns';
import PropTypes from 'prop-types';
import Link from './Link';
import Card, { Title, Body, FinePrint } from './Card';

const BlogPostCard = ({ post: { path: href, title, summary, publishedAt } }) => {
  const date = parseISO(publishedAt);
  return (
    <Link
      href={href}
      width={[1, 'calc(50% - 16px)', 'calc(33.3% - 16px)']}
      css="&:hover&:hover { text-decoration: none; }"
      m={[1, 2]}
      mb={2}
    >
      <Card>
        <Title>{title}</Title>
        <Body css={{ maxHeight: '5em', overflow: 'hidden' }}>
          {summary}
        </Body>
        <FinePrint>
          {format(date, 'MMM do, yyyy')}
        </FinePrint>
      </Card>
    </Link>
  );
};

BlogPostCard.propTypes = {
  post: PropTypes.object,
};

export default BlogPostCard;
