import React, { useState } from 'react';
import './Accordion.scss'

const Accordion = () => {
    const data = [
      {title:'Sual?',description:'Cavab'},
      {title:'Sual?',description:'Cavab'},
      {title:'Sual?',description:'Cavab'},
    ]
    let indexPlus;

    const [active, setActive] = useState(0);

    const eventHandler = (e, index) => {
        e.preventDefault();
        setActive(index);
    }

    const indexCount = (index) => {
        indexPlus = index + 1;
        return indexPlus;
    }

    return(
        <div className="accordion">
            <form>     
                { data.map((tab, index) => (
                    <div key={index}>
                        <h3>
                            <button 
                                onClick={(e) => eventHandler(e, index)}
                                className={ active === index ? 'active' : 'inactive'}
                                aria-expanded={ active === index ? 'true' : 'false' }
                                aria-controls={ 'sect-' + indexCount(index) }
                                aria-disabled={ active === index ? 'true' : 'false' }
                                tabIndex={indexCount(index)}
                            >
                                <span className="title-wrapper">{tab.title}
                                    <i className="plus"/>
                                </span>  
                            </button>
                        </h3>
                        <div id={ 'sect-' + indexCount(index) } className={ active === index  ? 'panel-open' : 'panel-close' }>
                                { tab.description }
                        </div>
                    </div>
                    ))
                }
            </form>
        </div>
    );
}

export default Accordion;