import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * 
 * @example
 * 
 * Basic
 * <Form>
 * 	<FormField label="Email address" htmlFor="basic-form-input-email">
 * 		<FormInput autoFocus type="email" placeholder="Enter email" name="basic-form-input-email" />
 * 	</FormField>
 * 	<FormField label="Password" htmlFor="basic-form-input-password">
 * 		<FormInput type="password" placeholder="Password" name="basic-form-input-password" />
 * 	</FormField>
 * 	<FormField>
 * 		<Checkbox label="Check it" />
 * 	</FormField>
 * 	<Button submit>Submit</Button>
 * </Form>
 * 
 * Horizontal
 * <Form type="horizontal">
 * 	<FormField label="Email address" htmlFor="horizontal-form-input-email">
 * 		<FormInput type="email" placeholder="Enter email" name="horizontal-form-input-email" />
 * 	</FormField>
 * 	<FormField label="Password" htmlFor="horizontal-form-input-password">
 * 		<FormInput type="password" placeholder="Password" name="horizontal-form-input-password" />
 * 	</FormField>
 * 	<FormField offsetAbsentLabel>
 * 		<Checkbox label="Check it" />
 * 	</FormField>
 * 	<FormField offsetAbsentLabel>
 * 		<Button submit>Submit</Button>
 * 	</FormField>
 * </Form>
 * 
 * Inline
 * <Form type="inline">
 * 	<FormField label="Email address" htmlFor="inline-form-input-email">
 * 		<FormInput type="email" placeholder="Enter email" name="inline-form-input-email" />
 * 	</FormField>
 * 	<FormField label="Password" htmlFor="inline-form-input-password">
 * 		<FormInput type="password" placeholder="Password" name="inline-form-input-password" />
 * 	</FormField>
 * 	<FormField>
 * 		<Checkbox label="Check it" />
 * 	</FormField>
 * 	<FormField>
 * 		<Button submit>Submit</Button>
 * 	</FormField>
 * </Form>
 * 
 */

function Form ({ className, component, type, ...props }) {
	const Component = component;
	props.className = classnames('Form', ('Form--' + type), className);

	return <Component {...props} />;
};

Form.propTypes = {
	component: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.func,
	]),
	type: PropTypes.oneOf(['basic', 'horizontal', 'inline']),
};
Form.defaultProps = {
	component: 'form',
	type: 'basic',
};

export default Form;
