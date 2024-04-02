import { useState } from "react";
import { EXAMPLES } from "../data-with-examples.js";
import TapButton from "./TapButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

function Examples() {
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
    <Section id="examples" title="Examples">
      {/* Si quieres pasar un componente personalizado tiene que ser su nomnre entre llaves, {Section} */}
      <Tabs
        buttons={
          <>
            <TapButton
              onClick={() => handleClick("components")}
              isSelected={selectedTopic === "components"}
            >
              Components
            </TapButton>
            <TapButton
              onClick={() => handleClick("jsx")}
              isSelected={selectedTopic === "jsx"}
            >
              JSX
            </TapButton>
            <TapButton
              onClick={() => handleClick("props")}
              isSelected={selectedTopic === "props"}
            >
              Props
            </TapButton>
            <TapButton
              onClick={() => handleClick("state")}
              isSelected={selectedTopic === "state"}
            >
              State
            </TapButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
      <menu></menu>
    </Section>
  );
}

export default Examples;
