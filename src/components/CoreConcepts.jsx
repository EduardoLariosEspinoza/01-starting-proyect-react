import { CORE_CONCEPTS } from "../data.js";
import CoreConcept from "./CoreConcept.jsx";

function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Time to get started!</h2>

      <ul>
        {CORE_CONCEPTS.map((item) => (
          <CoreConcept key={item.title} {...item} />
        ))}
      </ul>
    </section>
  );
}

export default CoreConcepts;
