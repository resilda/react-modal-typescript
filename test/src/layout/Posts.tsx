import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addPost, removePost } from '../state/actions/actions'
import { RootState } from '../state/rootReducer'
import { PostsPropsMainPage } from './types/propsTypes'
import { PostsContainer } from './styles/PostsContainer'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

function Posts({ id, title, body }: PostsPropsMainPage) {
  const posts = useSelector((state: RootState) => state.post.posts)
  const defaultTitle = useSelector((state: RootState) => state.post.posts.title)
  const defaultBody = useSelector((state: RootState) => state.post.posts.body)
  const dispatch = useDispatch()

  const [titleInput, setTitleInput] = useState(defaultTitle)
  const [bodyInput, setBodyInput] = useState(defaultBody)
  const [showDeleteButton, setShowDeleteButton] = useState(false)

  function addPostOnSubmit() {
    dispatch(addPost(id, titleInput, bodyInput))
  }

  function deletePostOnClick() {
    dispatch(removePost(id))
  }

  return (
    <PostsContainer>
      <h2>Posts</h2>
      <div className="text-field-wrapper">
        <h4 className="elements">Title</h4>
        <TextField
          variant="standard"
          onChange={(e: any) => setTitleInput(e.target.value)}
          className="text-field"
        />
      </div>
      <div className="text-field-wrapper">
        <h4 className="elements">Body</h4>
        <TextField
          variant="standard"
          onChange={(e: any) => setBodyInput(e.target.value)}
          className="text-field"
        />
      </div>
      <div>
        <Button
          onClick={() => {
            addPostOnSubmit()
            setShowDeleteButton(!showDeleteButton)
          }}
          className="button"
        >
          Add
        </Button>
      </div>
      <div
        className="post-wrapper"
        onClick={() => {
          deletePostOnClick()
          setShowDeleteButton(false)
          setTitleInput('')
          setBodyInput('')
        }}
      >
        <div className="elements-wrapper">
          <h4>{posts.title}</h4>
          <h3 className="body">{posts.body}</h3>
        </div>
        {showDeleteButton ? (
          <Button className="delete-button">Delete</Button>
        ) : null}
      </div>
    </PostsContainer>
  )
}

export default Posts
