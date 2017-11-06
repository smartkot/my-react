import React from 'react';

export default function Comment({comment}) {
    return (
        <div key = {comment.id}>
            <h4>{comment.user}</h4>
            <p>{comment.text}</p>
        </div>
    );
}