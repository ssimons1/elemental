import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';

/**
 * @description Table component
 * @example
 * 
 * <Table>
 * 	<colgroup>
 * 		<col width="50" />
 * 		<col width="" />
 * 		<col width="10%" />
 * 		<col width="10%" />
 * 	</colgroup>
 * 	<thead>
 * 		<tr>
 * 			<th>
 * 				<label>
 * 					<input type="checkbox" />
 * 				</label>
 * 			</th>
 * 			<th>User</th>
 * 			<th>Age</th>
 * 			<th>Gender Identity</th>
 * 		</tr>
 * 		{...}
 * 	</thead>
 * 	<tbody>
 * 		<tr>
 * 			<td>
 * 				<label>
 * 					<input type="checkbox" />
 * 				</label>
 * 			</td>
 * 			<td>
 * 				<a href="javascript:;">Hanna Villarreal</a>
 * 			</td>
 * 			<td>39</td>
 * 			<td>Female</td>
 * 		</tr>
 * 		{...}
 * 	</tbody>
 * </Table>
 */

export default createReactClass({
	displayName: 'Table',

	propTypes: {
		children: PropTypes.any,
		className: PropTypes.string,
	},

	render () {
		// classes
		var className = classNames(
			'Table',
			this.props.className
		);

		// render table element
		return (
			<table {...this.props} className={className} />
		);
	},
});
