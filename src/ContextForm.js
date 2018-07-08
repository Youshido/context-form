import FormField from './FormField/FormField';
import FormControl from './FormField/FormControl';
import FormFooter from './FormFooter/FormFooter';
import ContextFormInstanceContext from './Context/ContextFormInstanceContext';
import FormFieldArrayContext from './Context/FormFieldArrayContext';
import ContextFormProvider from './Theme/ContextFormProvider';

import AddGroupButton from './FormField/AddGroupButton';
import RemoveGroupButton from './FormField/RemoveGroupButton';
import FormFieldArray from './FormField/FormFieldArray';

import { humanizeName } from './utils';

export { default as Form } from './Form/Form';

const ContextForm = {
  FormField,
  FormFooter,
  FormControl,
  ContextFormProvider,
  AddGroupButton,
  RemoveGroupButton,
  FormFieldArray,
  ContextFormInstanceContext,
  FormFieldArrayContext,
  humanizeName,
};

export default ContextForm;
