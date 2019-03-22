import BasicFormExample from './examples/BasicFormExample';
import FieldArrayDynamicExample from './examples/FieldArrayDynamicExample';
import FieldArrayExample from './examples/FieldArrayExample';
import FormValidationExample from './examples/FormValidationExample';
import FullFeaturedFormExample from './examples/FullFeaturedFormExample';
import MountableRequired from './examples/MountableRequiredFormExample';
import OverviewFormExample from './examples/OverviewFormExample';
import FieldValidationExample from './examples/FieldValidationExample';
import RemoteSubmitExample from './examples/RemoteSubmitExample';
import MaterialUIExample from './examples/MaterialUIExample';

export const EXAMPLE = {
  basic : {
    component : BasicFormExample,
    title     : 'Basic Form'
  },
  overview : {
    component : OverviewFormExample,
    title     : 'Overview Form'
  },
  fieldArray : {
    component : FieldArrayExample,
    title     : 'Field Array',
  },
  fieldArrayDynamic : {
    component : FieldArrayDynamicExample,
    title     : 'Field Array Dynamic',
  },
  fieldValidation : {
    component : FieldValidationExample,
    title     : 'Field Validation'
  },
  formValidation : {
    component : FormValidationExample,
    title     : 'Form Level Validation'
  },
  fullFeatured : {
    component : FullFeaturedFormExample,
    title     : 'Full Featured Form'
  },
  remoteSubmit : {
    component : RemoteSubmitExample,
    title     : 'Remote Submit Example'
  },
  mountableRequired : {
    component : MountableRequired,
    title     : 'OnMount Required'
  },
  materialUI : {
    component : MaterialUIExample,
    title     : 'Material UI'
  }
};
