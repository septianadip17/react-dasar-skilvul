import PropTypes from "prop-types"; // Import PropTypes dari prop-types package
import "./PokemonItem.css";
import { colours } from "../../data/colours";

function PokemonItem({ pokemon }) {
  return (
    <div className="pokemon-card" style={{ backgroundColor: `${pokemon.color}` }}>
      <img src={pokemon.imageUrl} alt={pokemon.name} width={250} />
      <h1>{pokemon.name}</h1>

      {/* Menambahkan badge tipe pokemon di bawah nama pokemon */}
      <div className="types-container">
        {pokemon.types.map((type, index) => (
          <span
            key={index}
            className="type-badge"
            style={{ backgroundColor: colours[type.toLowerCase()] }}
          >
            {type}
          </span>
        ))}
      </div>

      <p className="description">{pokemon.description}</p>
    </div>
  );
}

// Menambahkan validasi prop-types
PokemonItem.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};

export default PokemonItem;
