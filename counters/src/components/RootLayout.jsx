import { Outlet } from 'react-router-dom'
import Header from './Header'
function RootLayout() {
  return (
    <div>
        <Header />
        <div className="min-h-screen bg-gray-300 mx-9 m-1">
            <Outlet />
        </div>  
        
    </div>
  )
}

export default RootLayout