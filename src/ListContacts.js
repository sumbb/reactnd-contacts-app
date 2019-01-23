import React, {Component} from 'react'
import Contact from './Contact';

class ListContacts extends Component {
    
    render() {
        console.log('props', this.props);
        return <ol className='contact-list'>
            {this.props.contacts.map((contact) => (
           <Contact contact={contact}/>
            ))
            }
        </ol>
    }
}

export default ListContacts;