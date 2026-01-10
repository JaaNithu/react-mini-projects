/* eslint-disable no-unused-vars */
import { useState } from "react";
import faq from "../API/faq.json";
import { FAQ } from "./UI/FAQ";

export const Accordion = () => {
    const [data, setData] = useState(faq);
    const [activeId, setActiveId] = useState(false);

    // useEffect(() => {
    //     setData(faq);
    // }, []);

    const handleButton = (id) => {
        setActiveId((prevId) => (prevId === id ? false : id));
    };

    return (
        <>
            {/* <h1>The Accordion</h1>
            <ul className="section-accordion">
                {
                    data.map((curElem) => {
                        return (<li key={curElem.id}>
                            <div className="accordion-grid">
                                <p>{curElem.question}</p>
                                <button>Show</button>
                            </div>
                        </li>)
                    })
                }
            </ul> */}
            <h1>The Accordion</h1>
            <ul className="section-accordion">
                {data.map((curElem) => {
                        return <FAQ key={curElem.id} curData={curElem} isActive={activeId === curElem.id} onToggle={() => handleButton(curElem.id)}/>;
                    })
                }
            </ul>
        </>
    );
};