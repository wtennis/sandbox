
import ProjectHeader from "./ProjectHeader";
import TextBoxWidget from "./widgets/TextBoxWidget"
import RandomImageWidget from "./widgets/RandomImageWidget"
import RhymifyWidget from "./widgets/RhymifyWidget"
import WordAssociatorWidget from "./widgets/WordAssociatorWidget"
import { Card, CardHeader, CardContent, Avatar, IconButton, Grid } from '@material-ui/core'
import Draggable from 'react-draggable';
import DeleteIcon from '@material-ui/icons/Delete';
import ImageIcon from '@material-ui/icons/Image';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import HearingIcon from '@material-ui/icons/Hearing';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';




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
                                                                                        widget_id={widget.RandomImageWidget.id} 
                                                                                        currentProject={currentProject}
                                                                                        setCurrentProject={setCurrentProject} 
                                                                                        widget_type={"RandomImageWidget"}
                                                                                        color="#F65D91"
                                                                                        /> 
                                                        case "RhymifyWidget":
                                                             return <RhymifyWidget key={ index } 
                                                                                        widget={widget} 
                                                                                        widget_id={widget.RhymifyWidget.id} 
                                                                                        widget_type={"RhymifyWidget"}
                                                                                        input_word={widget.RhymifyWidget.input_word}
                                                                                        color="#F9F871"
                                                                                        />       
                                                        case "WordAssociatorWidget":
                                                             return <WordAssociatorWidget key={ index } 
                                                                                        widget={widget} 
                                                                                        widget_id={widget.WordAssociatorWidget.id} 
                                                                                        widget_type={"WordAssociatorWidget"}
                                                                                        input_word={widget.WordAssociatorWidget.input_word}
                                                                                        color="#C9FCE9"
                                                                                        />                                    
    } } )
 
    console.log(widgetList)

    function renderWidgetIcon(param) {
        switch(param) {
        case 'RandomImageWidget':
            return <ImageIcon></ImageIcon>;
        case 'TextBoxWidget':
            return <TextFieldsIcon></TextFieldsIcon>;
         case 'RhymifyWidget':
            return <HearingIcon></HearingIcon>;
        case 'WordAssociatorWidget':
            return <SettingsEthernetIcon></SettingsEthernetIcon>;
        default:
            return <AllInclusiveIcon></AllInclusiveIcon>;
        }
      }

    return (
        <div style={{width: "95%", margin: "auto"}}>
            <div>
                 <ProjectHeader currentProject={currentProject} setCurrentProject={setCurrentProject}/>
            </div>
            
        <Grid container spacing={2} justifyContent="center" >
        {widgetList.map((widget, index) => { 
            return (
                    
                    <Grid item xs={4} sm={3} lg={2} key={index}>
                        <Draggable cancel="strong">
                            <Card raised >
                            <CardHeader
                                    style={{ backgroundColor: widget.props.color }}
                                    avatar={
                                    <Avatar style={{ backgroundColor: "#3F51B5" }} aria-label="recipe">
                                        {renderWidgetIcon(widget.props.widget_type)}
                                    </Avatar>
                                    }
                                    action={
                                    <IconButton onClick={()=> removeWidget(widget.props.widget_id, widget.props.widget_type)}>
                                        <DeleteIcon />
                                    </IconButton>
                                    }
                                />
                                <strong>
                                    <CardContent className="no-cursor">
                                        {widget}
                                    </CardContent>
                                </strong>
                            </Card>
                        </Draggable>
                    </Grid>
                   )
        })}
        </Grid>
        </div>    


    )
}

export default Sandbox;