import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main>
      {/* Header */}
      <header>
        <nav>
          {/* Link to home page */}
          <Link to="/" className="logo">UIN Pokedex</Link>
          {/* Link to Teams page */}
          <Link to="/teams" className="nav-link">Teams</Link>
        </nav>
        {/* Search bar */}
        <input type="text" placeholder="Søk etter pokemon" className="search-bar" />
      </header>

      {/* Main Pokemons */}
      <section>
        <h1>Main Pokemons</h1>
        {/* List of main pokemons */}
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

      {/* Types */}
      <section>
        <h1>Types</h1>
        {/* List of pokemon types */}
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