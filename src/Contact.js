import React, {Component} from 'react'

class Contact extends Component {

    render() {
    
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
            <button className='contact-remove'>
              Remove
            </button>
            </li>
            
            
    }
}

export default Contact