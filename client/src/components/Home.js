import {useHistory} from 'react-router-dom'
import Header from './Header'
import ProjectDrawer from './ProjectDrawer'
import WidgetDrawer from './WidgetDrawer'
import { useState, useEffect } from 'react'
import NewProject from './NewProject'
import Sandbox from './Sandbox'

function Home({ user, setUser, isLoading }){
    const [widgetDrawerOpen, setWidgetDrawerOpen] = useState(true)
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
        <div style = {{background: "rgb(246,93,145)", background: "linear-gradient(232deg, rgba(246,93,145,1) 0%, rgba(255,192,92,1) 100%)", height: "2000px"}}>
            <Header setUser={setUser} toggleWidgetDrawer={toggleWidgetDrawer}/>
            {!currentProject ? <> </> :<Sandbox currentProject={currentProject} setCurrentProject={setCurrentProject}/>}
            <WidgetDrawer 
                isOpen={widgetDrawerOpen} 
                toggleDrawer={toggleWidgetDrawer}
                currentProject={currentProject}
                setCurrentProject={setCurrentProject} 
                projects={userProjects} 
                setProjects={setUserProjects}   
                />
        </div>
    )
}

export default Home