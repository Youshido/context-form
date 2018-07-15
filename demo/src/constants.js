import BasicFormExample from './examples/BasicFormExample';
import FormValidationExample from './examples/FormValidationExample';
import FullFeaturedFormExample from './examples/FullFeaturedFormExample';
import OverviewFormExample from './examples/OverviewFormExample';
import FieldValidationExample from './examples/FieldValidationExample';

export const EXAMPLE = {
  basic: {
    component: BasicFormExample,
    title: 'Basic Form'
  },
  overview: {
    component: OverviewFormExample,
    title: 'Overview Form'
  },
  fieldValidation: {
    component: FieldValidationExample,
    title: 'Field Validation'
  },
  formValidation: {
    component: FormValidationExample,
    title: 'Form Level Validation'
  },
  fullFeatured: {
    component: FullFeaturedFormExample,
    title: 'Full Featured Form'
  },
};
