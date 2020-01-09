import React from 'react';
import {
  Main,
  PageHeader,
  Paragraph,
  Link,
  Head,
  BlogPostCard,
  WideSection,
  CardGrid
} from '../components';
import { H2 } from '../components/Heading';
import blogposts from '../data/blog-posts';
import { DEFAULT_TITLE } from './_app';

const Index = () => {
  return (
    <Main>
      <PageHeader title="Hi, I'm Eduardo Pineda">
        <Paragraph centered>
          I'm a Full-Stack Software Engineer from Costa Rica 🇨🇷. I love JavaScript
          technologies like React, Node, MongoDB, ExpressJS among others.
        </Paragraph>
        <Paragraph centered>
          I also like to write articles about software development I share in{' '}
          <Link href="/articles">articles</Link> and in{' '}
          <Link href="https://medium.com/@sepineda">Medium</Link>.
        </Paragraph>
      </PageHeader>
      <Head title={DEFAULT_TITLE} />
      <H2>Recent Articles</H2>
      <WideSection>
        <CardGrid>
          {blogposts.slice(0, 3).map((post) => (
            <BlogPostCard key={post.title} post={post} />
          ))}
        </CardGrid>
      </WideSection>
    </Main>
  );
};

export default Index;
