export const getInputErrorMessages = (errors) => {
    let data = {}
    
    if (errors.hasOwnProperty('validation_errors')) {
        errors.validation_errors.forEach(item => {
            data[item.context.label] = item.message
        })
    }

    return data;
}