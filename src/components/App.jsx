import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((noteItem) => (
        <Note key={1} title="Note Title" content="Note Content" />
      ))}
      <Footer />
    </div>
  );
}

export default App;
