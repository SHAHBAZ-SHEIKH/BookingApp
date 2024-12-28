import React from 'react'
import './FeaturedProperties.css'

const FeaturedProperties = () => {
    return (
        <div className='fp'>
            <div className='fpItem'>
                <img src="https://cf2.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=" alt="" className='fpImg' />
                <span className='fpName'>Apart Hotel Miasto</span>
                <span className='fpCity'>Madrid</span>
                <span className='fpPrice'>Starting from $120</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>

            </div>

            <div className='fpItem'>
                <img src="https://cf2.bstatic.com/xdata/images/hotel/square600/579099936.webp?k=e04cc7f7fe864ce09b7d7d978dbb7db3e558038a2151eb7c4c11e895bafbd8c0&o=" alt="" className='fpImg' />
                <span className='fpName'>7Seasons Apartments Budapest</span>
                <span className='fpCity'>Budapest</span>
                <span className='fpPrice'>Starting from $120</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>

            </div>
            <div className='fpItem'>
                <img src="https://cf2.bstatic.com/xdata/images/hotel/square600/87375132.webp?k=a3eff4ea2475f3a4de01f017463acd719bddada5e63f87f6c0952f8590498865&o=" alt="" className='fpImg' />
                <span className='fpName'>Downtown Synagogue</span>
                <span className='fpCity'>Moscow</span>
                <span className='fpPrice'>Starting from $120</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>

            </div>
            <div className='fpItem'>
                <img src="https://cf2.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=c4092495705eab3fad626e8e1a43b1daf7c623e4ea41daf26a201b4417a71709&o=" alt="" className='fpImg' />
                <span className='fpName'>Numa Vita | Apartmenst</span>
                <span className='fpCity'>Santa Maria</span>
                <span className='fpPrice'>Starting from $120</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>

            </div>

        </div>
    )
}

export default FeaturedProperties
