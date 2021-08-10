import './Geo.css'
export function Geo({gLat, gLng}) {
    return (
        <div>
            <p className={'blue'}>
                geo:
            </p>
            <div className={'m-l40'}>
                <p><span className={'blue'}>lat: </span>{gLat}</p>
                <p><span className={'blue'}>lng: </span>{gLng}</p>
            </div>
        </div>
    )
}