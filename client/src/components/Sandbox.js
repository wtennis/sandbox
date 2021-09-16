
import TextBoxWidget from "./TextBoxWidget"
import RandomImageWidget from "./RandomImageWidget"
import { Card } from '@material-ui/core'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import ProjectHeader from "./ProjectHeader";

import { CardHeader } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ImageIcon from '@material-ui/icons/Image';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';





function Sandbox({ currentProject, setCurrentProject }) {

    function removeWidget(id, type){
        fetch(`/widgets/${id}`, {method: 'DELETE', 
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify({type: type})})
        console.log(id, type)
        currentProject.widgets = currentProject.widgets.filter((w) => {
                                                                        if(w[Object.keys(w)[0]].id == id && type == Object.keys(w)[0]){
                                                                            return false
                                                                        }
                                                                            return true
                                                                        } )
        setCurrentProject({...currentProject})
    }

    console.log(currentProject)
    const widgets = currentProject.widgets
    const widgetList = widgets.map((widget, index) => { switch(Object.keys(widget)[0]){
                                                      case "TextBoxWidget":
                                                            return <TextBoxWidget   key={ index } 
                                                                                    data={widget.TextBoxWidget.text} 
                                                                                    widget_id={widget.TextBoxWidget.id} 
                                                                                    widget_type={"TextBoxWidget"}
                                                                                    color= "#05A985"
                                                                                    />
                                                       case "RandomImageWidget":
                                                             return <RandomImageWidget key={ index } 
                                                                                        widget={widget} 
                                                                                        currentProject={currentProject}
                                                                                        setCurrentProject={setCurrentProject} 
                                                                                        widget_type={"RandomImageWidget"}
                                                                                        color="#F65D91"
                                                                                        />                                     
    } } )
 
    console.log(widgetList)

    function renderWidgetIcon(param) {
        switch(param) {
          case 'RandomImageWidget':
            return <ImageIcon></ImageIcon>;
            case 'TextBoxWidget':
            return <TextFieldsIcon></TextFieldsIcon>;
          default:
            return <AllInclusiveIcon></AllInclusiveIcon>;
        }
      }

    return (
        <>
            <div>
                 <ProjectHeader currentProject={currentProject} setCurrentProject={setCurrentProject}/>
            </div>
            
        <Grid container spacing={3} justifyContent="center" alignItems="center">
        {widgetList.map((widget, index) => { 
            return (
                
                    <Grid item xs={3} key={index}>
                        <Draggable cancel="strong">
                            <Card raised>
                            <CardHeader
                                    style={{ backgroundColor: widget.props.color }}
                                    avatar={
                                    <Avatar style={{ backgroundColor: "#3F51B5" }} aria-label="recipe">
                                        {renderWidgetIcon(widget.props.widget_type)}
                                    </Avatar>
                                    }
                                    // action={
                                    // <IconButton aria-label="settings">
                                    //     <MoreVertIcon />
                                    // </IconButton>
                                    // }
                                />
                                <strong>
                                    <CardContent className="no-cursor">
                                        {widget}
                                        <CardActions>
                                            <Button
                                                variant="contained"
                                                onClick={()=> removeWidget(widget.props.widget_id, widget.props.widget_type)}
                                                color="secondary"
                                                size="small"
                                                startIcon={<DeleteIcon />}
                                                >
                                                Delete
                                            </Button>
                                        </CardActions>
                                    </CardContent>
                                </strong>
                            </Card>
                        </Draggable>
                    </Grid>    
                
                   )
        })}
        </Grid>
        </>

    )
}

export default Sandbox;