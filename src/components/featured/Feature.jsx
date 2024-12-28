import React from 'react'
import './Feature.css'

const Feature = () => {
    return (
        <div className='feature'>
            <div className='featureItem'>
                <img src="https://cf2.bstatic.com/xdata/images/xphoto/300x240/140052776.jpg?k=19caf7a48d510088ec6069be87f5cf0b60425aa257ef7102af45c570ade8b168&o=" alt="" className='featureImg' />
                <div className="featureTitles">
                    <h1>Dublin</h1>
                    <h2>123 properties</h2>
                </div>
            </div>

            <div className='featureItem'>
                <img src="https://cf2.bstatic.com/xdata/images/xphoto/720x405/292260574.webp?k=efc8e339ea66514c3b64c5bc891f1608d22a40eb23b853bc0c9ecb93c541ef10&o=" alt="" className='featureImg' />
                <div className="featureTitles">
                    <h1>Austin</h1>
                    <h2>123 properties</h2>
                </div>
            </div>

            <div className='featureItem'>
                <img src="https://cf2.bstatic.com/xdata/images/xphoto/540x405/290483794.webp?k=916f7bac0ccdb08efcb269ad29cc10816ab66cd1671359066d23d32fb17b5c39&o=" alt="" className='featureImg' />
                <div className="featureTitles">
                    <h1>Reno</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
        </div>
    )
}

export default Feature
