import React from 'react'

const DFilter = ({title,children}) => {
    return (
        <React.Fragment>
            <div className="card-header" style={{fontSize:'20px'}}>
                        {title} axtar
                    </div>
                <div className="card-body" style={{fontSize:'16px'}}>
                    {children}
                </div>
        </React.Fragment>
    )
}

export default DFilter
