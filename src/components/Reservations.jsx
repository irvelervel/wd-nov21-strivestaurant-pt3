// this component is going to retrieve and list the existing reservations
// they are retrievable from 'https://striveschool-api.herokuapp.com/api/reservation'

// 1) we're going to create a state variable for the reservations that are going to come from the endpoint
// 2) then we're going to do the fetch() on the endpoint
// 3) we're going to save the result of the fetch() in the state variable

import { Component } from 'react'
import { ListGroup } from 'react-bootstrap'

class Reservations extends Component {
  state = {
    reservations: [],
  }

  componentDidMount = () => {
    // what is this?
    // componentDidMount is another lifecycle method
    // just like render, it gets automatically called by React
    // - when? AFTER the INITIAL render()
    // - how many times? JUST ONCE!
    // well, this looks PERFECT for an async operation like a fetch!!
    console.log("I'm the componentDidMount method!")
    // this looks a little bit like window.onload
    // so we're doing our fetch() precisely here :)
    this.getReservations()
  }

  getReservations = async () => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/reservation'
      )
      if (response.ok) {
        // we know everything went well with our request
        console.log('response is', response) // we need to call .json() on it
        // let's grab the body and make it usable in JS
        let data = await response.json()
        console.log('data is', data)
        this.setState({
          reservations: data,
        })
      } else {
        alert('aww snap, an error happened')
      }
    } catch (error) {
      console.log(error)
    }
  }

  render = () => {
    // render() is a LIFECYCLE METHOD
    // it's the first one a beginner comes in contact with
    console.log("I'm the render method!")
    return (
      <>
        <h3>EXISTING RESERVATIONS</h3>
        <ListGroup>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </>
    )
  }
}

export default Reservations
