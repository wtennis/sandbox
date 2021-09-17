import NewProject from './NewProject';
import { Divider, Drawer, ListItem, ListItemText, Button, Box, List } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ImageIcon from '@material-ui/icons/Image';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import HearingIcon from '@material-ui/icons/Hearing';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';



function WidgetDrawer({isOpen, toggleDrawer, currentProject, setCurrentProject, projects, setProjects}){
    
   async function addWidgetToProject(widgetName){
        if(currentProject){   
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
                break
            case "Rhymify":
                widget = {RhymifyWidget: {input_word: "orange"}}
                break
            case "Word Associator":
                widget = {WordAssociatorWidget: {input_word: "iceberg"}}
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
    }else{
        alert("Please start or select a project")
    }
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


    function renderWidgetIcon(param) {
        switch(param) {
        case 'Random Image':
            return <ImageIcon></ImageIcon>;
        case 'Text Box':
            return <TextFieldsIcon></TextFieldsIcon>;
         case 'Rhymify':
            return <HearingIcon></HearingIcon>;
        case 'Word Associator':
            return <SettingsEthernetIcon></SettingsEthernetIcon>;
        default:
            return <AllInclusiveIcon></AllInclusiveIcon>;
        }
      }



return (
       <> 
        <Drawer variant='temporary' anchor='left' open={isOpen} onClose={toggleDrawer}>
            <List>
                {["Text Box", "Random Image", "Rhymify", "Word Associator"].map((text, index) => (
                <ListItem button key={text} >
                    {renderWidgetIcon(text)}
                    <ListItemText style={{marginLeft: "12px"}}primary={text} onClick={() => addWidgetToProject(text)}/>
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


