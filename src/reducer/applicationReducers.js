const intialState = []

const applicationReducers = (state=intialState,action) => {
    switch(action.type){
        case 'GET_APPLICATIONS' : {
            return [...action.payload]
        }
        case 'UPDATE_SHORTLIST' : {
            return state.map(application=>{
                if(application._id == action.payload._id){
                    return action.payload
                }
                else{
                    return application
                }
            })
        }
        case 'UPDATE_REJECT' : {
            return state.map(application=>{
                if(application._id == action.payload._id){
                    return action.payload
                }
                else{
                    return application
                }
            })
        }
        default : {
            return [...state]
        }
    }
}

export default applicationReducers