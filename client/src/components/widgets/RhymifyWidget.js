import React, { useState } from 'react'
import { TextField } from '@material-ui/core'
import HearingIcon from '@material-ui/icons/Hearing';
import { IconButton } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


function RhymifyWidget({ input_word }){
    const [input, setInput] = useState(input_word)
    const [fetchedWords, setFetchedWords] = useState([])

    async function fetchRhymes(){
        let response = await fetch(`https://api.datamuse.com/words?rel_rhy=${input}`)
        .then(r=> { if(r.ok) 
            return r.json()
        })
        setFetchedWords(response)
    }


    return (
        <>
             <TextField
                id="outlined-required"
                value={input}
                onChange={(e)=> setInput(e.target.value)}
            />
        <IconButton  style={{backgroundColor: "#F9F871", float: "right"}} onClick={fetchRhymes} size="small" color="primary">
            <HearingIcon fontSize="small" />
        </IconButton>
        <Grid style = {{marginTop: '20px'}} container spacing={4} justifyContent="center" alignItems="center">
            {fetchedWords.map((obj, index) => { 
                return (
                <Typography key={index}>| {obj.word} |</Typography>
                )}
                )}
            </Grid>
        </>
    )
}

export default RhymifyWidget
