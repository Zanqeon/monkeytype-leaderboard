export default {
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: process.env.NODE_ENV === 'development',
    },
  },
};
