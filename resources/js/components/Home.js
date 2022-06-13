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
                    console.log(this.state.posts);
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header">Home Component</div>

                                <div className="card-body">I'm home component!</div>
                            </div>
                        </div>
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
