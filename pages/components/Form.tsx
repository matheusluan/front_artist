import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Autocomplete, Grid, IconButton, StepIcon, Tooltip, Typography } from '@mui/material';

export default function Form() {

    const cidades = [
        { label: 'Foz do Iguaçu' },
        { label: 'Cascavel' },
        { label: 'Santa Terezinha'}
    ]

    const estados = [
        { label: 'Paraná' },
        { label: 'Santa Catarina' },
        { label: 'São Paulo'}
    ]

    const orcamentos = [
        { label: 'R$ 100 á R$ 200' },
        { label: 'R$ 201 á R$ 500' },
        { label: 'R$ 501 á R$ 1000' },
    ]
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '99%', background: '#F6F6F6', borderRadius: '8px', color: '#000' },
                '& 	.MuiInputLabel-root': { background: '#F6F6F6', borderRadius: '8px', color: '#000', padding: '2px', fontWeight: '400' },
                background: '#B23AFF',
                borderRadius: '8px',
                padding: '10px 15px'
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField label="Nome" />                
                <TextField label="E-mail" />
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField label="CPF ou CNPJ" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField label="Telefone" />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                    <Autocomplete
                        disablePortal
                        options={cidades}
                        renderInput={(params) => <TextField {...params} label="Cidade" />}
                    />
                    </Grid>
                    <Grid item xs={6}>
                    <Autocomplete
                        disablePortal                        
                        options={estados}
                        renderInput={(params) => <TextField {...params} label="Estado" />}
                    />
                    </Grid>
                </Grid>
                <Autocomplete
                        disablePortal                        
                        options={orcamentos}
                        renderInput={(params) => <TextField {...params} label="Orçamento" />}
                    />
               <Typography> Midias Sociais</Typography>
                <Grid container spacing={2}>                
                    <Grid item xs={6}>
                        <TextField label="CPF ou CNPJ" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField label="Telefone" />
                    </Grid>
                </Grid>    


            </div>
        </Box>
    );
}