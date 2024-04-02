/* Añadir valor por defecto BC en caso de que no se le pase ninguno */
function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
  //const ButtonsContainer = buttonsContainer; // Solo es necesario hacer esto si el nombre de la variable empieza con minuscula
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>

      {children}
    </>
  );
}

export default Tabs;
