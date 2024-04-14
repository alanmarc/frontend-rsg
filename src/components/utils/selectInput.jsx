
const SelectInput = ({ opciones, valorSeleccionado, onChange }) => {
    return (
      <select value={valorSeleccionado} onChange={onChange}>
        {opciones.map((opcion, index) => (
          <option key={index} value={opcion}>
            {opcion}
          </option>
        ))}
      </select>
    );
  };
  
  export default SelectInput;