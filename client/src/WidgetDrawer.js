import { Drawer } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';



function WidgetDrawer({isOpen, toggleDrawer}){
    
    function showWidget(project){
        console.log(`Showing Project #${project}`)
    }

return (
       <> 
        <Drawer variant='temporary' anchor='left' open={isOpen} onClose={toggleDrawer}>
            <List>
                {["Widget 1", "Widget 2", "Widget 3", "Widget 4"].map((text, index) => (
                <ListItem button key={text} >
                    <ListItemText primary={text} onClick={() => showWidget(text)}/>
                </ListItem>
                ))}
            </List>
        </Drawer>
        </>
    )
}

export default WidgetDrawer