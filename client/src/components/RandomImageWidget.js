import { Button } from "@material-ui/core"
import ImageIcon from "@material-ui/icons/Image"

function RandomImageWidget ({ widget, currentProject, setCurrentProject }){


    async function newImage(){
        let response = await fetch("https://picsum.photos/300")
        widget.RandomImageWidget.image_url = response.url
        setCurrentProject({...currentProject})
        response = await fetch(`/random_image_widgets/${widget.RandomImageWidget.id}`, {method: "PATCH", 
                                                        headers:{"Content-Type": "application/json"}, 
                                                        body: JSON.stringify({image_url: widget.RandomImageWidget.image_url})})
        
    }

    let image_url= widget.RandomImageWidget.image_url
    return (
        <>
            <img src={image_url} width ="250px"></img>
            <Button startIcon={<ImageIcon />} onClick={newImage}>new image</Button>
        </>
    )
}

export default RandomImageWidget