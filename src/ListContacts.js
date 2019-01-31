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
    updateQuery = (queryParameter) => {
        this.setState(() => (
            {
                query : queryParameter.trim()
            }
        ))
    }
    clearQuery = () => {
        this.updateQuery('')
    }
    render() {
        const { query } = this.state
        const { contacts, onDeleteContact } = this.props
        const showContacts = query === '' ? contacts : contacts.filter((c) => (
            c.name.toLowerCase().includes(query.toLowerCase())
        ) )
        return <div className = 'list-contacts'>
            <div className = 'list-contacts-top'>
                <input 
                    className = 'search-contacts'
                    placeholder = 'Search Contacts'
                    type = 'text'
                    value = {query}
                    onChange = {(event) => this.updateQuery(event.target.value) }
                />
            </div>
            {showContacts.length !== contacts.length && (
                <div className = 'showing-contacts'>
                    <span>
                        Now showing {showContacts.length} of {contacts.length}. 
                     </span>    
                      <button 
                        onClick = {this.clearQuery}
                      >Show All</button>
                    
                </div>
            )}
            <ol className='contact-list'>
            {showContacts.map((contact) => (
           <Contact 
            contact = {contact}
            onDeleteContact = {onDeleteContact} 
           />
            ))
            }
        </ol>
        </div>
        
    }
}


export default ListContacts;