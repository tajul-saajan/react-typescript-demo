import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Greet } from "./components/Greet";
import { Person, PersonProps } from "./components/Person";
import { PersonList } from "./components/PersonList";

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

  return (
    <div className="App">
      <Greet name="Tajul" messageCount={15} isLoggedIn={true}></Greet>
      <Person name={personName} />
      <PersonList persons={list} />
    </div>
  );
}

export default App;
