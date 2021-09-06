import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterUser } from '../state/actions/actions'
import TextField from '@material-ui/core/TextField'
import SearchIcon from '@material-ui/icons/Search'
import { FilterUsersContainer } from './styles/FilterUsersContainer'

function FilterUsers() {
  const [filterInput, setFilterInput] = useState('')
  const dispatch = useDispatch()

  function onSubmit() {
    dispatch(filterUser(filterInput))
  }

  return (
    <FilterUsersContainer>
      <TextField
        variant="standard"
        className="text-field"
        onChange={(e: any) => setFilterInput(e.target.value)}
      />
      <SearchIcon className="search-icon" onClick={() => onSubmit()} />
    </FilterUsersContainer>
  )
}

export default FilterUsers
