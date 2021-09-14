import { Drawer } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Button from '@material-ui/core/Button';

import ListItemText from '@material-ui/core/ListItemText';
import { useState } from "react"


function ProjectDrawer({ projects, setProjects, setCurrentProject }){
    const [projectsOpen, setProjectsOpen] = useState(false)    
    
    function toggleProjectDrawer(){
        setProjectsOpen(!projectsOpen)
    }

    function deleteProject(id){
        console.log("Deleting project # ", id)
        fetch(`/projects/${id}`, {method: "DELETE"})
        .then((r)=>r)
        .then(setProjects(projects.filter(p=>p.id != id)
        ))
    }

return (
       <> 
        <button onClick={toggleProjectDrawer}>Open Projects</button>
        <Drawer variant='temporary' 
        anchor='right' 
        open={projectsOpen} 
        onClose={() => toggleProjectDrawer()}>

            <List>
                {projects.map((project, index) => (
                <ListItem button key={project.id} >
                    <ListItemText primary={project.title} onClick={() => setCurrentProject(project)}/>
                    <Button onClick={() => deleteProject(project.id)}>{<DeleteForeverIcon />}</Button>
                </ListItem>
                ))}
            </List>
        </Drawer>
        </>
    )
}

export default ProjectDrawer