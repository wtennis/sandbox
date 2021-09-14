import {useHistory} from 'react-router-dom'
import Header from './Header'
import ProjectDrawer from './ProjectDrawer'
import WidgetDrawer from './WidgetDrawer'
import { useState, useEffect } from 'react'

function Home({ user, setUser, isLoading }){
    const [widgetDrawerOpen, setWidgetDrawerOpen] = useState(false)
    const [userProjects, setUserProjects] = useState([])
    const history = useHistory()

    if (!isLoading && !user){
      history.push('/signin')
    }

    useEffect(() => {
        if (user){
        fetch(`/${user.username}/projects`)
        .then(r => r.json())
        .then((projects) => {
            console.log('useEffect fetch user/projects fired')
        setUserProjects(projects)
        })
        }
    },[user])

    function toggleWidgetDrawer(){
        setWidgetDrawerOpen((widgetDrawerOpen) => !widgetDrawerOpen)
    }

    return (
        <div>
            <Header setUser={setUser} toggleWidgetDrawer={toggleWidgetDrawer}/>
            <ProjectDrawer />
            <WidgetDrawer isOpen={widgetDrawerOpen} toggleDrawer={toggleWidgetDrawer}/>
            <p>you are home</p>
        </div>
    )
}

export default Home