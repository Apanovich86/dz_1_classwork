import './Address.css'
import {Geo} from "../geo/Geo";
export function Address({aStreet, aSuite, aCity, aZipcode, addLat, addLng}) {
    return (
        <div>
            <p><span className={'blue'}>address:</span></p>
            <div className={'m-l'}>
                <p><span className={'blue'}>street: </span>{aStreet}</p>
                <p><span className={'blue'}>suite: </span>{aSuite}</p>
                <p><span className={'blue'}>city: </span>{aCity}</p>
                <p><span className={'blue'}>zipcode: </span>{aZipcode}</p>
                <Geo
                    gLat={addLat}
                    gLng={addLng}
                />
            </div>
        </div>
    )
}