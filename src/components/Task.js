import React from "react";
import { FaTimes, FaEdit } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle, onEdit }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3 style={bstyle}>
        {task.text}
        <div className="lol">
          <FaEdit onClick={() => onEdit(task)} />
          <FaTimes
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => onDelete(task.id)}
          />
        </div>
      </h3>
      <p style={bstyle}>{task.day}</p>
    </div>
  );
};
const bstyle = {
  backgroundColor: "black",
  color: "#ADFF2F",
};

export default Task;
