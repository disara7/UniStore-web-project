import React, { useState } from 'react';
import { useNavigate,NavLink } from 'react-router-dom';
import '../css/login.css';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
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
import { auth, firestore, createUserWithEmailAndPassword, collection, doc, setDoc, provider, signInWithPopup, fetchSignInMethodsForEmail } from '../../../src/FirebaseConfig/firebase';

const theme = extendTheme({ cssVarPrefix: 'demo' });

export default function CreateAccount() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(password !== confirmPassword){
      alert("Passwords do not match");
      return;
    }
    if(username === '' || password === '' || confirmPassword === '') {
      alert("Please fill in all fields");
      return;
    }
    if(password.length < 8) {
      alert("Password must be at least 8 characters long");
      return;
    }
    try {
      const signInMethods = await fetchSignInMethodsForEmail(auth, username.value);
    
      if (signInMethods.length > 0) {
        // Email is already in use, show an appropriate message
        alert("Email is already in use");
        return;
      };

      const userCredential = await createUserWithEmailAndPassword(auth, username, password);
      const user = userCredential.user; 
      const userRef = doc(collection(firestore, 'Users'), user.uid);

      await setDoc(userRef, {
        username,
      });
      console.log("Successfully created Account!");
      navigate('/Finish');
    } catch (e) {
      console.log(e);
      alert("Invalid Username");
    } 
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const username = user.email;
      // Handle successful sign-in
      const userRef = doc(collection(firestore, 'Users'), user.uid);
      await setDoc(userRef, {
        username,
      });
      console.log("Successfully created Account!");
      navigate('/Finish');
    } catch (error) {
      // Handle errors
      console.error('Error signing in:', error);
    }
  };


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
      <Box id='dark-mode'
        sx={{
          width:
            'clamp(100vw - var(--Cover-width), (var(--Collapsed-breakpoint) - 100vw) * 999, 100vw)',
          transition: 'width var(--Transition-duration)',
          transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'flex-end',
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
                <Typography level="h1">Create an Account</Typography>
                <Typography level="body-sm">
                  Already have an account?{' '}
                  <Link  level="title-sm">
                    <NavLink to="/Login" style={{ textDecoration: 'none' }}>Login!</NavLink> 
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
                onClick={handleGoogleSignIn}
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
                </div>
                </div>
                <div className="user-box">
                <div className="inputbox">
                <input
                    type="password"
                    name="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <label>Confirm Password</label>
                </div>
                </div>
                <Stack gap={4} sx={{ mt: 2 }}>
                  
                  <Button color="neutral" type="submit" fullWidth
                  sx={
                    {
                      bgcolor: 'black',
                      borderRadius:'20px'}
                    }
                  >
                    Create an Account
                  </Button>
                </Stack>
              </form>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          height: '100%',
          position: 'fixed',
          right: 0,
          top: 0,
          bottom: 0,
          left: 'clamp(0px, (100vw - var(--Collapsed-breakpoint)) * 999, 100vw - var(--Cover-width))',
          transition:
            'background-image var(--Transition-duration), left var(--Transition-duration) !important',
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
          <p style={{color:'white', fontSize:'18px'}}>Welcome to UniStore! Please Create a Account to Continue Shopping.</p>
          </Box>
      </Box>
    </CssVarsProvider>
  );
}
