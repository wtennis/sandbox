import {useHistory} from 'react-router-dom'
import Header from './Header'

function Home({ user, setUser, isLoading }){

    const history = useHistory()
    console.log('in Home above history')
    console.log(user)

    if (!isLoading && !user){
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