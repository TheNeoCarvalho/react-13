import React from 'react';
import './App.scss';

import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';

class App extends React.Component {

  constructor(props) {
		super(props);
	 
		this.state = {
      items: [],	
      isSelected: '',
			textFilter: ''	
		};
	}
	 
	componentDidMount() {
		fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts')
		  .then(response => response.json())
		  .then(items => this.setState({ items }));
  }

  filter = (buttonName) => {
    const textFilter = this.state.textFilter;
    let itemsFiltered = [];
  
    if(textFilter === ''){
      itemsFiltered = this.state.items.sort((a,b) => a[buttonName] > b[buttonName]);
    } else {
      itemsFiltered = this.state.items.filter(item => item[buttonName].toLowerCase().startsWith(textFilter.toLowerCase()))
                        .sort((a,b) => a[buttonName] > b[buttonName]);
    }
    
    this.setState({
			...this.state,
			items: itemsFiltered
    })
  }

  handleClick = buttonName => {
    this.filter(buttonName);
		this.setState({
			...this.state,
			isSelected: this.state.isSelected !== buttonName ? buttonName : ''
		})
	}
	
	handleChange = e => {
		this.setState({
			...this.state,
			textFilter: e.target.value
    }, () => this.filter('name'))   
  }
  
  render() {
    const itemsFiltered = this.state.items
    return (
      <React.Fragment>
        
        <Topbar/>

        <Filters isSelected={this.state.isSelected} handleClick={this.handleClick} handleChange={this.handleChange}/>

        <Contacts data={itemsFiltered} />

      </React.Fragment>
    )
  }
}

export default App;