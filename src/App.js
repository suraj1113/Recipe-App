import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";


import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';

import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';


export default function App() {
  const API_KEY = "d214551c13b6b460d39891a8f38bf6f4";
  const API_ID = "0dae1030";

  const [popular, setPopular] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState("milk");


  useEffect(() => {
    getPopular();
  }, [query]);

  const getPopular = async () => {
    const api = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
    );

    const data = await api.json();

    setPopular(data.hits);
    console.log(data.hits);
  };
  const updateSearch =(e) =>{
    setSearch(e.target.value);
    console.log(e.target.value)
  }

  const updateQuery =(e) =>{
    e.preventDefault();
    setQuery(search);
    console.log(e.target.value);
  }

  return (
    <div className="container">
        <h1>Recipe App </h1>
      <div className="header"> 
        <Paper onSubmit={updateQuery}
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
      
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search a Dish"
        inputProps={{ 'aria-label': 'Search dish' }} focused value={search} onChange={updateSearch}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon/>
      </IconButton>
    </Paper>
          
    </div>
      <Grid container spacing={2}>
      {popular.map((recipe, index) => (
        <Grid item xs={4}>
        <Recipe
          key={index}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients = {recipe.recipe.ingredients}
          url = {recipe.recipe.url}
        />
        </Grid>
      ))}
      
      </Grid>
    </div>
  );
}

