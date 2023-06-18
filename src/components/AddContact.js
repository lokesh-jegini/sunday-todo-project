import React, { Component } from 'react'


export class AddContact extends Component {
  static propTypes = {

  }

  render() {
    return (
        <div className="ui main">
            <h2>Add Contact</h2>
            <form className="ui form">
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name" />
                    <input type="email" name="email" placeholder='email' />
                    <button className='ui button blue'>Add</button>
                </div>
            </form>
        </div>
    )
  }
}

export default AddContact
