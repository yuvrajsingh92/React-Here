import { useState } from "react";
import Form from "./Form";
import Notes from "./Notes";
const PageContant = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes((currentNotes) => [...currentNotes, note]);
  };

  return (
    <div className="flex h-[89vh] w-full">
      <div className="w-1/2">
        <Form onAddNote={addNote} />
      </div>
      <div className="w-1/2">
        <Notes notes={notes} />
      </div>
    </div>
  );
};

export default PageContant;
