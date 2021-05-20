import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import DropDown from './components/DropDown';
import Translate from './components/Translate';
import Router from './components/Router';
import Header from './components/Header';


const itemsList = [
    {
        title: 'What is React?',
        content: 'React is a Javascript library'
    },
    {
        title: 'How do we show content in React?',
        content: 'By doing programming'
    },
    {
        title: 'Why is React usefull?',
        content: 'Engineers like React'
    }
]

const options = [
    {
        label: "red",
        value: "This text is red"
    },
    {
        label: "blue",
        value: "This text is blue"
    },
    {
        label: "Green",
        value: "This text is green"
    }
]

// const showAccordion = () => {
//     if (window.location.pathname === '/') {
//         return <Accordion items={itemsList} />
//     }
// }
// 
// const showList = () => {
//     if (window.location.pathname === '/list') {
//         return <Search />
//     }
// }
// 
// const showDropDown = () => {
//     if (window.location.pathname === '/dropdown') {
//         // // 
//         return (
//             < div >
//                 <DropDown
//                     options={options}
//                 />
//             </div >
//         )
//     }
// }
// 
// const showTranslate = () => {
//     if (window.location.pathname === '/translate') {
//         return <Translate />
//     }
// }

const App = () => {
    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <Header />
            <Router path='/'>
                <Accordion items={itemsList} />
            </Router>
            <Router path='/list'>
                <Search />
            </Router>
            <Router path='/dropdown'>
                <DropDown options={options} selected={selected} onSelected={setSelected} />
            </Router>
            <Router path='/translate'>
                <Translate />
            </Router>
        </div>
    )

}


export default App