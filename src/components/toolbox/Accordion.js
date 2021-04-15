import React, { useState } from 'react';
import './Accordion.scss'

const Accordion = () => {
    const data = [
      {title:'DAŞIMA HAQQI NECƏ HESABLANIR?',description:'DAŞIMA HAQQI BAĞLAMANIN ÇƏKİSİNƏ GÖRƏ HESABLANIR.'},
      {title:'CƏKİSİ AZ OLAN LAKİN QABARİT ÖLÇÜLƏRİ COX BÖYÜK OLAN BAĞLAMALARIN DAŞIMA HAQQI NECƏ HESABLANIR?',description:'DAŞIMA HAQQI BAĞLAMANIN ÇƏKİSİNƏ GÖRƏ HESABLANIR VƏ QABARİTİNƏ GÖRƏ ƏLAVƏ HAQQ ALINIR'},
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
                                    <i className="fa fa-check plus"/> 
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