import {useHistory} from 'react-router-dom'
import Header from './Header'
import ProjectDrawer from './ProjectDrawer'
import WidgetDrawer from './WidgetDrawer'
import { useState, useEffect } from 'react'
import GetStarted from './GetStarted'
import Sandbox from './Sandbox'

function Home({ user, setUser, isLoading }){
    const [widgetDrawerOpen, setWidgetDrawerOpen] = useState(false)
    const [userProjects, setUserProjects] = useState([])
    const [currentProject, setCurrentProject] = useState(null)
    const history = useHistory()

    if (!isLoading && !user){
      history.push('/signin')
    }

    useEffect(() => {
        if (user){
        fetch(`/projects`)
        .then(r => r.json())
        .then((projects) => {
            setUserProjects(projects)
            console.log(projects)
        })
        }
    },[user])

    function toggleWidgetDrawer(){
        setWidgetDrawerOpen((widgetDrawerOpen) => !widgetDrawerOpen)
    }

    return (
        <div>
            <Header setUser={setUser} toggleWidgetDrawer={toggleWidgetDrawer}/>
            {!currentProject ? <GetStarted setCurrentProject = {setCurrentProject} setUserProjects={setUserProjects}/> :< Sandbox project={currentProject} />}
            <ProjectDrawer 
                projects={userProjects} 
                setProjects={setUserProjects}
                setCurrentProject={setCurrentProject}
                 />
            <WidgetDrawer isOpen={widgetDrawerOpen} toggleDrawer={toggleWidgetDrawer}/>
            <p>you are home</p>
        </div>
    )
}

export default Home