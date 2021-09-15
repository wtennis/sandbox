import { Drawer } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';
import { useState } from "react"
import NewProject from './NewProject';


function ProjectDrawer({ projects, setProjects, currentProject, setCurrentProject }){
    const [projectsOpen, setProjectsOpen] = useState(true)    
    
    function toggleProjectDrawer(){
        setProjectsOpen(!projectsOpen)
    }

    function deleteProject(id){
        if (currentProject && currentProject.id == id){
            setCurrentProject(null)
        }

        fetch(`/projects/${id}`, {method: "DELETE"})
        .then((r)=>r)
        .then(setProjects(projects.filter(p=>p.id != id)
        ))
    }

    function handleClick(project){
        setCurrentProject(project);
        toggleProjectDrawer();
        // fetch data for this project
        // setCurrentProjectData (pass into this component from Home)
        // currentProjectData should be passed down to Sandbox to render draggables
    }

return (
       <> 
        <button onClick={toggleProjectDrawer}>Open Projects</button>
        <Drawer variant='temporary' 
        anchor='right' 
        open={projectsOpen} 
        onClose={() => toggleProjectDrawer()}>
            <NewProject/>
            <List>
                {projects.map((project, index) => (
                <ListItem button key={project.id} >
                    <ListItemText primary={project.title} onClick={() => handleClick(project)}/>

                    <Button onClick={() => deleteProject(project.id)}>{<DeleteForeverIcon />}</Button>
                </ListItem>
                ))}
            </List>
        </Drawer>
        </>
    )
}

export default ProjectDrawer