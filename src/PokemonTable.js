const PokemonTable = ({pokemons}) => {

  return (
    <>
    <table style={{ width: 500 }}>
        <thead>
            <tr>
              <td>Name</td>
              <td>URL</td>
            </tr>
        </thead>
        <tbody>
        {pokemons.map((pokemon, idx) => (
          <tr>
            <td key={idx}>
              {pokemon.name}
            </td>
            <td key={idx}>
              {pokemon.url}
            </td>
          </tr>
        ))}
        </tbody>
        </table>
    </>
  );
}

export default PokemonTable;
