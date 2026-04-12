function User(props){
   const{userObj}=props;
    return(
        <div className="border-2 text-center m-7 rounded-2xl">
            <img className="block px-8 m-8" src={userObj.image} alt="image"/>
            <p className="mt-5">name : {userObj.name}</p>
            <p>Email : {userObj.email}</p>
            <button className="bg-blue-100">Profile</button>
        </div>
    );
}
export default User;