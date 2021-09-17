import {useHistory} from 'react-router-dom'
import Header from './Header'
import WidgetDrawer from './WidgetDrawer'
import { useState, useEffect } from 'react'
import Sandbox from './Sandbox'
import { Button } from '@material-ui/core';


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

    function handleGetStarted(){
        toggleWidgetDrawer();
    }


    return (
        <div>
            <Header setUser={setUser} toggleWidgetDrawer={toggleWidgetDrawer}/>
            {!currentProject ? 
            <>
            <div style={{marginTop: "5%", marginLeft: "36%"}}>
                <Button onClick={handleGetStarted}><h1 style = {{fontSize: "50px"}}className="gluten">Get Started</h1></Button>
            </div>
            </> 
            :<Sandbox currentProject={currentProject} setCurrentProject={setCurrentProject}/>}
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