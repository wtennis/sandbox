
import { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

function ProjectHeader(){
const [editTitle, setEditTitle] = useState(false)
const [editDescription, setEditDescription] = useState(false)

//  create state for "currentProject" and set it in when a project is clicked in the drawer 
// If currentProject is null, render a "Get Started view"

    return (
        <div>
                <form>
                <p>Project Header</p>
                    <div onMouseEnter= {() => setEditTitle(true)} onMouseLeave= {() => setEditTitle(false)}>
                        {editTitle? 
                            <TextField id="standard-basic" label="Title" />
                         : 
                            <h3>Title</h3>}
                         
                    </div>

                    <div onMouseEnter= {() => setEditDescription(true)} onMouseLeave= {() => setEditDescription(false)}>
                        {editDescription?
                            <TextareaAutosize aria-label="minimum height" minRows={3} placeholder="Description" />
                         : 
                            <h3>Description</h3>}
                    </div>
                    
                {/* <br></br>
                <TextareaAutosize aria-label="minimum height" minRows={3} placeholder="Description" /> */}
                </form>

        </div>
    )
}

export default ProjectHeader