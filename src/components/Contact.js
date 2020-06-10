import React from 'react';
import moment from 'moment';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
     
  getFormatedDate = date => moment(date).isValid() ? moment(date).format('DD/MM/YYYY') : date
  
  render() {    
    return (
      <article className="contact" key={this.props.data.id} data-testid="contact">            
        <span className="contact__avatar" ><img src={this.props.data.avatar} alt="avatar"/></span>
        <span className="contact__data">{this.props.data.name}</span>
        <span className="contact__data">{this.props.data.phone}</span>
        <span className="contact__data">{this.props.data.country}</span>
        <span className="contact__data">{this.getFormatedDate(this.props.data.admissionDate)}</span>
        <span className="contact__data">{this.props.data.company}</span>
        <span className="contact__data">{this.props.data.department}</span>
			</article>
		);
	}
}

export default Contact;
