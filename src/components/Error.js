import React, { Fragment } from 'react'

const Error = ({ text }) => {
    const alertContent = 'Vous n\'avez renseigné aucun contenu'

    if (text) {
        return false
    } else {
        return (
            <Fragment>
                <div className='alert alert-warning' role='alert'>
                    { alertContent }
                </div>
            </Fragment>
        )
    }
    
}

export default Error