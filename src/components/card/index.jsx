import './card.css'
export default function Index() {
    return(
        <>
            <div className="cardFront">
            <img src="/images/bg-card-front.png" alt="" />
            <div className="cardFrontInfo">
                <img src="/images/card-logo.svg" alt="" 
                className='cardLogo'/>
                <span className="cardNumber">0000 0000 0000 0000</span>
                <div className="cardFrontSub">
                <span className="cardName">Ivan Matias</span>
                <span className="cardExpire">00/00</span>
                </div>
            </div>
            </div>
            <div className="cardBack">
            <img src="/images/bg-card-back.png" alt="" />
            <div className="cardBackInfo">
                <span className="cardBackNumber">000</span>
            </div>
            </div>
        </>
    )
}