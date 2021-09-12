import {useHistory} from 'react-router-dom'
import Header from './Header'

function Home({ user, setUser }){

    const history = useHistory()

    if (!user){
      history.push('/signin')
    }

    return (
        <div>
            <Header setUser={setUser}/>
            <p>you are home</p>
        </div>
    )

}


export default Home