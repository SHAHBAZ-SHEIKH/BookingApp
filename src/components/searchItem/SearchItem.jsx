import React from 'react'
import './searchItem.css'
import {useNavigate} from 'react-router-dom'

const SearchItem = () => {

    const navigate = useNavigate()
    
    return (
        <div className='searchItem'>
            <img src="https://cf2.bstatic.com/xdata/images/hotel/square240/579099936.webp?k=e04cc7f7fe864ce09b7d7d978dbb7db3e558038a2151eb7c4c11e895bafbd8c0&o=" alt="" className='siImg' />

            <div className="siDesc">
                <h1 className="siTitle">Hotel</h1>
                <span className="siDistance">500m from center</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubtitle">Studio Apartment with Air conditioning</span>
                <span className="siFeatures">Entire studio • 1 bathroom • 21m2 1 full bed</span>
                <span className="siCancelOp">Free cancellation </span>

                <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today!</span>
            </div>

            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">$112</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button className="siCheckButton" onClick={() => navigate('/hotel/1234')}>See availability</button>
                </div>
            </div>

        </div>
    )
}

export default SearchItem
