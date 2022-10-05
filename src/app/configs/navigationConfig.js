import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
  {
    id: 'example-component',
    title: 'Dashboard',
    type: 'item',
    icon: 'heroicons-outline:document-text',
    url: 'example',
  },
  {
    id: 'landing-page',
    title: 'Landing Page',
    type: 'item',
    icon: 'chat',
    url: 'landing-page',
  },
  {
    id: 'party-page',
    title: 'Simple Data Grid',
    type: 'item',
    icon: 'addchart',
    url: 'partypage',
  },
];

export default navigationConfig;
