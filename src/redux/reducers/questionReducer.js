const initialState = {
    questions : [
        {title : 'React', contenu : 'what is a prop'},
        {title : 'PHP', contenu : 'what is a PHP'},
        {title : 'React', contenu : 'what is a prop'},
        {title : 'PHP', contenu : 'what is a PHP'},
        {title : 'React', contenu : 'what is a prop'},
        {title : 'PHP', contenu : 'what is a PHP'},
        {title : 'React', contenu : 'what is a prop'},
        {title : 'PHP', contenu : 'what is a PHP'},
        {title : 'React', contenu : 'what is a prop'},
        {title : 'PHP', contenu : 'what is a PHP'},
        {title : 'React', contenu : 'what is a prop'},
        {title : 'PHP', contenu : 'what is a PHP'}
    ]
}

export function questionReducer(state = initialState, action){
    switch(action.type){
        case 'GET_ALL_QUESTIONS':{
            return {
                ...state,
                questions : action.payload
            }
        }
        default: {
            return state
        }
    }
}