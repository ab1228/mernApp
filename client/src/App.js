import React from 'react';
import axios from "axios";


class App extends React.Component {

  state = {
    title: '',
    body: '',
    post: []
  };




  getNotes = () => {
    axios.get('/api')
      .then((response) => {
        const data = response.data
        this.setState({ post: data });
        console.log('data is received')
      })
      .catch(() => {
        alert('could not retrieve data')
      });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;


    this.setState({
      [name]: value
    })

  };

  submit = (event) => {
    event.preventDefault();
    const payload = {
      title: this.state.title,
      body: this.state.body
    };
    console.log(payload);

    axios({
      url: '/api/save',
      method: 'POST',
      data: payload
    })
      .then(() => {
        console.log('data is sent')
        this.clearValues();
        this.getNotes();

      })
      .catch(() => {
        console.log('data has not been sent')

      });

  };
  clearValues = () => {
    this.setState({
      title: '',
      body: ''
    })
  };




  render() {

    console.log(this.state);
    return (

      <div>

        <h1>Welcome to my mern app</h1>
        <form onSubmit={this.submit}>
          <div className="from-input">
            <input type="text"
              name="title"
              placeholder="Title"
              value={this.state.title}
              onChange={this.handleChange} />
          </div>
          <div className="from-input">
            <textarea name="body" id="" cols="30" rows="10" value={this.state.body} onChange={this.handleChange}></textarea>
          </div>




          <button className="badge badge-pill badge-warning">Submit</button>

        </form>



      </div>
    );
  }
}


export default App;