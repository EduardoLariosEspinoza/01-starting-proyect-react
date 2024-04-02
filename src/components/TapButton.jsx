import img from "../assets/react-core-concepts.png";

// Empezar con "on" indica que es una funcion que se ejecuta cuando algo sucede
function TapButton({ children, isSelected, ...props }) {
  return (
    /* children es todo lo que esta dentro de la etiqueta TapButton, en donde sea que sea llamada */
    <li>
      <button className={isSelected ? "active" : ""} {...props}>
        {children}
      </button>
    </li>
  );
}

export default TapButton;
