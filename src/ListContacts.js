import React, {Component} from 'react'
import Contact from './Contact';
import PropTypes from 'prop-types';

class ListContacts extends Component {
    static propTypes = {
        contacts : PropTypes.array.isRequired,
        onDeleteContact : PropTypes.func.isRequired
    }
    state = {
        query : ''
    }
    render() {
        return <div className = 'list-contacts'>
            <div className = 'list-contacts-top'>
                <input 
                    className = 'search-contacts'
                    placeholder = 'Search Contacts'
                    type = 'text'
                    value = {this.state.query}
                />
            </div>

            <ol className='contact-list'>
            {this.props.contacts.map((contact) => (
           <Contact 
            contact = {contact}
            onDeleteContact = {this.props.onDeleteContact} 
           />
            ))
            }
        </ol>
        </div>
        
    }
}


export default ListContacts;