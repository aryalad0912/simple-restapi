import React, { Component } from "react";
import axios from "axios";
class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            homeState: ""
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((data) => {
            this.setState({
                homeState: data
            }, () => {
                console.log(this.state.homeState)
            })
        }). catch((err) => {
            console.log(err);
        })
    }
    postData() {
        const data = {
            
                "userId": 1,
                "id": 1,
                "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
              
        }
        axios.post('https://jsonplaceholder.typicode.com/posts',data)
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);  
        })
    }
render() {
    return (
        <div>
            <h1>Home Page</h1>
            <p>Welcome here!</p>
            <button onClick={this.postData} >Submit</button>
            <button onClick={this.updateData} >Update</button>
    <button onClick={this.deleteData} >Delete</button>
        </div>
    )
    }
}
export default Home
