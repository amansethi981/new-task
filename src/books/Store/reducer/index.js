const initialState={
    data:[],
    total:1,
    loading:true,
    params:{},
    currentData:null
}


const DataTableReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'GET_DATA':
            return{
                ...state,
            data:action.data,
            loading:false
            }
        case 'GET_DATA_BY_ID':
            let currdata=null
            if(state.currentData!==null && state.currentData!==undefined){
                currdata=action.data.find(i=>i.id===state.currentData.i)
                console.log(currdata)
            }
            return{
                ...state,
                params:action.params,
                currdata:currdata
            }
            default:
                return state
    }
}

export default DataTableReducer;