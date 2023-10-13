import { useDispatch } from "react-redux"
import { reactionsAdded } from "./posts/postsSlice";

const reactionEmoji = {
    thumbsUp: '👍',
    hooray: '🎉',
    heart: '❤️',
    rocket: '🚀',
    eyes: '👀',
}

const Reaction = ({ post }) => {
    const dispatch = useDispatch();
    return Object.entries(reactionEmoji).map(([name, emoji]) => <button className="reactionButton" key={name} onClick={() => dispatch(reactionsAdded({ postId: post.id, reaction: name }))}>
        {emoji} {post.reactions[name]}
    </button>
    )
}

export default Reaction