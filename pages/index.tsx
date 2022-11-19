
import { Box } from '@mui/system';
import Header from './components/Header';

import fundo from './assets/mid_guitar.jpg';
import { Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import dynamic from 'next/dynamic';


const Map = dynamic(() => import('./components/Map'), {ssr: false});


export default function Home() {

  const matches = useMediaQuery('(min-width:401px)');

  const styleTpMoreThen400 = {

    title: {
      fontSize: '62px',
      fontFamily: 'nunito',
      fontWeight: 700,
      letterSpacing: '.3rem',
      color: '#FFF',
      textDecoration: 'none',
      position: 'absolute',
      top: '15%',
      left: '11.5%',
      '&:after': {
        content: `' '`,
        display: 'block',
        marginLeft: '55%',
        width: '45%',
        height: '2px',
        background: '#50E3C2'
      },
    },
    legend: {
      fontSize: '24px',
      fontFamily: 'nunito',
      fontWeight: 400,
      letterSpacing: '.3rem',
      color: '#FFF',
      textDecoration: 'none',
      position: 'absolute',
      top: '30%',
      left: '11.5%',
      '&:after': {
        content: `' '`,
        display: 'block',
        width: '45%',
        height: '2px',
        background: '#50E3C2'
      },
    }
  }
  const styleTpLessThen400 = {

    title: {
      fontSize: '26px',
      fontFamily: 'nunito',
      fontWeight: 700,
      textAlign: 'center',
      padding: '15px 0',
      margin: '0 10%',
      color: '#fff'
    },
    legend: {
      fontSize: '14px',
      fontFamily: 'nunito',
      fontWeight: 400,
      color: '#fff',
      margin: '0 10%',
      '&:after': {
        content: `' '`,
        display: 'block',
        width: '30%',
        height: '2px',
        background: '#50E3C2'
      },
    }
  }

  return (
    <>
      <Header />

      {matches ?
        <>
          <Box sx={{
            width: '100%',
            height: 500,
            maxHeight: 500,
            background: `url(${fundo.src}) center / cover`,
          }}>

            <Typography
              sx={styleTpMoreThen400.title}>
              Arte é isso, arte é aqui
            </Typography>

            <Typography
              sx={styleTpMoreThen400.legend}>
              Encontre os artistas perfeitos para o seu evento
            </Typography>

            <input type={'text'} style={{
              all: 'unset',
              color: '#fff',
              background: '#830AD1',
              height: '40px',
              width: '200px',
              borderRadius: '4px',
              border: 'none',
              fontSize: '16px',
              fontFamily: 'nunito',
              fontWeight: 700,
              padding: '5px 12px',
              position: 'absolute',
              top: '45%',
              left: '27%',
              textDecoration: 'none'
            }} value='Foz do Iguaçu'>

            </input>

          </Box>
          <Box sx={{
            width: '70%',
            height: 700,
            background: '#830AD1',
            margin: '-3% auto',
            borderRadius: '8px',
          }}>
            <Map />
          </Box>
        </>
        :
        <Box sx={{
          width: '100%',
          height: 500,
          maxHeight: 500,
          background: '#830AD1'

        }}>

          <Typography
            sx={styleTpLessThen400.title}>
            Arte é isso, arte é aqui
          </Typography>

          <Typography
            sx={styleTpLessThen400.legend}>
            Encontre os artistas perfeitos para o seu evento
          </Typography>

        </Box>}


    </>
  )
}
