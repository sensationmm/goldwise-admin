import React, { useState } from "react";
import {
  FormControl,
  InputAdornment,
  TextField,
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchField = ({placeholder}) => {
  const [showClearIcon, setShowClearIcon] = useState("none");

  const handleChange = (event) => {
    setShowClearIcon(event.target.value === "" ? "none" : "flex");
  };

  const handleClick = () => {
    // TODO: Clear the search input
    console.log("clicked the clear icon...");
  };

  return (
    <div id="app">
      <FormControl className={'m-0'}>
        <TextField
          classes={{root: 'searchInput'}}
          size="small"
          variant="outlined"
          onChange={handleChange}
          placeholder={placeholder}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment
                position="end"
                style={{ display: showClearIcon }}
                onClick={handleClick}
              >
                <i class="fa-solid fa-xmark"></i>
              </InputAdornment>
            )
          }}
        />
      </FormControl>
    </div>
  );
};

export default SearchField;
