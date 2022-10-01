import LandingPage from './LandingPage';

const LandingPageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'landing-page',
      element: <LandingPage />,
    },
  ],
};

export default LandingPageConfig;
