import React, { Component } from 'react';
import { withNavigate, withParams } from '../hocs';

class UpdatePostClass extends Component {
    constructor() {
        super();
        this.state = {
            post: {}
        }
    }
    getPostInfo = async () => {
        const url = `http://localhost:5000/api/posts/${this.props.params.postId}`

        const res = await fetch(url);
        const data = await res.json();

        if (data.status === 'ok') {
            this.setState({post:data.post})
        }
    };

    componentDidMount() {
        this.getPostInfo()
    }


    updateAPost = async (e) => {
        e.preventDefault();

        const title = e.target.title.value;
        const caption = e.target.caption.value;
        const imgUrl = e.target.imgUrl.value;
        const url = `http://localhost:5000/api/posts/update/${this.props.params.postId}`;
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.props.user.apitoken}`
            },
            body: JSON.stringify({
                title: title,
                caption: caption,
                img_url: imgUrl
            })
        };
        const res = await fetch(url, options);
        const data = await res.json();
        console.log(data)
        if (data.status === 'ok') {
            //redirect somewhere
            this.props.navigate(`/posts/${this.props.params.postId}`)
        }
    }


    render() {
        const post = this.state.post
        return (
            <div>
                <form onSubmit={this.updateAPost}>
                    <input name='title' defaultValue={post.title} />
                    <input name='caption' defaultValue={post.caption} />
                    <input name='imgUrl' defaultValue={post.img_url} />
                    <button type='submit'>Update</button>
                </form>
            </div>
        )
    }
};


export default withNavigate(withParams(UpdatePostClass));