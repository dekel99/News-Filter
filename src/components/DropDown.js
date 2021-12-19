import { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ArticlesContext } from "../context/ArticlesContext"

function DropDown() {
  const [articles, setArticles, country, setCountry, category, setCategory, loading, search, setSearch] = useContext(ArticlesContext)

  const handleChange = (e) => {
    setCountry(e.target.value);
  };

  return (
    <Box sx={{ width: 110 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">מדינה</InputLabel>
        <Select
          size='small'
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={country}
          label="Country"
          onChange={handleChange}
        >
          <MenuItem value={"il"}>ישראל</MenuItem>
          <MenuItem value={"us"}>ארה"ב</MenuItem>
          <MenuItem value={"en"}>אנגליה</MenuItem>
          <MenuItem value={"au"}>אוסטרליה</MenuItem>
          <MenuItem value={"ru"}>רוסיה</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default DropDown