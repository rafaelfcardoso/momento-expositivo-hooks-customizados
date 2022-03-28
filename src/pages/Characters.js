import React, { useContext } from 'react';

import { CharCard } from '../components';
import Filters from '../components/Filters';
import { CharactersContext } from '../context';

const Characters = () => {
  const { characters } = useContext(CharactersContext);

  return (
    <div style={ { display: "flex", flexWrap: "wrap", gap: "10px" } }>
      <Filters />
      {
        characters
          .map((char) => <CharCard key={ char.id } {...char} />)
      }
    </div>
  );
}

export default Characters;
