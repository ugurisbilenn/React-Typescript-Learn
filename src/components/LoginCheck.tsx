import {useState} from 'react'

type userType = {
    name:string;
    email:string;
    phone:string;

}
function LoginCheck() {
    const [user, setUser] = useState<userType | null>({} as userType);

    const handleLogin = () => {
        setUser({
            name:'Uğur',
            email:'cc@hotmail.com',
            phone:'555555555',

        });
    };
    const handleLogout = () => {
        setUser({} as userType);
    };

  return (
    <div>
      <button onClick={handleLogin} >Giris Yap</button>
      <button onClick={handleLogout} >Cikis Yap</button>

      <div>
        <p>{user?.name}</p>
        <p>{user?.email}</p>
        <p>{user?.phone}</p>
        </div>
    </div>
  )
}

export default LoginCheck
