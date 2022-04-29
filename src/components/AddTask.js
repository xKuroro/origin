import { useState, useEffect } from "react";
const AddTask = ({ onAdd, edit, editedValue, onClick }) => {
  const [id, setId] = useState("");
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);
  const [onEdit, setOnEdit] = useState(false);
  const onSubmit = (event) => {
    event.preventDefault();

    if (!text || !day) {
      alert("Input some text.");
      return;
    } else if ((edit = true)) {
      onClick({ id, text, day, reminder, onEdit });
    } else {
      onAdd({ text, day, reminder });
    }

    setText("");
    setDay("");
    setReminder(false);
  };

  useEffect(() => {
    if (editedValue) {
      setText(editedValue.text);
      setDay(editedValue.day);
      setReminder(editedValue.reminder);
      setOnEdit(true);
      setId(editedValue.id);
    }
  }, [editedValue]);

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
        />
      </div>
      <div className="form-control">
        <label>Day and Time</label>
        <input
          type="text"
          placeholder="Day & TIme"
          value={day}
          onChange={(event) => {
            setDay(event.target.value);
          }}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(event) => {
            setReminder(event.currentTarget.checked);
          }}
        />
      </div>

      <input
        type="submit"
        value={onEdit ? "Save Edit" : "Save Task"}
        className="btn btn-block"
      />
    </form>
  );
};

export default AddTask;
