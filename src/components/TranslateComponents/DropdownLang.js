import React, { useRef, useState, useEffect } from 'react';


const DropDownLang = ({ options, langguage, onSetLangguage }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();


    const renderedOptions = options.map((option, index) => {
        if(option.label === langguage.label){
            return null
        };

        return (
            <div 
            key={option.value} 
            onClick={() => onSetLangguage(option)}
            className="item">
                {option.label}
            </div>
        )
    })

    useEffect(() => {
        const onBodyClick = (event) => {
            if(ref.current.contains(event.target)){
                return
            }

            setOpen(false)
        };

        document.addEventListener('click', onBodyClick
            , { capture: true });

        return () => {
            document.removeEventListener('click', onBodyClick, { capture: true })
        };

    }, [])

    return (
        <div className="ui form" ref={ref}>
            <div className="field">
                <label className="label">Select Langguage</label>
                <div
                    onClick={() => setOpen(!open)}
                    className={`ui selection dropdown ${open ? "active" : ""}`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{langguage.label}</div>
                    <div className={`menu ${open ? "visible transition" : ""}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DropDownLang;