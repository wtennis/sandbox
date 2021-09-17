
import { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import { Box } from '@material-ui/core';



function ProjectHeader({ currentProject, setCurrentProject }){
    const { title, description, category, id } = currentProject
    const [editState, setEditState] = useState(false)
    const [revealEditButton, setRevealEditButton] = useState(false)

    function updateProjectDetails(){
        setEditState(false)
        setRevealEditButton(false)
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
        <Box 
        className="gluten" 
        style={{
            width: "40%", 
            margin:"0 auto",
            marginTop: "20px",
            borderRadius: 10,
            border: "1px solid #B34FAE",
            boxShadow: "1px 3px 1px #B34FAE"
        }}
        onMouseEnter={()=> setRevealEditButton(true)} 
        onMouseLeave={()=> setRevealEditButton(false)}>
                <form style={{padding: "2px", margin: "auto 25px"}}>
                        {revealEditButton? <Button style= {{float: "right"}}size="small" color="inherit"onClick={() => setEditState(true)}>{<EditIcon />}</Button> : null}
                        {editState? 
                                <div>
                                    <TextField fullWidth="true" name="title" onChange={handleChange}value={title}id="standard-basic" label="Title" />
                                    <TextareaAutosize style={{width: "80%"}}name="description" onChange={handleChange}value={description} aria-label="minimum height" minRows={3} placeholder="Description" />
                                    <Button style= {{float: "right"}} color="inherit" onClick={updateProjectDetails}>{<CheckIcon />}</Button>

                                </div>
                            : 
                                <div>
                                    <h2>{title}</h2>
                                    <p>{description}</p>
                                </div>
                            }
                </form>
        </Box>
        </>
    )
}

export default ProjectHeader