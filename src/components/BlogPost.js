import React from 'react'
import moment from 'moment'
import {Link} from 'react-router-dom'

const BlogPost = ({history,post,showControls,deleteBlogPost}) => {

    //checking , if there is no post it will return null.Otherwise will get an error
    if(!post) return (<p>We do not have a post with that id</p>)

    const linkStyles = {
        textDecoration: "none",
        color:'black'
    }
    // handling delete in button onClick
    function handleDelete(){
        deleteBlogPost(post._id)
        history.push("/")
    }
    // console.log("showControls: ",showControls)
    const{title, modified_date, category, content} = post
    return (
        <div>
        <Link style={linkStyles} to = {`/posts/${post._id}`}>
            <h2>{title}</h2>
        </Link>
            <p>{moment(modified_date).fromNow()}</p>
            <p>{category}</p>
            <p>{content}</p>
            {/* //if showControl is true show the button otherwise hide button */}
            {showControls && <button onClick={handleDelete}>Delete</button>}
        </div>
     );
}
 
export default BlogPost 