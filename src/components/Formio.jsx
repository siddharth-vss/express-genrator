/* eslint-disable react/prop-types */

const Formio = ({ type, name , id , label ,checked ,onChange ,value }) => {
    return (
        <div>

            <input type={type} name={name} checked={checked} value={value} id={id} onChange={onChange} />
            <label>
                {label}
            </label>
        </div>
    )
}

export default Formio
