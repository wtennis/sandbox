
import TextBoxWidget from "./TextBoxWidget"
import RandomImageWidget from "./RandomImageWidget"



function Sandbox({ currentProject }) {

    console.log(currentProject)
    const widgets = currentProject.widgets

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
        <h1 style = {{color: "#3F51B5"}}>This is {currentProject.title}</h1>
        {widgetList}
        </>

    )
}

export default Sandbox;