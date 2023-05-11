import React, { Component } from 'react'
import {Button,Dropdown} from 'react-bootstrap';

class React_bootstrap extends Component {
  render() {
    return (
      <div>

        <h1>Salomm</h1>

        <Button variant="primary">Primary</Button>{' '}
        <Button variant="secondary">Secondary</Button>{' '}
        <Button variant="success">Success</Button>{' '}
        <Button variant="warning">Warning</Button>{' '}
        <Button variant="danger">Danger</Button>{' '}
        <Button variant="info">Info</Button>{' '}
        <Button variant="light">Light</Button>{' '}
        <Button variant="dark">Dark</Button>
        <Button variant="link">Link</Button>


        <Dropdown className='mt-5'>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

      </div>

      
    )
  }
}

export default React_bootstrap;
