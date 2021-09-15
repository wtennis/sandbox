import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';


function NewProject({setCurrentProject, toggleProjectDrawer}){
    const [open, setOpen] = useState(false);
    const [newProject, setNewProject] = useState({
        title: '',
        description: '',
        category: ''
    })
    
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const classes = useStyles();


  const handleChange = (e) => {
    setNewProject({
        ...newProject,
        [e.target.name]: e.target.value
    });
}

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreate = () => {
    console.log(newProject);
    fetch('/projects', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProject)
    })
    .then(r => r.json())
    .then(r => {
      setCurrentProject(r);
      toggleProjectDrawer();
    })
  };

    return (
        <div>
          <Button
          onClick={handleClickOpen}
          variant="contained"
          color="primary"
          endIcon={<AddCircleOutlineIcon />}
         >
        New Project
      </Button>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>New Project</DialogTitle>
          <DialogContent>
            <form className={classes.container}>

              <FormControl className={classes.formControl}>
                <TextField id="standard-basic" label="Title" name ="title" onChange ={handleChange}/>
              </FormControl>
              
              <FormControl className={classes.formControl}>
                  <InputLabel id="demo-dialog-select-label">Category</InputLabel>
                  <Select
                    labelId="demo-dialog-select-label"
                    id="demo-dialog-select"
                    name = "category"
                    onChange={handleChange}
                    input={<Input />}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="Script">Script</MenuItem>
                    <MenuItem value="Creative Writing">Creative Writing</MenuItem>
                    <MenuItem value="Music">Music</MenuItem>
                    <MenuItem value="Poetry">Poetry</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>

                <FormControl className={classes.formControl}>
                  <TextareaAutosize aria-label="minimum height" minRows={3} placeholder="Description" name = "description" value={newProject.description} onChange ={(e) => handleChange(e)}/>
              </FormControl>

            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleCreate} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
    
}


export default NewProject;