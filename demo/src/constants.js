import AntdThemeExample from './examples/AntdThemeExample';
import BasicFormExample from './examples/BasicFormExample';
import FullFeaturedFormExample from './examples/FullFeaturedFormExample';
import OverviewFormExample from './examples/OverviewFormExample';

export const EXAMPLE = {
  basic: {
    component: BasicFormExample,
    title: 'Basic Form'
  },
  overview: {
    component: OverviewFormExample,
    title: 'Overview Form'
  },
  fullFeatured: {
    component: FullFeaturedFormExample,
    title: 'Full Featured Form'
  },
  ant: {
    component: AntdThemeExample,
    title: 'Ant.Design Theme'
  }
};
