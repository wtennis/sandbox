import { Divider, Drawer } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Button from '@material-ui/core/Button';
import NewProject from './NewProject';
import Box from '@material-ui/core/Box';


function WidgetDrawer({isOpen, toggleDrawer, currentProject, setCurrentProject, projects, setProjects}){
    
   async function addWidgetToProject(widgetName){
        console.log(`adding widget ${widgetName}`)
        let widget = {}
        switch(widgetName){
            case "Text Box":
                widget = {TextBoxWidget: {text: "..."}}
                break
            case "Random Image":
                let response = await fetch("https://picsum.photos/300")
                widget = {RandomImageWidget: {image_url: response.url
                }}
            case "Rhymify":
                widget = {RhymifyWidget: {input_word: "orange"}}
                break
        }

        fetch("/widgets", 
        {method: "POST", 
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({project_id: currentProject.id, widget: widget})
        }).then(res => res.json())
        .then((newWidget) =>{            
            currentProject.widgets.push(newWidget)
            setCurrentProject({...currentProject})
        })
    }

    //Things for the project portion of the drawer
    function handleClick(project){
        setCurrentProject(project);
        console.log(currentProject)
        toggleDrawer();
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

return (
       <> 
        <Drawer variant='temporary' anchor='left' open={isOpen} onClose={toggleDrawer}>
            {/* Typography Widgets! */}
            <List>
                {["Text Box", "Random Image", "Rhymify", "Widget 4"].map((text, index) => (
                <ListItem button key={text} >
                    <ListItemText primary={text} onClick={() => addWidgetToProject(text)}/>
                </ListItem>
                ))}
            </List>
            <Divider />
            <Box mx="auto" m={2}>
             <NewProject setCurrentProject={setCurrentProject} toggleProjectDrawer={toggleDrawer}/>
            </Box>
            <List>
                {projects.map((project, index) => (
                <ListItem button key={project.id} >
                    <Button onClick={() => deleteProject(project.id)}>{<DeleteForeverIcon />}</Button>
                    <ListItemText primary={project.title} onClick={() => handleClick(project)}/>
                </ListItem>
                ))}
            </List>
        </Drawer>
        </>
    )
}

export default WidgetDrawer


