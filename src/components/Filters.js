import React from 'react';
import FilterButton from './FilterButton';

class Filters extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
	}
	
	render() {
		return (
			<div className="container" data-testid="filters">
				<section className="filters">
					<div className="filters__search">
					<input type="text" className="filters__search__input" placeholder="Pesquisar" 
						value={this.props.textFilter} onChange={e => this.props.handleChange(e)}/>

					<button className="filters__search__icon">
						<i className="fa fa-search"/>
					</button>
					</div>

					<FilterButton item="Nome" name="name" nameSelected={this.props.isSelected} handleClick = {this.props.handleClick}/>
					<FilterButton item="País" name="country" nameSelected={this.props.isSelected} handleClick = {this.props.handleClick}/>
					<FilterButton item="Empresa" name="company" nameSelected={this.props.isSelected} handleClick = {this.props.handleClick}/>
					<FilterButton item="Departamento" name="department" nameSelected={this.props.isSelected} handleClick = {this.props.handleClick}/>
					<FilterButton item="Data de admissão" name="admissionDate" nameSelected={this.props.isSelected} handleClick = {this.props.handleClick}/>

				</section>
			</div>
		);
	}
}

export default Filters;