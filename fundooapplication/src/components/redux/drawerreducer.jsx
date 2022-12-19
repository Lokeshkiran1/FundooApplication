const initialState={
    title:"keep"
}
export const drawerReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'Notes':return {
            ...state,title:'Notes'
        }
        case 'Remainders':return {
            ...state,title:'Remainders'
        }
        case 'Edit Labels':return {
            ...state,title:'Edit Labels'
        }
        case 'Archive':return {
            ...state,title:'Archive'
        }
        case 'Bin':return {
            ...state,title:'Bin'
        }
        default:return state
    }
}