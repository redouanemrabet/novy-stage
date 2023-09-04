import React from 'react'
// Material ui components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper';
import StatusButton from './buttons/StatusButton';
import UpdateValidateReject from './icons/UpdateValidateReject';
const TableObjectives = ({rows}) => {
  return (
    <div>
 <Paper elevation={0}  sx={{ marginBottom: '20px',padding:"16px",backgroundColor:"rgb(240, 233, 238);",width:"100%" }}>
    <Box display="flex" justifyContent="space-between" padding="16px">
    <Box flex={1}>
      <Typography>Collaborateur</Typography>
      </Box>
      <Box flex={1}>
      <Typography>Nom Objectif</Typography>
      </Box>
      <Box flex={1}>
      <Typography>Type entretien</Typography>
      </Box>
      <Box flex={1}>
      <Typography>Durée</Typography>
      </Box>
      <Box flex={1}>
      <Typography>Réalisation</Typography>
      </Box>
      <Box flex={1}>
      <Typography>Status</Typography>
      </Box>
      <Box flex={1}>
      <Typography>Actions</Typography>
      </Box>
      {/* <Box flex={1}>
      <Typography>Action</Typography>
      </Box> */}
    </Box>
  </Paper>
 

     {rows.currentData().map(row => (
         <Paper elevation={0}  sx={{ marginBottom: '20px' ,padding:"16px",backgroundColor:"rgb(255, 255, 255);",width:"100%"}}>
         <Box display="flex" justifyContent="space-between" padding="16px">
         <Box flex={1}>
          <Typography>{row.collaborateur}</Typography>
        </Box>
        <Box flex={1}>
          <Typography>{row.objectif_name}</Typography>
        </Box>
        <Box flex={1}>
          <Typography>{row.type_entretien}</Typography>
        </Box>
        <Box flex={1}>
          <Typography>{row.duree}</Typography>
        </Box>
        <Box flex={1} >
          <Typography>{row.realisation}</Typography>
        </Box>
        <Box flex={1} sx={{paddingRight:"18px"}}>
          <Typography>
            <StatusButton textButton={row.status}/>
          </Typography>
        </Box>
        <Box flex={1}>
          <Typography>
<UpdateValidateReject/>
          </Typography>
        </Box>
         </Box>
       </Paper>  
       ))}
 </div>
  )
}

export default TableObjectives
