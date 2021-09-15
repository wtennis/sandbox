
import TextBoxWidget from "./TextBoxWidget"
import RandomImageWidget from "./RandomImageWidget"
import { Card } from '@material-ui/core'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time




function Sandbox({ currentProject }) {


    function removeWidget(id, type){
        fetch(`/widgets/${id}`, {method: 'DELETE', headers: {"Content-Type": "application/json"}, body: JSON.stringify({type: type})})
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
        <p>this is Sandbox</p>
        <h1 style = {{color: "#3F51B5"}}>This is {currentProject.title}</h1>
        {widgetList.map((widget) => { 
            return (
                <Draggable>
                    <Card raised>
                        <CardContent>
                            {widget}
                            <CardActions>
                                <Button onClick={()=> removeWidget(widget.props.widget_id, widget.props.widget_type)}> Remove from Project</Button>
                            </CardActions>
                        </CardContent>
                    </Card>
                </Draggable>
                   )
        })}
        </>

    )
}

export default Sandbox;