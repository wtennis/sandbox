
import TextBoxWidget from "./TextBoxWidget"
import RandomImageWidget from "./RandomImageWidget"
import { Card } from '@material-ui/core'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time
import Grid from '@material-ui/core/Grid';

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
                                                            return <TextBoxWidget key={ index } data={widget.TextBoxWidget.text} widget_id={widget.TextBoxWidget.id} widget_type={"TextBoxWidget"}/>
                                                       case "RandomImageWidget":
                                                             return <RandomImageWidget key={ index } image_url={widget.RandomImageWidget.image_url} widget_id={widget.RandomImageWidget.id} widget_type={"RandomImageWidget"} />                                     
    } } )
 
    console.log(widgetList)


    return (
        <>
        <h1 style = {{color: "#3F51B5"}}>This is {currentProject.title}</h1>
        <div>
            

        </div>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
        {widgetList.map((widget) => { 
            return (
                
                    <Grid item xs={3}>
                        <Draggable>
                            <Card raised>
                                <CardContent>
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