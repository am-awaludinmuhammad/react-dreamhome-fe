export const getInputErrorMessages = (errors) => {
    let field = {}

    if (errors.hasOwnProperty('validation_errors')) {
        errors.validation_errors.forEach(item => {
            field[item.context.label] = item.message
        });
    }

    return { 
        message: errors.message,
        field
    };
}