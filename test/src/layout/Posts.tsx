import { useSelector, useDispatch } from "react-redux";
import { addPost, removePost } from "../state/actions/actions";
import { RootState } from "../state/rootReducer";
// import { PostProps } from '../state/propsTypes/propsTypes'
import { PostsPropsMainPage } from './types/propsTypes';
import { PostsContainer } from './styles/PostsContainer';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Posts({ id, title, body, onChangeId, onChangeTitle, onChangeBody }: PostsPropsMainPage) {
    const posts = useSelector((state: RootState) => state.post.posts);
    const dispatch = useDispatch();
    console.log('posts', posts);

    function addPostOnSubmit() {
        dispatch(addPost({ id, title, body }))
    }

    function showPosts() {
        const allPosts = posts.map((post) => (
            <div key={post.id}>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
            </div>
        ))
        return allPosts;
    }

    const a = showPosts();
    console.log('a', a)

    function deletePostOnClick() {
        dispatch(removePost(id))
    }

    return (
        <PostsContainer>
            <h2>Posts</h2>
            <div>
                Title
                <TextField variant="standard" onChange={() => onChangeTitle(title)} />
            </div>
            <div>
                Body
                <TextField variant="standard" onChange={() => onChangeBody(body)} />
            </div>
            <div className="button-wrapper">
                <Button onClick={() => addPostOnSubmit()} className="button">
                    Add
                </Button>
                <Button onClick={() => deletePostOnClick()} className="button">
                    Delete
                </Button>
            </div>
            {showPosts()}
        </PostsContainer>
    )
}

export default Posts;