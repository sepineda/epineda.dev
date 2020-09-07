import React from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import JsonLD from "./JsonLD";

const HeadWithRouter = withRouter(
  ({ title, description, children, image, router, jsonld }) => (
    <Head>
      {/* DEFAULT */}
      {title && <title key="title">{title}</title>}{' '}
      {description != undefined && (
        <meta name="description" key="description" content={description} />
      )}
      <link rel="icon" type="image/x-icon" href="/images/favicon.png" />
      <link rel="apple-touch-icon" href="/images/favicon.png" />
      {/* OPEN GRAPH */}
      <meta property="og:type" key="og:type" content="website" />
      <meta
        property="og:url"
        key="og:url"
        content={`https://epineda.dev${router.pathname}`}
      />
      {title != undefined && (
        <meta property="og:title" content={title} key="og:title" />
      )}
      {description != undefined && (
        <meta property="og:description" key="og:description" content={description} />
      )}
      {image != undefined && (
        <meta
          property="og:image"
          key="og:image"
          content={`https://epineda.dev${image}`}
        />
      )}
      {/* TWITTER */}
      <meta name="twitter:card" key="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" key="twitter:site" content="@sepineda" />
      <meta name="twitter:creator" key="twitter:creator" content="@sepineda" />
      {title != undefined && (
        <meta name="twitter:title" key="twitter:title" content={title} />
      )}
      {description != undefined && (
        <meta
          name="twitter:description"
          key="twitter:description"
          content={description}
        />
      )}
      {image != undefined && (
        <meta
          name="twitter:image"
          key="twitter:image"
          content={`https://epineda.dev${image}`}
        />
      )}
      <JsonLD
        data={[
          {
            '@context': 'http://schema.org',
            '@type': 'Person',
            id: 'mxstbr',
            email: 'mailto:contact@fullstackengine.com',
            image: '/images/headshot.jpeg',
            jobTitle: 'Senior Software Engineer',
            familyName: 'Pineda',
            givenName: 'Eduardo',
            name: 'Eduardo Pineda',
            birthPlace: 'Heredia, Costa Rica',
            birthDate: '1983-09-03',
            height: '178 cm',
            gender: 'male',
            nationality: 'Costa Rica',
            url: 'https://epineda.dev',
            sameAs: [
              'http://twitter.com/sepineda',
            ]
          },
          ...(Array.isArray(jsonld) ? jsonld : [jsonld])
        ].filter(Boolean)}
      />
      {children}
    </Head>
  )
);

HeadWithRouter.propTypes = {
  title: PropTypes.string
};

export default HeadWithRouter;
