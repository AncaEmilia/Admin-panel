import React from 'react';
import './App.css';
import UserList from './components/UserList';
import UserAddForm from './components/UserAddForm';
import PostList from './components/PostList';
import Scroll from './components/Scroll';

class App extends React.Component {
  constructor() {
    super();
    this.state={
      backgroundColor: 'rgba(225,255,255)',
      textColor: 'black',
      users: [],
      posts: [],
      displayUsers: true
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(userList => {
        const filteredUser = userList.filter((user) => user.id <= 5)
        this.setState({users: filteredUser})
      })

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(postList => {
        const filteredPosts = postList.filter((post) => post.id <= 5)
        this.setState({posts: filteredPosts})
      })
  }

  handleBackgroundChange(eventDetails) {
    const userColor = eventDetails.target.value;
    this.setState({backgroundColor: userColor});
  }

  handleTextChange(eventDetails) {
    const textColor = eventDetails.target.value;
    this.setState({textColor: textColor});
  }
 
  updateUsers(newUser) {
    this.setState((prevState) => {
      return{
        users: [
          ...prevState.users,
          newUser
        ]
      }
    });
  }

  clickUserButton() {
    this.setState({displayUsers: true})
    console.log(this.setState.displayUsers)
  }

  clickPostButton() {
    this.setState({displayUsers: false})
    console.log(this.setState.displayUsers)
  }

  render() {
    return (
      <div className="container" style={{backgroundColor: this.state.backgroundColor, color:this.state.textColor}}>
        <div className="add-user">
          <UserAddForm updateUsers={(user) => {this.updateUsers(user)}}/>
          <div className="change-color">
          <label htmlFor="change-user-color"> Change background color</label>
          <input 
            id="change-user-color" 
            type="color" 
            onChange={(eventDetails) => {this.handleBackgroundChange(eventDetails)}}
          />
          <label htmlFor="change-text-color"> Change background color</label>
          <input 
            id="change-text-color" 
            type="color" 
            onChange={(eventDetails) => {this.handleTextChange(eventDetails)}}
          />
          </div>
        </div>

        <Scroll>
          <div className="list">
            <h1>User list / Post list</h1>
            <div className="button">
              <button onClick={() => this.clickUserButton()}>Show Users</button>
              <button onClick={() => this.clickPostButton()}>Show Posts</button>
            </div>
            {
              this.state.displayUsers
                ? <UserList users={this.state.users}/>
                : <PostList posts={this.state.posts}/>
            }
          </div>
        </Scroll>
      </div>
    )
  }
}

export default App;
