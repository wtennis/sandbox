
import { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';



function ProjectHeader({ currentProject, setCurrentProject }){
    const { title, description, category, id } = currentProject
    const [editState, setEditState] = useState(false)
    const [revealEditButton, setRevealEditButton] = useState(false)

    function updateProjectDetails(){
        setEditState(false)

        fetch(`/projects/${id}`, 
            {method: "PATCH", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(currentProject)
            }).then(res => res.json())
            .then(setCurrentProject)
    }

    const handleChange = (e) => {
        setCurrentProject({
            ...currentProject,
            [e.target.name]: e.target.value
        });
    }


    return (
        <>
        <div onMouseEnter={()=> setRevealEditButton(true)}>

            {revealEditButton? <Button onClick={() => setEditState(true)}>{<EditIcon />}</Button> : null}

                <form>
                        {editState? 
                                <div>
                                    <TextField name= "title" onChange={handleChange}value={title}id="standard-basic" label="Title" />
                                    <TextareaAutosize name="description" onChange={handleChange}value={description} aria-label="minimum height" minRows={3} placeholder="Description" />
                                    <Button onClick={updateProjectDetails}>{<CheckIcon />}</Button>
                                </div>
                            : 
                                <div>
                                    <h3>{title}</h3>
                                    <p>{description}</p>
                                </div>
                            }
                </form>

        </div>

        </>
    )
}

export default ProjectHeader