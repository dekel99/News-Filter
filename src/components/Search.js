import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { ArticlesContext } from "../context/ArticlesContext"
import { useContext, useState } from 'react';

function Search() {
  const [searchInput, setSearchInput] = useState('')
  const [articles, setArticles, country, setCountry, category, setCategory, loading, search, setSearch] = useContext(ArticlesContext)

  function handleSearchChange(e){
    setSearchInput(e.target.value)
  }

  function handleSearch(e){
    e.preventDefault()
    setSearch(searchInput)
    setSearchInput('')
  }

  return (
    <Paper
      component="form"
      sx={{ display: 'flex', alignItems: 'center', width: 200, height: 40 }}
      onChange={handleSearchChange}
      onSubmit={handleSearch}
      value={searchInput}
    >
      <InputBase value={searchInput} sx={{ p: '15px' }} placeholder="חיפוש חופשי.." />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default Search