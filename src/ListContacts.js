import React, {Component} from 'react'
import Contact from './Contact';
import PropTypes from 'prop-types';

class ListContacts extends Component {
    
    render() {
        return <ol className='contact-list'>
            {this.props.contacts.map((contact) => (
           <Contact 
            contact = {contact}
            onDeleteContact = {this.props.onDeleteContact} 
           />
            ))
            }
        </ol>
    }
}

ListContacts.propTypes = {
    contacts : PropTypes.array.isRequired,
    onDeleteContact : PropTypes.func.isRequired
}
export default ListContacts;