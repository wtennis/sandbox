import { Drawer } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Button from '@material-ui/core/Button';

import ListItemText from '@material-ui/core/ListItemText';
import { useState } from "react"


function ProjectDrawer(){
    const [projectsOpen, setProjectsOpen] = useState(false)    
    
    function toggleProjectDrawer(){
        setProjectsOpen(!projectsOpen)
    }

    function showProject(project){
        console.log(`Showing Project #${project}`)
    }

    function deleteProject(){
        console.log("Deleting project # ?")
    }

return (
       <> 
        <button onClick={toggleProjectDrawer}>Open Projects</button>
        <Drawer variant='temporary' 
        anchor='right' 
        open={projectsOpen} 
        onClose={() => toggleProjectDrawer()}>
            <div onClick={toggleProjectDrawer}>
            <List>
                {["Project 1", "Project 2", "Project 3", "Project 4"].map((text, index) => (
                <ListItem button key={text} >
                    <ListItemText primary={text} onClick={() => showProject(text)}/>
                    <Button onClick={deleteProject}>{<DeleteForeverIcon />}</Button>
                </ListItem>
                ))}
            </List>
            </div>
        </Drawer>
        </>
    )
}

export default ProjectDrawer