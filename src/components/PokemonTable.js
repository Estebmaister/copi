const PokemonTable = ({pokemons}) => {

  return (<>
    <h1>Table of pokemons</h1>
    <table style={{ width: 500 }}>
      <thead>
        <tr>
          <td>Name</td>
          <td>URL</td>
        </tr>
      </thead>
      <tbody>
        {pokemons.map(({name, url}) => (
          <tr key={name}>
            <td>{name}</td>
            <td>{url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>);
}

export default PokemonTable;
