import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Asnov`,
    description:
      'Nós somos uma Assosiação de catadores de papel, papelão e material reaproveitável.',
    siteUrl: `https://asnov.gtsb.io/`,
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.ico',
      },
    },
  ],
};

export default config;
