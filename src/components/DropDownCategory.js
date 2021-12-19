import { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ArticlesContext } from "../context/ArticlesContext"

function DropDownCategory() {
  const [articles, setArticles, country, setCountry, category, setCategory, loading, search, setSearch] = useContext(ArticlesContext)

  const handleChange = (e) => {
    setCategory(e.target.value)
  }

  return (
    <Box sx={{ width: 110 }}>
      <FormControl fullWidth>
        <InputLabel sx={{marginRight: 4}} id="demo-simple-select-label">קטגוריה</InputLabel>
        <Select 
          size='small'
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Category"
          onChange={handleChange}
        >
          <MenuItem value={"general"}>הכל</MenuItem>
          <MenuItem value={"business"}>עסקים</MenuItem>
          <MenuItem value={"entertainment"}>בידור</MenuItem>
          <MenuItem value={"health"}>בריאות</MenuItem>
          <MenuItem value={"science"}>מדע</MenuItem>
          <MenuItem value={"sports"}>ספורט</MenuItem>
          <MenuItem value={"technology"}>טכנולוגיה</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default DropDownCategory