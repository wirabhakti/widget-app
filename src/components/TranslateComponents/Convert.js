import React, { useState, useEffect } from 'react';
import axios from 'axios';


const GOOGLELANGAPI = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

const Convert = ({ langguage, text }) => {
    const [translate, setTranslate] = useState('');
    const [translation, setTranslation] = useState('');

    useEffect(() => {

        const timeOutId = setTimeout(setTranslate(translation), 0);

        return () => {
            clearTimeout(timeOutId)
        }

    }, [translation])

    useEffect(() => {

        if (text === '') {
            return
        }

        const timeOutId = setTimeout(() => {
            const translation = async () => {
                const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {},
                    {
                        params: {
                            q: text,
                            target: langguage.value,
                            key: GOOGLELANGAPI
                        }
                    }
                );

                setTranslation(data.data.translations[0].translatedText)

            };

            translation();

        }, 1000);

        return () => {
            clearTimeout(timeOutId)
        }

    }, [langguage, text])

    return (
        <div>
            <br />
            <h3>Translation</h3>
            {translate}
        </div>
    )
}


export default Convert