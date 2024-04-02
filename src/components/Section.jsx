function Section({ title, children, ...props }) {
  return (
    /* Asignas todos los atributos que colocas en el componente y que no mencionas en el distructuring, por ejemplo className o id */
    /* The elements in ...props have to be valid atributes for HTML tags */
    <section {...props}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

export default Section;
