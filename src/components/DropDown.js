import React, { useState, useEffect, useRef } from 'react';


const DropDown = ({ options, selected, onSelected }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (event) => {
            if (ref.current.contains(event.target)) {
                return
            }

            setOpen(false);
        }

        document.body.addEventListener('click', onBodyClick, { capture: true })

        return () => {
            document.body.removeEventListener('click', onBodyClick, {capture: true})
        }

    }, [])

    const renderedOptions = options.map((option, index) => {
        if (option.value === selected.value) {
            return null
        }

        return (
            <div
                className="item"
                key={option.label}
                onClick={() => {
                    onSelected(option)
                }}
            >
                {option.value}
            </div>
        )
    });


    return (
        <div className="ui form" ref={ref}>
            <div className="field">
                <label className="label">Select a Color</label>
                <div
                    onClick={() => setOpen(!open)}
                    className={`ui selection dropdown ${open ? "visible active" : ""}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.value}</div>
                    <div className={`menu ${open ? "visible transition" : ""}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DropDown;