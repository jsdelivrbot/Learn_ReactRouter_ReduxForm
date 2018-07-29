import React, { Component } from 'react';
import { fetchPost } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class PostsShow extends Component {
    componentDidMount() {
        if(!this.props.post) {
            const { id } = this.props.match.params;
            this.props.fetchPost(id);
        }
    }

    render() {
        const { post } = this.props;
        if(!post) return (<p>Loading...</p>);
        return (
            <div>
                <Link to="/">Back to index</Link>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

function mapStatetoProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStatetoProps, { fetchPost })(PostsShow);