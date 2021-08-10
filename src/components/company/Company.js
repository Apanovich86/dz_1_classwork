import './Company.css'
export function Company({cName, cCatchPhrase, cBs}) {
    return (
        <div>
            <p className={'blue'}>company:</p>
            <div className={'m-l'}>
                <p><span className={'blue'}>name: </span>{cName}</p>
                <p><span className={'blue'}>catchPhrase: </span>{cCatchPhrase}</p>
                <p><span className={'blue'}>bs: </span>{cBs}</p>
            </div>
        </div>
    )
}