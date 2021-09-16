
import { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';



function ProjectHeader({ title, description, category }){
    const [editState, setEditState] = useState(false)
    const [revealEditButton, setRevealEditButton] = useState(false)


    const [titleState, setTitleState] = useState(title)
    const [descriptionState, setDescriptionState] = useState(description)

    function handleSave(){
        console.log('save clicked')
        setEditState(false)
        // fetch POST to project (lift out?)
    }
    


    return (
        <>
        <div onMouseEnter={()=> setRevealEditButton(true)}>

            {revealEditButton? <Button onClick={() => setEditState(true)}>{<EditIcon />}</Button> : null}

                <form>
                        {editState? 
                                <div>
                                    <TextField onChange={(e)=> setTitleState(e.target.value)}value={titleState}id="standard-basic" label="Title" />
                                    <TextareaAutosize onChange={(e)=> setDescriptionState(e.target.value)}value={descriptionState} aria-label="minimum height" minRows={3} placeholder="Description" />
                                    <Button onClick={handleSave}>{<CheckIcon />}</Button>
                                </div>
                            : 
                                <div>
                                    <h3>{titleState}</h3>
                                    <p>{descriptionState}</p>
                                </div>
                            }
                </form>

        </div>

        </>
    )
}

export default ProjectHeader