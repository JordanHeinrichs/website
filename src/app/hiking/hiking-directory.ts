
import { Blog } from '../blog-list/blog';
import { ColumbiaIcefield2018Component } from './hiking-pages/columbia-icefield2018/columbia-icefield2018.component';
import { PeytoHutComponent } from './hiking-pages/peyto-hut/peyto-hut.component';
import { RockwallComponent } from './hiking-pages/rockwall/rockwall.component';

export const PEYTO: Blog = {
  title: 'Peyto Hut',
  image: 'assets/my-website.png',
  description: 'Spending a long weekend on the Wapta and summiting Mt. Thompson.',
  url: 'peyto-hut',
  component: PeytoHutComponent,
};

export const ROCKWALL: Blog = {
  title: 'Rockwall Backpack',
  image: 'assets/my-website.png',
  description: 'Three day hiking trip along the Rockwall trip in the rain.',
  url: 'rockwall',
  component: RockwallComponent,
};

export const COLUMBIA_ICEFIELD: Blog = {
  title: 'Boston Marathon',
  image: 'assets/my-website.png',
  description: 'My first ski mountaineering trip, climbing Kitchener and Snow Dome.',
  url: 'columbia-icefield',
  component: ColumbiaIcefield2018Component,
};

export const HIKING: Blog[] = [PEYTO, ROCKWALL, COLUMBIA_ICEFIELD];
