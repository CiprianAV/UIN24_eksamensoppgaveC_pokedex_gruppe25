import React from 'react';
import { Link } from 'react-router-dom';
import './Home.module.scss'; // Ensure you have this file or adjust as necessary

function Home() {
  return (
    <main>
      <header>
        <nav>
          <Link to="/" className="logo">UIN Pokedex</Link>
          <Link to="/teams" className="nav-link">Teams</Link>
        </nav>
        <input type="text" placeholder="Søk etter pokemon" className="search-bar" />
      </header>

      <section>
        <h1>Main Pokemons</h1>
        <ul className="pokemon-list">
          <li>Bulbasaur</li>
          <li>Ivysaur</li>
          <li>Venusaur</li>
          <li>Charmander</li>
          <li>Charmeleon</li>
          <li>Charizard</li>
          <li>Squirtle</li>
          <li>Wartortle</li>
          <li>Blastoise</li>
        </ul>
      </section>

      <section>
        <h1>Types</h1>
        <ul className="type-list">
          <li>Normal</li>
          <li>Fighting</li>
          <li>Flying</li>
          <li>Poison</li>
          <li>Ground</li>
          <li>Rock</li>
          <li>Bug</li>
          <li>Ghost</li>
          <li>Steel</li>
          <li>Fire</li>
          <li>Water</li>
          <li>Grass</li>
          <li>Electric</li>
          <li>Psychic</li>
          <li>Ice</li>
          <li>Dragon</li>
          <li>Dark</li>
          <li>Fairy</li>
        </ul>
      </section>
    </main>
  );
}

export default Home;