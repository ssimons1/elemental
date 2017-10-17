const React = require('react');
const classNames = require('classnames');
const PropTypes = require('prop-types');
const createReactClass = require('create-react-class');

const Page = createReactClass({
	displayName: 'Page',
	propTypes: {
		children: PropTypes.node,
		label: PropTypes.string,
		onSelect: PropTypes.func,
		page: PropTypes.number,
		selected: PropTypes.bool,
	},
	onSelect () {
		this.props.onSelect(this.props.page);
	},
	render () {
		const { children, selected } = this.props;
		const className = classNames('Pagination__list__item', {
			'is-selected': selected,
		});
		return (
			<button className={className} onClick={this.onSelect}>
				{children}
			</button>
		);
	},
});

function range (props) {
	const { currentPage, pageSize, total } = props;
	if (!total) {
		return {};
	} else {
		const start = (pageSize * (currentPage - 1)) + 1;
		const end = Math.min(start + pageSize - 1, total);
		return { start, end };
	}
}

/**
 * @example
 * 
 * <Pagination
 *
 * 	currentPage={this.state.currentPage}
 * 	onPageSelect={this.handlePageSelect}
 * 	pageSize={this.state.pageSize}
 * 	plural={this.state.plural}
 * 	singular={this.state.singular}
 * 	total={this.state.total}
 * 	limit={this.state.limit}
 * 	/>
 */

export default createReactClass({
	displayName: 'Pagination',
	propTypes: {
		className: PropTypes.string,
		currentPage: PropTypes.number.isRequired,
		label: PropTypes.func,
		limit: PropTypes.number,
		onPageSelect: PropTypes.func,
		pageSize: PropTypes.number.isRequired,
		plural: PropTypes.string,
		singular: PropTypes.string,
		style: PropTypes.object,
		total: PropTypes.number.isRequired,
	},
	renderCount () {
		let count = '';
		let { currentPage, pageSize, plural, singular, total, label } = this.props;
		if (typeof label === 'function') {
			const params = Object.assign(range(this.props), { currentPage, pageSize, total });
			count = label(params);
		} else {
			if (!total) {
				count = 'No ' + (plural || 'records');
			} else if (total > pageSize) {
				const { start, end } = range(this.props);
				count = `Showing ${start} to ${end} of ${total}`;
			} else {
				count = 'Showing ' + total;
				if (total > 1 && plural) {
					count += ' ' + plural;
				} else if (total === 1 && singular) {
					count += ' ' + singular;
				}
			}
		}
		return (
			<div className="Pagination__count">{count}</div>
		);
	},
	onPageSelect (page) {
		if (this.props.onPageSelect) {
			this.props.onPageSelect(page);
		}
	},
	renderPages () {
		if (this.props.total <= this.props.pageSize) return null;

		let pages = [];
		let { currentPage, pageSize, total, limit } = this.props;
		let totalPages = Math.ceil(total / pageSize);
		let minPage = 1;
		let maxPage = totalPages;

		if (limit && (limit < totalPages)) {
			let rightLimit = Math.floor(limit / 2);
			let leftLimit = rightLimit + (limit % 2) - 1;
			minPage = currentPage - leftLimit;
			maxPage = currentPage + rightLimit;

			if (minPage < 1) {
				maxPage = limit;
				minPage = 1;
			}
			if (maxPage > totalPages) {
				minPage = totalPages - limit + 1;
				maxPage = totalPages;
			}
		}
		if (minPage > 1) {
			pages.push(<Page key="page_start" onSelect={this.onPageSelect} page={1}>...</Page>);
		}
		for (let page = minPage; page <= maxPage; page++) {
			let selected = (page === currentPage);
			/* eslint-disable no-loop-func */
			pages.push(<Page key={'page_' + page} selected={selected} onSelect={this.onPageSelect} page={page}>{page}</Page>);
			/* eslint-enable */
		}
		if (maxPage < totalPages) {
			pages.push(<Page key="page_end" onSelect={this.onPageSelect} page={totalPages}>...</Page>);
		}
		return (
			<div className="Pagination__list">
				{pages}
			</div>
		);
	},
	render () {
		var className = classNames('Pagination', this.props.className);
		return (
			<div className={className} style={this.props.style}>
				{this.renderCount()}
				{this.renderPages()}
			</div>
		);
	},
});
