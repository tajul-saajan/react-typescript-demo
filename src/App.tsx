import "./App.css";
import { Greet } from "./components/Greet";
import { Person, PersonProps } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Button } from "./components/Button";

function App() {
  const personName = {
    first: "Tajul",
    last: "islam",
  };

  const list: PersonProps[] = [
    {
      name: {
        first: "aa",
        last: "bb",
      },
    },
    {
      name: {
        first: "cc",
        last: "dd",
      },
    },
    {
      name: {
        first: "ee",
        last: "ff",
      },
    },
  ];

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, id:number) => {
    console.log("button clicked",id, event);
  };

  return (
    <div className="App">
      <Greet name="Tajul" messageCount={15} isLoggedIn={true}></Greet>
      <Person name={personName} />
      <PersonList persons={list} />
      <Status status="loading" />
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to me</Heading>
      </Oscar>
      <Button handleClick={handleClick}></Button>
    </div>
  );
}

export default App;
