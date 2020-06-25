const REQUEST_IN_PROGRESS='potrfolio/settingReducer/REQUEST_IN_PROGRESS'

let initialState={
    isPending:false
}


export const settingsReducer=(state=initialState, action)=>{
    switch (action.type) {
        case REQUEST_IN_PROGRESS:
            return {...state, isPending:action.isPending}
        default:
            return state
    }
}

////AC
export const toggleIsPending=(isPending)=>({type:REQUEST_IN_PROGRESS, isPending})