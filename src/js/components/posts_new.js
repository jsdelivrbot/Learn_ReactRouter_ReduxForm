import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
    renderField(field) {
        const { meta: { touched, error} } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control" type="text" {...field.input}/>
                <div className="text-help">{touched ? error : ''}</div>
            </div>
        );
    }

    onSubmit(values) {
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
                    <Field label="Title" name="title" component={this.renderField}/>
                    <Field label="Categories" name="categories" component={this.renderField}/>
                    <Field label="Content" name="content" component={this.renderField}/>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link className="btn btn-danger" to="/">Cancel</Link>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    if(!values.title || values.title.length < 3) {  errors.title = "Enter a title with at least 3 characters!"; }
    if(!values.categories) {  errors.categories = "Enter some categories!"; }
    if(!values.content) { errors.content = "Enter some content!"; }

    return errors; // If object is empty, Redux says "This form is fine for submit"
}

export default reduxForm({ validate, form: 'PostsNewForm' })(connect(null, { createPost })(PostsNew));