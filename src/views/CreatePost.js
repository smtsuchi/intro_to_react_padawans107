import React from 'react'

export default function CreatePost({ user }) {

    const createAPost = async (e) => {
        e.preventDefault();

        const title = e.target.title.value;
        const caption = e.target.caption.value;
        const imgUrl = e.target.imgUrl.value;
        const url = `http://localhost:5000/api/posts/create`;
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.apitoken}`
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
        if (data.status === 'ok'){
            //redirect somewhere
        }

    };

  return (
    <div>

        <form onSubmit={createAPost}>
            <input name='title' />
            <input name='caption' />
            <input name='imgUrl' />
            <button type='submit'>Create</button>
        </form>
    </div>
  )
}
