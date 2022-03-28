import React, { useEffect, useState } from 'react';

/* const SPECIES = {
  'human': false,
  'alien': false,
} */

const SPECIES = [
  'human',
  'alien'
];

const Filters = () => {
  const [species, setSpecies ] = useState(SPECIES)

  const handleFilter = (event) => {
    setSpecies({
      ...species, [event.target.name]: !event.target.value });
  }

  return (
    <section className="container">
      <div>
        <label htmlFor="name-filter">
          <input
            id="name-filter"
            data-testid="name-filter"
            type="text"
            name="name"
          />
        </label>
      </div>
      {<form /* onSubmit={ handleSubmit } */>
          Species:
          <input
            id="human"
            type="radio"
            name="specie"
            value= { 'human' }
            onChange={ handleFilter }
          />
          <label for="human">Human</label>
          <input
            id="alien"
            type="radio"
            name="specie"
            value= { 'alien' }
          />
          <label for="alien">Alien</label>
        <button
          type="submit"
        >
          Filtrar
        </button>
      </form>}
    </section>
  );
};

export default Filters;