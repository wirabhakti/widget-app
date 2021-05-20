import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import wiki from '../apis/wikiapi';


const Search = () => {
    const [term, setTerm] = useState('');
    const [debounceTerm, setDebounceTerm] = useState(term);
    const [results, setResults] = useState([]);

    const onInputChange = (event) => {
        event.preventDefault();
        setTerm(event.target.value);
    };


    // const onFormSubmit = async (event) => {
    //     event.preventDefault();
    //     const searchResults = await wiki.get('', {
    //         params: {
    //             srsearch: term
    //         }
    //     }
    //     );

    //     console.log(searchResults);
    // }

    useEffect(() => {
        if (!term) {
            return
        }

        const timer1 = setTimeout(() => {
            setDebounceTerm(term);
        }, 1000);

        return () => {
            clearTimeout(timer1)
        };

    }, [term])


    useEffect(() => {
        if (!debounceTerm) {
            return
        }

        console.log(debounceTerm);

        const timer2 = setTimeout(() => {
            const wikiAPI = async () => {
                const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
                    params: {
                        action: 'query',
                        origin: '*',
                        list: 'search',
                        format: 'json',
                        srsearch: debounceTerm
                    }
                });
                setResults(data.query.search);
            };

            wikiAPI();

        }, 1000);

        return () => {
            clearTimeout(timer2);
        }

    }, [debounceTerm])

    const resultItem = results.map((result, index) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a
                        className="ui button"
                        href={`https://en.wikipedia.org/?curid=${result.pageid}`}
                        target="blank"
                    >GO</a>
                </div>
                <div className="content">
                    <div className="ui header">
                        <h3>{result.title}</h3>
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div>
        )
    })


    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Search :</label>
                    <input type="text" onChange={onInputChange} value={term} />
                </div>
            </div>
            <div className="ui celled list">
                {resultItem}
            </div>
        </div>
    )
};

export default Search;