const React = require('react');
const blacklist = require('blacklist');
const classNames = require('classnames');
const PropTypes = require('prop-types');
const createReactClass = require('create-react-class');

/**
 * @example
 * 
 * <FormField label="Input" htmlFor="supported-controls-input">
 * 	<FormInput placeholder="Input" name="supported-controls-input" />
 * </FormField>
 * <FormField label="Large Input" htmlFor="supported-controls-input-lg">
 * 	<FormInput placeholder="Large" name="supported-controls-input-lg" size="lg" />
 * </FormField>
 * <FormField label="Small Input" htmlFor="supported-controls-input-sm">
 * 	<FormInput placeholder="Small" name="supported-controls-input-sm" size="sm" />
 * </FormField>
 * 
 * <FormField label="Checkboxes">
 * 	<Checkbox label="Check me out" />
 * 	<Checkbox label="I'm disabled" disabled />
 * </FormField>
 * <FormField label="Radios">
 * 	<Radio name="default_radios" label="Pick me" />
 * 	<Radio name="default_radios" label="Pick me" />
 * </FormField>
 * <FormField label="Inline Checkboxes">
 * 	<div className="inline-controls">
 * 		<Checkbox label="Check me out" />
 * 		<Checkbox label="I'm disabled" disabled />
 * 	</div>
 * </FormField>
 * <FormField label="Inline Radios">
 * 	<div className="inline-controls">
 * 		<Radio name="inline_radios" label="Pick me" />
 * 		<Radio name="inline_radios" label="Pick me" />
 * 	</div>
 * </FormField>
 * 
 * <FormField label="Input" htmlFor="supported-controls-input-disabled">
 * 	<FormInput placeholder="Input" name="supported-controls-input-disabled" disabled />
 * </FormField>
 * <FormField label="Textarea" htmlFor="supported-controls-textarea">
 * 	<FormInput placeholder="Textarea" name="supported-controls-textarea-disabled" disabled multiline />
 * </FormField>
 * <FormSelect label="Select" options={controlOptions} onChange={updateSelect} htmlFor="supported-conrols-select-disabled" firstOption="Select" disabled />
 * <FormField label="Checkboxes">
 * 	<Checkbox label="Check me out" disabled />
 * </FormField>
 * <FormField label="Radios">
 * 	<Radio name="default_radios" label="Pick me" disabled />
 * </FormField>
 * 
 * <FormField label="Input with note">
 * 	<FormInput />
 * 	<FormNote>A note to help the user understand its associated field; may extend beyond one line.</FormNote>
 * </FormField>
 */

export default createReactClass({
	displayName: 'FormField',
	propTypes: {
		className: PropTypes.string,
		htmlFor: PropTypes.string,
		id: PropTypes.string,
		label: PropTypes.string,
		offsetAbsentLabel: PropTypes.bool,
		width: PropTypes.oneOf([
			'one-half',
			'two-quarters',
			'three-sixths',
			'one-quarter',
			'three-quarters',
			'one-third',
			'two-sixths',
			'two-thirds',
			'four-sixths',
			'one-fifth',
			'two-fifths',
			'three-fifths',
			'four-fifths',
			'one-sixth',
			'five-sixths',
		]),
	},
	render () {
		// classes
		var componentClass = classNames('FormField', {
			'offset-absent-label': this.props.offsetAbsentLabel,
		}, this.props.width, this.props.className);

		// props
		var props = blacklist(this.props, 'className', 'label', 'offsetAbsentLabel', 'width');

		// elements
		var componentLabel = this.props.label ? (
			<label className="FormLabel" htmlFor={this.props.id || this.props.htmlFor}>
				{this.props.label}
			</label>
		) : null;

		return (
			<div className={componentClass} {...props}>
				{componentLabel}
				{this.props.children}
			</div>
		);
	},
});
