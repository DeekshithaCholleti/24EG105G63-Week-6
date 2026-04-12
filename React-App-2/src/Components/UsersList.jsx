import User from './User';
function UserList(){
    const users = [
  {
    name: "Aarav Sharma",
    email: "aarav.sharma@example.com",
    image: "https://randomuser.me/api/portraits/men/11.jpg"
  },
  {
    name: "Vivaan Patel",
    email: "vivaan.patel@example.com",
    image: "https://randomuser.me/api/portraits/men/12.jpg"
  },
  {
    name: "Aditya Singh",
    email: "aditya.singh@example.com",
    image: "https://randomuser.me/api/portraits/men/13.jpg"
  },
  {
    name: "Sai Kumar",
    email: "sai.kumar@example.com",
    image: "https://randomuser.me/api/portraits/men/14.jpg"
  },
  {
    name: "Rohan Reddy",
    email: "rohan.reddy@example.com",
    image: "https://randomuser.me/api/portraits/men/15.jpg"
  },
  {
    name: "Ananya Gupta",
    email: "ananya.gupta@example.com",
    image: "https://randomuser.me/api/portraits/women/11.jpg"
  },
  {
    name: "Isha Verma",
    email: "isha.verma@example.com",
    image: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    name: "Priya Nair",
    email: "priya.nair@example.com",
    image: "https://randomuser.me/api/portraits/women/13.jpg"
  },
  {
    name: "Sneha Das",
    email: "sneha.das@example.com",
    image: "https://randomuser.me/api/portraits/women/14.jpg"
  }
];
    return(
        <div className="bg-gray-100 px-50">
           <div  className="min-h-screen grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                users.map((user)=>
                (<User userObj={user} key={user.id} />))
            }
            </div> 
        </div>
    );
}
export default UserList;