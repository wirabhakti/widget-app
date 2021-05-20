import React, { useState } from 'react';
import DropDownLang from './TranslateComponents/DropdownLang';
import Convert from './TranslateComponents/Convert';


const langoptions = [
    {
        label: "English",
        value: "en"
    },
    {
        label: "Spanish",
        value: "es"
    },
    {
        label: "Indonesia",
        value: "id"
    },
    {
        label: "Japanese",
        value: "ja"
    },
    {
        label: "Russian",
        value: "ru"
    }
]


const Translate = () => {
    const [langguage, setLangguage] = useState(langoptions[0]);
    const [text, setText] = useState('');

    const onTextInput = (event) => {
        event.preventDefault();
        setText(event.target.value);
    }

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label className="label">Input Text</label>
                    <input value={text} onChange={onTextInput} />
                </div>
            </div>
            <DropDownLang
                options={langoptions}
                langguage={langguage}
                onSetLangguage={setLangguage}
            />
            <Convert langguage={langguage} text={text} />
        </div>
    )
}

export default Translate