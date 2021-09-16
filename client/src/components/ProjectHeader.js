
import { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';



function ProjectHeader({ title, description, category, id }){
    const [editState, setEditState] = useState(false)
    const [revealEditButton, setRevealEditButton] = useState(false)


    const [titleState, setTitleState] = useState(title)
    const [descriptionState, setDescriptionState] = useState(description)
    const [categoryState, setCategoryState] = useState(category)

    function updateProjectDetails(){
        setEditState(false)

        fetch(`/projects/${id}`, 
            {method: "PATCH", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                title: titleState,
                description: descriptionState,
                category: categoryState
            })
            }).then(res => res.json())
            .then(console.log)
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
                                    <Button onClick={updateProjectDetails}>{<CheckIcon />}</Button>
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