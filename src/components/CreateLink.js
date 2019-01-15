import React, { Component } from 'react';

class CreateLink extends Component {
  state = {
    description: '',
    url: '',
  }

  render() {
    const { description, url } = this.state
    return (
      <>
        <div className='flex flex-column mt3'>
          <input 
            className='mb2'
            value={description}
            onChange={e => this.setState({ description: e.target.value })}
            type='text'
            placeholder='Enter a description for the link'
          />
          <input 
            className='mb2'
            value={url}
            onChange={e => this.setState({ url: e.target.value })}
            type='text'
            placeholder='Enter url for the linke'
          />
        </div>
        <button onClick={`waiting to implement`}>Submit</button>
      </>
    )
  }
}

export default CreateLink;