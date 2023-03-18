import './form.css'

export default function Form() {
    return(
        <div className="formContainer">
            <form action="">
                <span className='labeling'>CARDHOLDER NAME</span>
                <input type="text" name="cardholder" id="cardholder" size="50"
                className="mainInput" />
            </form>
        </div>
    )
}