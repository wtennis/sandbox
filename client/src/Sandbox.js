import TextBoxWidget from "./TextBoxWidget"
import RandomImageWidget from "./RandomImageWidget"



function Sandbox({ project }) {

    console.log(project)
    const widgets = project.widgets

    const widgetList = widgets.map((widget) => { switch(Object.keys(widget)[0]){
                                                      case "TextBoxWidget":
                                                            return <TextBoxWidget data={widget.TextBoxWidget.text}/>
                                                       case "RandomImageWidget":
                                                             return <RandomImageWidget image_url={widget.RandomImageWidget.image_url } />                                     
    } } )
 
    console.log(widgetList)


    return (
        <>
        <p>this is Sandbox</p>
        {widgetList}
        </>
    )
}

export default Sandbox;