import PropTypes from 'prop-types'


const Button = ({ bcolor, text, onClick, textColor }) => {

  
    return (
          <button onClick={onClick} 
          style={{ backgroundColor: bcolor, color: textColor }}
          className='btn'> {text}
          </button>
         

    )
}
Button.defaultProps = {
  color: 'steelblue',
}
Button.propTypes = {
  bcolor: PropTypes.string,
  text: PropTypes.string,
  textColor: PropTypes.string,
  onClick: PropTypes.func,
}
export default Button
