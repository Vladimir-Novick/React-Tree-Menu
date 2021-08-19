import React from "react";
import "./menu.css";

export default class SearchInput extends React.Component {
	render() {
		return <input
		className="menu-default-search-input"
		onClick={this.props.startSearching} value={this.props.searchInput} onChange={this.props.setSearchInput}/>;
	}
}
