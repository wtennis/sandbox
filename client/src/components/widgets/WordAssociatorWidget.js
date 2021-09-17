import React, { useState } from 'react'
import { TextField } from '@material-ui/core'
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import { IconButton } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';



function WordAssociatorWidget({ input_word }){
    const [input, setInput] = useState(input_word)
    const [fetchedWords, setFetchedWords] = useState([])

    async function fetchRhymes(){
        let response = await fetch(`https://api.datamuse.com/words?rel_trg=${input}`)
        .then(r=> { if(r.ok) 
            return r.json()
        })
        setFetchedWords(response)
    }


    return (
        <>
            <div>
                <TextField
                        id="outlined-required"
                        value={input}
                        onChange={(e)=> setInput(e.target.value)}
                    />
                <IconButton style={{backgroundColor: "#C9FCE9", float: "right"}} onClick={fetchRhymes} size="small" color="primary">
                    <SettingsEthernetIcon fontSize="small" />
                </IconButton>
            </div>
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

export default WordAssociatorWidget
