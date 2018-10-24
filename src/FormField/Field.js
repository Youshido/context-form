import PropTypes from "prop-types";
import React, { Component } from "react";
import { withContextFormInstanceConsumer } from "../Context/ContextFormInstanceContext";
import { withFormFieldArrayConsumer } from "../Context/FieldArrayContext";
import { humanizeName } from "../utils";
import FieldInput from "./FieldInput";

class Field extends Component {
  componentDidMount() {
    if (this.props.form) {
      if (this.props.required) {
        this.props.form.setRequired(this.props.name, true);
      }
      if (this.props.rules) {
        this.registerRules(this.props.rules);
      }
    }
  }

  componentDidUpdate(prevProps) {
    // const currentRules = JSON.stringify(this.props.rules || {});
    // const oldRules     = JSON.stringify(prevProps.rules || {});
    //
    // if (currentRules !== oldRules) {
    //   this.registerRules(this.props.rules);
    // }

    this.props.form.setRequired(this.props.name, this.props.required);
  }

  registerRules = (rules) => {
    // @TODO : compare rules, do not just push rules to existing array
    rules.forEach(rule => this.props.form.addValidationRule(this.props.name, rule));
  };

  onChange = e => {
    const value                      = e?.target?.value !== undefined ? e?.target.value : e;
    const { name, fieldArray, form } = this.props;
    if (fieldArray) {
      fieldArray.setValue(name, value, fieldArray.index);
    } else if (form) {
      form.setValue(name, value);
      this.props.onChange && this.props.onChange(value);
    }
  };

  render() {
    const { name, label, form, fieldArray }                         = this.props;
    const { Field }                                                 = form.getTheme();
    const { Container, Label, InputContainer, Description, Errors } = Field;

    let errors    = null;
    let value     = this.props.value;
    let fieldName = form?.getName() + "-" + name;
    if (form) {
      if (form.errors && form.errors[name]) {
        errors = Array.isArray(form.errors[name]) ? form.errors[name] : [form.errors[name]];
      }
      if (fieldArray) {
        value = fieldArray.getValue(name, fieldArray.index);
      } else {
        value = form.getValue(name);
      }
    }
    const labelText  = label || humanizeName(name);
    const stateProps = { fieldName, errors, layout : form?.layout, isHorizontal : form?.layout === "horizontal" };
    return (
      <Container {...this.props} {...stateProps}>
        {label !== false &&
        <Label
          {...stateProps}
          required={this.props.required}>
          {label || humanizeName(name)}
        </Label>
        }
        <InputContainer {...stateProps}>
          <FieldInput
            id={fieldName}
            {...this.props}
            label={label !== false ? labelText : undefined}
            name={name}
            errors={errors}
            value={value}
          />
          <Description {...stateProps}>{this.props.description}</Description>
          <Errors {...stateProps}/>
        </InputContainer>
      </Container>
    );
  }
}

Field.propTypes    = {
  name        : PropTypes.string.isRequired,
  type        : PropTypes.string.isRequired,
  required    : PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.func]),
  placeholder : PropTypes.string,
  description : PropTypes.any,
  component   : PropTypes.any,
  onChange    : PropTypes.func,
  fieldArray  : PropTypes.any
};
Field.defaultProps = {
  type     : "text",
  required : false
};

Field = withContextFormInstanceConsumer(Field);
Field = withFormFieldArrayConsumer(Field);

export default Field;
