import {Req} from './interface/axios'
import {Home} from './pages/home'

export const App = () =>{
  console.log(Req())

  return(
    <div>
      <Home/>
    </div>
  )
}