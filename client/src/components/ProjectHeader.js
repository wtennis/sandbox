
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
        <div className="gluten" style={{marginLeft: "20px", marginTop: "20px", width: "40%", margin:"0 auto"}}onMouseEnter={()=> setRevealEditButton(true)} onMouseLeave={()=> setRevealEditButton(false)}>
                <form>
                        {revealEditButton? <Button style= {{float: "right"}}size="small" color="inherit"onClick={() => setEditState(true)}>{<EditIcon />}</Button> : null}
                        {editState? 
                                <div style={{margin: '20px'}}>
                                    <TextField name= "title" onChange={handleChange}value={title}id="standard-basic" label="Title" />
                                    <TextareaAutosize name="description" onChange={handleChange}value={description} aria-label="minimum height" minRows={3} placeholder="Description" />
                                    <Button style= {{float: "right"}}size="small" color="inherit" onClick={updateProjectDetails}>{<CheckIcon />}</Button>
                                </div>
                            : 
                                <div>
                                    <h2>{title}</h2>
                                    <p>{description}</p>
                                </div>
                            }
                </form>
        </div>

        </>
    )
}

export default ProjectHeader