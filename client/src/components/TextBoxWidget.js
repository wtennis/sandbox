import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { useState } from 'react'
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles } from '@material-ui/core/styles';

function TextBoxWidget({ data, widget_id }){
const [textContent, setTextContent] = useState(data)

    const useStyles = makeStyles((theme) => ({
        button: {
        margin: theme.spacing(1),
        },
    }));

    const classes = useStyles();

    
    function handleChange(e){
        setTextContent(e.target.value)
    }

    function saveText(){
        console.log(textContent)
        fetch(`/text_box_widgets/${widget_id}`, 
        {method: "PATCH", 
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({text: textContent})
        }).then(res => res.json())
        .then(console.log)
    }

    return (
        <>
            <p>Write some words</p>
            <TextareaAutosize aria-label="minimum height" value = {textContent} minRows={8} onChange={(e)=> handleChange(e)}/>
            <br></br>
            <Button
                variant="contained"
                onClick={saveText}
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<SaveIcon />}
                >
                Save
             </Button>
        </>
    )
}

export default TextBoxWidget
