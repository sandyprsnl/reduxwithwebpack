

export const fetchAPImiddleware = state=>next=>action=>{
    const {APIURL,onSuccess,loading,onError}= action;
    if(loading){
        state.dispatch({type:loading});
    }
    if(action.type== 'fetchAPI'){
        ( async ()=>{
            try {
                const response = await fetch(APIURL);
                const body = await response.json();
                state.dispatch({type:onSuccess,payload:{tasks:body.todos}});  
            } catch (error) {
                state.dispatch({type:onError,payload:{error:error.message}});
            }

        })()

    }
    next(action);
}  