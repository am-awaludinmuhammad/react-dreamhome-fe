import React from 'react'

const InputFeedback = ({message}) => {
    return (
        <>
            {
                message ?
                <div>
                    <span>
                        <small className="text-danger">{message}</small>
                    </span>
                </div> : null
            }
        </>
    )
}

export default InputFeedback
