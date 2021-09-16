import { Drawer } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';



function WidgetDrawer({isOpen, toggleDrawer, currentProject, setCurrentProject}){
    
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
        </Drawer>
        </>
    )
}

export default WidgetDrawer


