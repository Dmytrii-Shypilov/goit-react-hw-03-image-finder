import s from "./button.module.css"
import PropTypes from 'prop-types'

const Button = ({onClick}) => {
    return (
        <div className={s.buttonBox}>
            <button className={s.button} onClick={onClick} type="button">Load more</button>
        </div>    
    )
}

export default Button

Button.propTypes = {
    onClick: PropTypes.func.isRequired
}