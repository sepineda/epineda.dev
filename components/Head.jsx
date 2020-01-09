import React from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';

const HeadWithRouter = withRouter(
  ({ title, description, children }) => (
    <Head>
      {title && <title key="title">{title}</title>}{' '}
      {description != undefined && (
        <meta name="description" key="description" content={description} />
      )}
      <link
        rel="icon"
        type="image/x-icon"
        href="/images/favicon.png"
      />
      <link rel="apple-touch-icon" href="/images/favicon.png" />
      {children}
    </Head>
  )
);

HeadWithRouter.propTypes = {
  title: PropTypes.string
};

export default HeadWithRouter;
