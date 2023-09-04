"use client"
import React,{ useState} from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import NotificationDropdown from '../components/NotificationDropdown'
import TableContainer from '@mui/material/TableContainer'
import TableObjectives from '../components/TableObjectives'
import FiltreButton from '../components/buttons/FiltreButton'
import AddButton from '../components/buttons/AddButton'
import ButtonClose from '../components/buttons/ButtonClose'
import SmallButton from '../components/buttons/SmallButton'
import CustomPagination from '../components/pagination/CustomPagination'
import { StyledEngineProvider } from '@mui/material/styles';
import {default as rows } from '../constantes/data.json'
import usePagination from "../components/pagination/Pagination";
import LeftModal from '../components/modals/LeftModal'
const ShowObjectives = () => {
 
  let [page, setPage] = useState(1);
  const PER_PAGE = 3;

  const count = Math.ceil(rows.length / PER_PAGE);
  const _DATA = usePagination(rows, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
    
  return (
    
<Grid container   alignItems="center">
 

   
  

    {/* Ajouter un objectif */}
    <Grid item xs={12}>
              <Box
                sx={{
                  gap: 5,
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Box    sx={{
                  gap: 5,
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <Typography variant="h5" component="h1"  sx={{ mr: 2 }}>Les Objectives</Typography>
                 <NotificationDropdown></NotificationDropdown>
                  </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                 {/* modal form */}
                <LeftModal/> 
                </Box>
              </Box>
            </Grid>
    <Grid item xs={12} style={{ display: "flex", flexDirection: "column", alignItems: "end" }}>
      
    </Grid>

    {/* Rechercher & Filtrer */}
    <Grid container spacing={2} direction="column" alignItems="center" justifyContent="center">
      {/* Titre */}
      <Grid item>
        <Typography variant="h4" component="h1" style={{fontWeight:500}}>
          138 Collaborateurs
        </Typography>
      </Grid>

      {/* Zone de recherche (Text Input) */}
      {/* <Grid item>
        <TextField label="Recherche des objectives" variant="standard" style={{width:"400px"}} InputLabelProps={{
          style: {
            textAlign: "center",
          },
        }}/>
      </Grid> */}

      {/* Boutons de filtrage */}
      <Grid item container style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center",gap: '16px' }}>
       
       <FiltreButton/>
      </Grid>
    </Grid>


     {/* Table pour afficher les objectifs */}
    <Grid item xs={12} style={{ display: "flex", flexDirection: "column", alignItems: "end" }}>
      <Button type='submit' variant='contained' size='large' style={{backgroundColor:"transparent",color:"rgb(255, 6, 126)",border:"1px solid rgba(255, 6, 126, 0.5)"}}>
        Exporter tous les objectifs
      </Button>
    </Grid>
    <Grid sx={{ width: '100%', marginTop: '20px', justifyContent: 'center', alignItems: 'center' }}>
      <Box>
      <TableObjectives rows={_DATA} />
      </Box>
      <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
           <CustomPagination count={count} page={page} handleChange={handleChange}/>
      </Box>
            
   </Grid>
 </Grid>
  )
}

export default ShowObjectives
