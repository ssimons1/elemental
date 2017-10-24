const React = require('react');
const classNames = require('classnames');
const PropTypes = require('prop-types');
const createReactClass = require('create-react-class');

/**
 * @description FormRow component
 * @example
 * 
 * <FormRow>
 * 	<FormField width="one-half" label="Credit Card Number" htmlFor="credit-card-number">
 * 		<FormInput pattern="[0-9]*" placeholder="Card Number" name="credit-card-number" />
 * 	</FormField>
 * 	<FormField width="one-quarter" label="Expiration" htmlFor="credit-card-expiration">
 * 		<FormInput placeholder="MM/YYYY" name="credit-card-expiration" />
 * 	</FormField>
 * 	<FormField width="one-quarter" label="Security Code (CCV)" htmlFor="credit-card-security">
 * 		<FormInput pattern="[0-9]*" placeholder="123" name="credit-card-security" />
 * 	</FormField>
 * </FormRow>
 * <FormRow>
 * 	<FormField width="one-half" label="First Name" htmlFor="first-name">
 * 		<FormInput placeholder="First Name" name="first-name" />
 * 	</FormField>
 * 	<FormField width="one-half" label="Last Name" htmlFor="last-name">
 * 		<FormInput placeholder="Last Name" name="last-name" />
 * 	</FormField>
 * </FormRow>
 * <FormField label="Billing Address" htmlFor="address-street1">
 * 	<FormInput placeholder="Address Line 1" name="address-street1" />
 * </FormField>
 * <FormField>
 * 	<FormInput placeholder="Address Line 2" name="address-street2" />
 * </FormField>
 * <FormRow>
 * 	<FormField width="two-thirds">
 * 		<FormInput placeholder="City" name="city" />
 * 	</FormField>
 * 	<FormField width="one-third">
 * 		<FormInput placeholder="State" name="state" />
 * 	</FormField>
 * 	<FormField width="one-third">
 * 		<FormInput width="one-third" placeholder="Post Code" name="city" />
 * 	</FormField>
 * 	<FormField width="two-thirds">
 * 		<FormSelect options={countryOptions} firstOption="Country" onChange={updateSelect} />
 * 	</FormField>
 * </FormRow>
 * 
 * Icons
 * 
 * ALIGNMENT
 * <FormRow>
 * 	<FormIconField width="one-half" iconPosition="left" iconColor="default" iconKey="star">
 * 		<FormInput placeholder="Left Aligned" name="icon-alignment-left" />
 * 	</FormIconField>
 * 	<FormIconField width="one-half" iconPosition="right" iconColor="default" iconKey="star">
 * 		<FormInput placeholder="Right Aligned" name="icon-alignment-right" />
 * 	</FormIconField>
 * </FormRow>
 * 
 * CONTEXT VARIANTS: COLOR
 * <FormRow>
 * 	<FormIconField width="one-fifth" iconPosition="left" iconKey="star" iconColor="default">
 * 		<FormInput placeholder="Default" />
 * 	</FormIconField>
 * 	<FormIconField width="one-fifth" iconPosition="left" iconKey="info" iconColor="primary">
 * 		<FormInput placeholder="Primary" />
 * 	</FormIconField>
 * 	<FormIconField width="one-fifth" iconPosition="left" iconKey="check" iconColor="success">
 * 		<FormInput placeholder="Success" />
 * 	</FormIconField>
 * 	<FormIconField width="one-fifth" iconPosition="left" iconKey="alert" iconColor="warning">
 * 		<FormInput placeholder="Warning" />
 * 	</FormIconField>
 * 	<FormIconField width="one-fifth" iconPosition="left" iconKey="stop" iconColor="danger">
 * 		<FormInput placeholder="Danger" />
 * 	</FormIconField>
 * </FormRow>
 * 
 * CONTEXT VARIANTS: FILL
 * <FormRow>
 * 	<FormIconField width="one-fifth" iconPosition="left" iconKey="star" iconFill="default">
 * 		<FormInput placeholder="Default" />
 * 	</FormIconField>
 * 	<FormIconField width="one-fifth" iconPosition="left" iconKey="info" iconFill="primary">
 * 		<FormInput placeholder="Primary" />
 * 	</FormIconField>
 * 	<FormIconField width="one-fifth" iconPosition="left" iconKey="check" iconFill="success">
 * 		<FormInput placeholder="Success" />
 * 	</FormIconField>
 * 	<FormIconField width="one-fifth" iconPosition="left" iconKey="alert" iconFill="warning">
 * 		<FormInput placeholder="Warning" />
 * 	</FormIconField>
 * 	<FormIconField width="one-fifth" iconPosition="left" iconKey="stop" iconFill="danger">
 * 		<FormInput placeholder="Danger" />
 * 	</FormIconField>
 * </FormRow>
 */

export default createReactClass({
	displayName: 'FormRow',
	propTypes: {
		className: PropTypes.string,
	},
	render () {
		const className = classNames('FormRow', this.props.className);

		return (
			<div className={className}>
				{this.props.children}
			</div>
		);
	},
});
