const USER_API= "http://localhost:8080/user";


export const userReq = async (api ='',reqObj='',method='')=>{
    try{
        const response = await fetch(USER_API);
        if(!response.ok){
            throw Error("Api failed");
        }
    }catch(err){
        console.log(err)
    }finally{
        
    }
}



export default userReq;