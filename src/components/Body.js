import Articles from "./Articles"
import "../styles/Body.css"

function Body() {
    return (
        <div className='body'>
            <div className="info">
                <iframe className="stocks" src="https://z.ynet.co.il/short/content/2020/ynetcalcalaticker/"/>
                <a className="forecast" target="_blank" href="https://booked.co.il/weather/tel-aviv-18414"><img src="https://w.bookcdn.com/weather/picture/23_18414_1_25_3658db_250_2a48ba_ffffff_ffffff_1_2071c9_ffffff_0_6.png?scode=124&domid=407&anc_id=15665"  alt="booked.net"/></a>            
            </div>
            <Articles />
        </div>
    )
}

export default Body
