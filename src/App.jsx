import reactImg from './assets/react-core-concepts.png';

const reactDescriptions = ["Fundamental", "Crucial", "Core"];
function getRandomInt(max) {
   return Math.floor(Math.random() * (max + 1));
}

function CoreConcepts(props) {
  return (
      <li>
        <img src={props.image} alt="..." />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </li>
  );
}
function Header() {
  const description = reactDescriptions[getRandomInt(2)];
  return (
    <header>
    <img src={reactImg} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {description} React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>
  );
}

function App() {
  return (
    <div>
      <Header/>
      <main>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcepts
            image={reactImg}
            title="Components"
            description="The core UI building block"
            />
          <CoreConcepts
          title="Props"
          description="The props component"
          image={reactImg}
          />
        </ul>
      </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
