
interface paramData{
    params:{userName:string};
}


const UserName=async({params:{userName}}:paramData)=>{

    return <div>{userName}</div>
}
export default UserName;