import { Drawer } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';



function WidgetDrawer({isOpen, toggleDrawer, currentProject, setCurrentProject}){
    
    function addWidgetToProject(widgetName){
        console.log(`adding widget ${widgetName}`)
        let widget = {}
        switch(widgetName){
            case "Text Box":
                widget = {TextBoxWidget: {text: "This is an empty string"}}
                break
            case "Random Image":
                //Fetch Random Image
                widget = {RandomImageWidget: {image_url: "https://i.imgur.com/2bvab7y.jpeg"}}
                break
        }

        fetch("/widgets", 
        {method: "POST", 
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({project_id: currentProject.id, widget: widget})
        }).then(res => res.json())
        .then(console.log)

        currentProject.widgets.push(widget)
        setCurrentProject(currentProject)

    }

return (
       <> 
        <Drawer variant='temporary' anchor='left' open={isOpen} onClose={toggleDrawer}>
            {/* Typography Widgets! */}
            <List>
                {["Text Box", "Random Image", "Widget 3", "Widget 4"].map((text, index) => (
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