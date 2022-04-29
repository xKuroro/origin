import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({showAddTask, onAddTask, edit, onClick, titleHeader }) => {


  return (
    <header className="header">
      <h1  style={headingStyle}>{titleHeader}</h1>
      {edit && <Button
        bcolor='blue'
        text="Save"
        textColor='white'
        onClick={edit? onClick : onclick}
        
      />}
      <Button  
      bcolor={showAddTask ? 'red' : 'silver'}
      text={showAddTask ? "Close" : "Create Task" } 
      textColor={showAddTask ? 'yellowgreen' : 'white'}
      onClick={onAddTask ? onAddTask : onclick}/>
    </header>
  );
};

Header.propTypes = {
  titleHeader: PropTypes.string.isRequired,
};
Header.defaultProps = {
  titleHeader: 'Task Tracker',
}
const headingStyle = {
  backgroundColor: "#2F4F4F",
  color: "#ADFF2F",
};
export default Header;
