import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../css/login.css';
import { FiUser } from "react-icons/fi";
import { GoKey } from "react-icons/go";
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Checkbox from '@mui/joy/Checkbox';
import Divider from '@mui/joy/Divider';
import { formLabelClasses } from '@mui/joy/FormLabel';
import { CssVarsProvider,extendTheme  } from '@mui/joy/styles';
import GlobalStyles from '@mui/joy/GlobalStyles'
import Link from '@mui/joy/Link';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import GoogleIcon from './GoogleIcon';
import CssBaseline from '@mui/joy/CssBaseline';
import signInBg from '../../Components/Assets/images/signin.png';
import logo from '../../Components/Assets/images/logo.png'
import { auth, signInWithEmailAndPassword, provider, signInWithPopup } from '../../../src/FirebaseConfig/firebase';

const theme = extendTheme({ cssVarPrefix: 'demo' });

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit= async (e) => {
    e.preventDefault();
    try{
      await signInWithEmailAndPassword(auth, username, password);
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };
  const signInWithGoogle = async (e) => {
    try{
      await signInWithPopup(auth, provider);
      navigate('/');
    } catch {
      console.log(e);
    }
  }


  return (
    <CssVarsProvider defaultMode='light' theme={theme} colorSchemeSelector="#dark-mode" modeStorageKey="dark-mode" disableTransitionOnChange>
      <CssBaseline />
      <GlobalStyles
        styles={{
          ':root': {
            '--Collapsed-breakpoint': '769px', // form will stretch when viewport is below `769px`
            '--Cover-width': '50vw', // must be `vw` only
            '--Form-maxWidth': '800px',
            '--Transition-duration': '0.4s', // set to `none` to disable transition
          },
        }}
      />
      <Box
        sx={{
          height: '100vh',
          position: 'fixed',
          right: 'clamp(0px, (100vw - var(--Collapsed-breakpoint)) * 999, 100vw - var(--Cover-width))',
          top: 0,
          bottom: 0,
          left: 0,
          transition:
            'background-image var(--Transition-duration), right var(--Transition-duration) !important',
          transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
          backgroundColor: 'background.level1',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundImage:
            `linear-gradient(to bottom, rgba(244, 185, 27, 0.64), rgba(64, 130, 66, 0.64)),url(${signInBg})`,
        
        }}>
          <Box
          sx={{
            display:{md:'flex', xs:'none'},
            flexDirection:  'column',
            py: 2,
            px: 5,
            alignContent:'center',
            justifyContent:'center',
      
            textAlign:'center',
            height:'100vh'
            
          }}>
          <div><img className='logo' style={{maxWidth:'80%'}} src={logo} alt="Unistore logo"/></div>
          <p style={{color:'white', fontSize:'18px'}}>Welcome to UniStore! Please Sign in to Continue Shopping.</p>
          </Box>
      </Box>
      <Box id='dark-mode'
        sx={{
          top:0,
          bottom:0,
          right:0,
          left:'clamp(0vw, (100vw - var(--Collapsed-breakpoint)) * 999, 100vw - var(--Cover-width))',
          width:
            'clamp(100vw - var(--Cover-width), (var(--Collapsed-breakpoint) - 100vw) * 999, 100vw)',
          transition: 'width var(--Transition-duration)',
          transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'center',
          backdropFilter: 'blur(12px)',
          backgroundColor: 'rgba(255 255 255 / 0.2)',
    
        }}
      >
        <Box id='dark-mode' className='login'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100dvh',
            width:
              'clamp(var(--Form-maxWidth), (var(--Collapsed-breakpoint) - 100vw) * 999, 100%)',
            maxWidth: '100%',
            px: 2,
          }}
        >
          
          <Box 
            component="main"
            sx={{
              my: 'auto',
              py: 2,
              pb: 5,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              width: 400,
              maxWidth: '100%',
              mx: 'auto',
              borderRadius: 'sm',
              '& form': {
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              },
              [`& .${formLabelClasses.asterisk}`]: {
                visibility: 'hidden',
              },
            }}
          >
            <Stack gap={4} sx={{ mb: 2 }}>
              <Stack gap={1}>
                <Typography level="h1">Login</Typography>
                <Typography level="body-sm">
                  Are you new?{' '}
                  <Link  level="title-sm">
                    <NavLink to="/CreateAccount" style={{ textDecoration: 'none' }}>Sign Up!</NavLink> 
                  </Link>
                </Typography>
              </Stack>
              <Button
                variant="soft"
                color="neutral"
                fullWidth
                startDecorator={<GoogleIcon />}
                sx={{
                  borderRadius: '20px'
                }}
                onClick={signInWithGoogle}
              >
                Continue with Google
              </Button>
            </Stack>
            <Divider id='dark-mode'
              sx={{
                
                  color: { xs: '#FFF', md: 'text.tertiary' },
                  '--Divider-lineColor': {
                    xs: '#FFF',
                    md: 'var(--joy-palette-divider)',
                  },
              }}
            >
              or
            </Divider>
            <Stack gap={4} sx={{ mt: 2 }}>
              <Box className='login-box'>
              <form
                onSubmit={handleSubmit}
              >
              <div className="user-box">
              <div className="inputbox" style={{color: {xs:'white', md:'black'}}}>
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                
                  <label>E-mail Address</label>
                  <div className="login-icons">
                    <FiUser />
                  </div>
              </div>   
              </div>
              
              <div className="user-box">
              <div className="inputbox">
              <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label>Password</label>
                <div className="login-icons">
                  <GoKey />
                </div>
                </div>
                </div>
                <Stack gap={4} sx={{ mt: 2 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Checkbox size="sm" label="Remember me" name="persistent" />
                    <Link level="title-sm" href="#replace-with-a-link">
                      Forgot your password?
                    </Link>
                  </Box>
                  <Button color="neutral" type="submit" fullWidth
                  sx={
                    {
                      bgcolor: 'black',
                      borderRadius:'20px'}
                    }
                  >
                    Login
                  </Button>
                </Stack>
              </form>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>
      
    </CssVarsProvider>
  );
}
