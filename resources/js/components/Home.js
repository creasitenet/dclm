import React from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

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

        function truncate(str) {
            return str.length > 150 ? str.substring(0, 150) + "..." : str;
        }

        return (
            <>
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {Object.values(posts).map((value, index) => {
                            return (
                                <div className="col" key={index}>
                                    <div className="card shadow-sm">
                                        <div className="card-header">
                                            <h3 className="card-title">{value.title}</h3>
                                        </div>
                                        <img src={value.media} className="img-responsive" alt={value.title} />
                                        <div className="card-body">
                                            {truncate(value.description)}
                                            <br />
                                            <Link to={'/item'}>Lire plus</Link>
                                        </div>
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
