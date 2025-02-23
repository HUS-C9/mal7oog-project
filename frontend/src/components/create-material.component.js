import React, { Component } from 'react';
import axios from 'axios';



export default class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.onChangeMaterial = this.onChangeMaterial.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      material: '',
      description: '',
      duration: ''
    }
  }


  onChangeMaterial(e) {
    this.setState({
      material: e.target.value
    })
  }
  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }
  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    })
  }

  handleClick() {
    window.location = "/calender";
  }
  onSubmit(e) {
    e.preventDefault();
    //declare an obj that holds all values after change
    const task = {
      material: this.state.material,
      description: this.state.description,
      duration: this.state.duration,
    }
    console.log(task);
    axios.post('http://localhost:1300/api/materials/add', task) //create?
      .then(res => console.log(res.data));

    this.setState({
      material: '',
      description: '',
      duration: ''
    });
  }

  render() {
    return (
      <div>
        <h3 className="font-weight-bold deep-purple-text" style={{ fontFamily: "Courier" }}>Create Your Task</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label className="deep-purple-text" style={{ fontFamily: "Courier" }}>Material: </label>
            <input style={{ fontFamily: "Courier" }} placeholder="choose subject"
              type="text"
              required
              className="form-control"
              value={this.state.material}
              onChange={this.onChangeMaterial}
            />
          </div>
          <div className="form-group" width="100">
          <label className="deep-purple-text" style={{fontFamily:"Courier"}}>Description: </label>
          <input style={{fontFamily:"Courier"}} placeholder="your plan to this material"
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
          <label className="deep-purple-text" style={{fontFamily:"Courier"}}>Duration (in minutes): </label>
          <input style={{fontFamily:"Courier"}} placeholder="choose your time wisely"
              type="text"
              required
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
            />
          </div>
          <div className="form-group"> <pre>
          <input type="submit" value="Create" className="btn btn-primary btn btn-outline-#4a148c purple darken-4" />     
           <button onClick={this.handleClick.bind(this)} className="btn btn-primary">show your calender</button></pre>
          </div>
        </form>
      </div>
    )
  }
}





