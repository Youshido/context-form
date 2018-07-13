import Form from './Form/Form';
import Field from './FormField/Field';
import FieldInput from './FormField/FieldInput';
import FieldArray from './FormField/FieldArray';
import FormFooter from './FormFooter/FormFooter';
import ContextFormInstanceContext from './Context/ContextFormInstanceContext';
import FieldArrayContext from './Context/FieldArrayContext';
import ContextFormProvider from './Context/ContextFormProvider';

import FieldArrayAdd from './FormField/FieldArrayAdd';
import FieldArrayRemove from './FormField/FieldArrayRemove';

import { humanizeName } from './utils';

FieldArray.Add    = FieldArrayAdd;
FieldArray.Remove = FieldArrayRemove;

Field.Input = FieldInput;

Form.Field      = Field;
Form.FieldArray = FieldArray;

export default Form;

export {
  Form,
  Field,
  FieldInput,
  FieldArray,
  FormFooter,
  ContextFormProvider,
  FieldArrayAdd,
  FieldArrayRemove,
  ContextFormInstanceContext,
  FieldArrayContext,
  humanizeName,
};
