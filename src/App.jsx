
import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from "./components/TabButton";

function App() {

  const [ selectedTopic, setSelectedTopic ] = useState('components');

  let tabContent = "";
  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((coreConcept) => <CoreConcept {...coreConcept} />)}
            {/*<CoreConcept*/}
            {/*  image={CORE_CONCEPTS[0].image}*/}
            {/*  title={CORE_CONCEPTS[0].title}*/}
            {/*  description={CORE_CONCEPTS[0].description}*/}
            {/*/>*/}
            {/*<CoreConcept*/}
            {/*    {...CORE_CONCEPTS[1]}*/}
            {/*/>*/}
            {/*<CoreConcept*/}
            {/*  image={CORE_CONCEPTS[2].image}*/}
            {/*  title={CORE_CONCEPTS[2].title}*/}
            {/*  description={CORE_CONCEPTS[2].description}*/}
            {/*/>*/}
            {/*<CoreConcept*/}
            {/*    image={CORE_CONCEPTS[3].image}*/}
            {/*    title={CORE_CONCEPTS[3].title}*/}
            {/*    description={CORE_CONCEPTS[3].description}*/}
            {/*/>*/}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
