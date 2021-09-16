import { Button } from "@material-ui/core"
import ImageIcon from "@material-ui/icons/Image"

function RandomImageWidget ({ image_url, widget_id }){

    return (
        <>
            <img src={image_url} width ="250px"></img>
            <Button startIcon={<ImageIcon />}
                    >new image</Button>
        </>
    )
}

export default RandomImageWidget