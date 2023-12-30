import React, {useState} from "react";

const CodeInput = ({onSet}) => {
    const [code, setCode] = useState();
    const onSetCode = val => {
        setCode(val);
        onSet(val);
    }
    return (
        <div>
            <input type="text" value={code} onChange={e => onSetCode(e.target.value)}></input>
            <button onClick={()=>onSetCode(Math.random())}>Generate</button>
        </div>
    );
};

export default CodeInput;