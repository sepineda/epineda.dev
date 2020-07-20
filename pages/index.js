import React from 'react';
import {
  Main,
  PageHeader,
  Paragraph,
  Link,
  Head,
  BlogPostCard,
  WideSection,
  CardGrid,
  ViewMoreLink,
  Icon
} from '../components';
import { ChevronRight } from "react-feather";
import { H2 } from '../components/Heading';
import blogposts from '../data/blog-posts';
import { DEFAULT_TITLE } from './_app';

const Index = () => {
  return (
    <Main>
      <PageHeader title="Hi, I'm Eduardo Pineda">
        <Paragraph centered>
          I'm a passionate Full-Stack Software Engineer from Costa Rica 🇨🇷. 
          I love JavaScript technologies like React, Node, MongoDB, ExpressJS, Next.js among others.
        </Paragraph>
        <Paragraph centered>
          I also like to write posts about software development I share in my{' '}
          <Link href="/blog">blog</Link> and in{' '}
          <Link href="https://medium.com/@sepineda">Medium</Link>. You can follow me on twitter at <Link href="https://twitter.com/@sepineda">@sepineda</Link>
        </Paragraph>
        <Paragraph>
          When I'm not coding, I like to run 🏃‍♂️, enjoy good cinema and brew Kombucha.
        </Paragraph>
      </PageHeader>
      <Head title={DEFAULT_TITLE} />
      <H2>Recent Posts</H2>
      <WideSection>
        <CardGrid>
          {blogposts.slice(0, 6).map((post) => (
            <BlogPostCard key={post.title} post={post} />
          ))}
        </CardGrid>
      </WideSection>
      <ViewMoreLink href="/blog">
          View more
          <Icon>
            <ChevronRight size="1em" />
          </Icon>
        </ViewMoreLink>
    </Main>
  );
};

export default Index;
