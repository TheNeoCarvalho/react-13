import React from "react";
import Contact from "./Contact";

class Contacts extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

	render() {	
		const data = this.props.data;
		return (
			<div className="container" data-testid="contacts">
				<section className="contacts">
					<Contact data= {{
						id: 0,
						avatar: '',
						name: 'Nome',
						phone: 'Telefone',
						country: 'País',
						admissionDate: 'Admissão',
						company: 'Empresa',
						department: 'Departamento',
					}} />	
					{data?.map(item => (
						<Contact data={item} key={item.id}/>						
					))}					
				</section>
			</div>
		);
	}
}

export default Contacts;