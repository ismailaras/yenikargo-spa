import React from 'react'

const DFilter = ({title,children}) => {
    return (
        <React.Fragment>
            <div className="card-header" style={{fontSize:'22px'}}>
                        {title} axtar
                    </div>
                <div className="card-body" style={{fontSize:'17px'}}>
                    {children}
                </div>
        </React.Fragment>
    )
}

export default DFilter
