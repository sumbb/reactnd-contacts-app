import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {

    render() {
        console.log('props', this.props);
        const contact = this.props.contact
        return  <li key={contact.id} className='contact-list-item'>
                <div
                className='contact-avatar'
                style={{
                    backgroundImage: `url(${contact.avatarURL})`
                }}
                ></div>
                <div className='contact-details'>
              <p>{contact.name}</p>
              <p>{`@${contact.handle}`}</p>
            </div>
            <button 
            className='contact-remove'
            onClick={() => this.props.onDeleteContact(contact)}>
              Remove
            </button>
            </li>
            
            
    }
}

Contact.propTypes = {
    contact : PropTypes.object.isRequired,
    onDeleteContact : PropTypes.func.isRequired
}

export default Contact