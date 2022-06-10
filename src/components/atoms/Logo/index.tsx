import {Box} from '@mui/material';
import Typography from '../../atoms/Typography/index';
import Image from '../Images/index'

const LogoComponent = ({height=33, url, name, ...props}:any) => {
    return (
        <Box sx={{
                display: 'flex',
                alignItems: 'center'
            }} >
            <Image height={height}  alt="blinkist" component="img" src='/assets/31.png'/>
            <Typography 
            sx={{fontWeight: 'bold', fontSize: '24px'}}>
                {name}
            </Typography>
        </Box>
        
        
    );
}

export default LogoComponent;