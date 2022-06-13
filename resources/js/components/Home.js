import React from 'react';
import axios from "axios";
import ReactDOM from 'react-dom';

class Home extends React.Component {

    constructor() {
        super()
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get('/api/lemonde/')
            .then(res => {
                this.setState({ posts : res.data }, () => {
                    // console.log(this.state.posts);
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {

        const posts = this.state.posts;

        return (
            <>
                <div className="container">
                    <div className="row justify-content-center">
                        {Object.values(posts).map((value, index) => {
                            return (
                                <div className="col-md-8" key={index}>
                                    <div className="card">
                                        <div className="card-header">{value.title}</div>

                                        <div className="card-body">{ value.description }</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </>
        );
    }

}

export default Home;

if (document.getElementById('home')) {
    ReactDOM.render(<Home />, document.getElementById('home'));
}
