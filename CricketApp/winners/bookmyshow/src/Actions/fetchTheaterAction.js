import * as FetchTheaterService from '../Service/theaterService.js'
import { FETCH_SUCCESSFULLY , ERROR_FETCH } from '../Reducer/TheaterReducer.js'


export const fetchTheater=(credentials)=>{
    
    return (dispatch)=>{
    
        FetchTheaterService.fetchTheater(credentials)
        .then((response)=>{
            if(response.status===200){
                
                dispatch({
                    type:FETCH_SUCCESSFULLY,
                    data:response.data
                })
            }
        }).catch((error)=>{
                dispatch({
                    type:ERROR_FETCH,
                    data:{error_msg:"Invalid Data"}
                })
        })
    }
}