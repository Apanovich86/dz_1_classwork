import './User.css'
import {Address} from "../address/Address";
import {Company} from "../company/Company";

export function User({uId, uName, uUsername, uEmail, addStreet, addSuit, addSity, addZipcode, gLat, gLng, uPhone, uWebsite, compName, compCatchPhrase, compBs}) {
    return (
        <div className={'user'}>
            <div className={'d-flex'}> <p><span className={'blue'}>ID: </span>{uId}</p>
                <p><span className={'blue'}>name: </span>{uName}</p></div>
            <p><span className={'blue'}>username: </span>{uUsername}</p>
            <p><span className={'blue'}>email: </span>{uEmail}</p>
          <Address
          aStreet = {addStreet}
          aSuite = {addSuit}
          aCity={addSity}
          aZipcode={addZipcode}
          addLat={gLat}
          addLng={gLng}
          />
            <p><span className={'blue'}>phone: </span>{uPhone}</p>
            <p><span className={'blue'}>website: </span>{uWebsite}</p>
            <Company
            cName={compName}
            cCatchPhrase={compCatchPhrase}
            cBs={compBs}
            />
        </div>
    )
}