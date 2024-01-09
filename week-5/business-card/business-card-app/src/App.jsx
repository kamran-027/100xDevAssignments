import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
import { CreateCard } from "./components/CreateCard";

function App() {
  const [addCardModal, setAddCardModal] = useState(false);

  return (
    <>
      <div className="header">
        <h1 className="title">Business Cards</h1>
        <button
          className="add-card-btn"
          onClick={() => {
            setAddCardModal(true);
          }}
        >
          Add Card
        </button>
      </div>
      {addCardModal ? (
        <CreateCard
          addCardModal={addCardModal}
          setAddCardModal={setAddCardModal}
        />
      ) : null}
      <Card />
    </>
  );
}

export default App;
