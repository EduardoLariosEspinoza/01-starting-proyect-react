import { useState } from "react";

import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TapButton from "./components/TapButton.jsx";
import { EXAMPLES } from "./data-with-examples.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selected) {
    setSelectedTopic(selected);
  }

  let tabContent = <p>Please select a topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>

          <ul>
            {CORE_CONCEPTS.map((item) => (
              <CoreConcept key={item.title} {...item} />
            ))}
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TapButton
              onSelect={() => handleClick("components")}
              isSelected={selectedTopic === "components"}
            >
              Components
            </TapButton>
            <TapButton
              onSelect={() => handleClick("jsx")}
              isSelected={selectedTopic === "jsx"}
            >
              JSX
            </TapButton>
            <TapButton
              onSelect={() => handleClick("props")}
              isSelected={selectedTopic === "props"}
            >
              Props
            </TapButton>
            <TapButton
              onSelect={() => handleClick("state")}
              isSelected={selectedTopic === "state"}
            >
              State
            </TapButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </>
  );
}

export default App;
