import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/login.css';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import { formLabelClasses } from '@mui/joy/FormLabel';
import { CssVarsProvider,extendTheme  } from '@mui/joy/styles';
import GlobalStyles from '@mui/joy/GlobalStyles'
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import CssBaseline from '@mui/joy/CssBaseline';
import signInBg from '../../Components/Assets/images/signin.png';
import logo from '../../Components/Assets/images/logo.png';
import AspectRatio from '@mui/joy/AspectRatio';
import IconButton from '@mui/joy/IconButton';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import universitiesData from './universities.json';
import { auth, storage, getDownloadURL, ref, uploadBytesResumable, firestore, collection, updateDoc, doc } from '../../../src/FirebaseConfig/firebase';
import profilePic from '../../Components/Assets/images/user.png'



const theme = extendTheme({ cssVarPrefix: 'demo' });


export default function Finish() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [selectedUniversity, setSelectedUniversity] = useState('');
  const universities = universitiesData;
  const [profilePicture, setProfilePicture] = useState(profilePic);
  const navigate = useNavigate();

  const handlePictureUpload = async (e) => {
    try {
      // Get the selected file:
      const file = e.target.files[0];
  
      if (!file) {
        throw new Error('Please select a file to upload.');
      }
  
      const user = auth.currentUser; // Retrieve the currently logged-in user's ID
      const fileName = `ProfilePic`;
  
      const storageRef = ref(storage, `user_profile_pictures/${user.uid}/${fileName}`);
  
      const task = await uploadBytesResumable(storageRef, file); 
  
      const downloadURL = await getDownloadURL(task.ref); 
  
      setProfilePicture(downloadURL);
  
      console.log('Picture uploaded successfully!');
  
    } catch (error) {
      console.error('Error uploading picture:', error);
    }
  };
  const validateInput = (fname, lname, selectedUniversity) => {
    const errors = [];
  
    if (!fname.trim()) {
      errors.push('First name is required.');
    }
  
    if (!lname.trim()) {
      errors.push('Last name is required.');
    }
  
    if (!selectedUniversity) {
      errors.push('Please select a university.');
    }
  
    if (errors.length > 0) {
      // Display or return the error messages to the user
      return false;
    }
  
    return true; // Indicates valid input
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
  
    if (!validateInput(fname, lname, selectedUniversity)) {
      alert('Please  enter all required information.');
      return;
    }
    
  
    try {
      const user = auth.currentUser;
      const userRef = doc(collection(firestore, 'Users'),user.uid);
      
      const userData = {
        fname,
        lname,
        selectedUniversity,
      };

      await updateDoc(userRef, userData);
      console.log('User data updated successfully!');
      navigate('/');
  
    } catch (error) {
      console.error('Error updating user data:', error);
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
          <p style={{color:'white', fontSize:'18px'}}>Welcome to UniStore! Please Enter Your Personal Details to Continue Shopping.</p>
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
            <Stack gap={3} sx={{ mb: 2 }}>
              <Stack gap={1}>
                <Typography level="h1">Personal Details</Typography>
                <Typography level="body-sm">Profile Picture</Typography>
                
              </Stack>
              <div style={{width:'auto',height:'auto',position: 'relative'}}>
              <AspectRatio
                ratio="1"
                maxHeight={200}
                sx={{ width:{xs:'120px', md:'150px'}, borderRadius: '100%' }}
              >
                <img
                  src={profilePicture}
                  alt="User Profile"
                />
                <input type="file" onChange={handlePictureUpload} />
              </AspectRatio>
              <IconButton
                aria-label="upload new picture"
                size="sm"
                variant="outlined"
                color="neutral"
                sx={{
                  position: 'absolute',
                  top:{md:115,xs:90},
                  left:{md:115,xs:90},
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  bgcolor: 'background.body',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  zIndex: 2,
                  boxShadow: 'sm',
                }}
              >
                <label htmlFor="file-upload">
                  <EditRoundedIcon />
                </label>
                <input
                  id="file-upload"
                  type="file"
                  style={{ display: 'none' }}
                  onChange={handlePictureUpload}
                />
              </IconButton>
              </div>
            </Stack>
            <Stack gap={4} sx={{ mt: 2 }}>
              <Box className='login-box'>
              <form
                onSubmit={handleSubmit}
              >
                <div className="user-box">
                <div className="inputbox" style={{color: {xs:'white', md:'black'}}}>
                  <input
                    type="text"
                    name="fname"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                    required
                  />
                  
                    <label>First Name</label>
                    <div className="login-icons">
                    </div>
                </div>   
                </div>
                <div className="user-box">
                <div className="inputbox" style={{color: {xs:'white', md:'black'}}}>
                  <input
                    type="text"
                    name="lname"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                    required
                  />
                  
                    <label>Last Name</label>
                </div>   
                </div>
                <div className="user-box">
                  <div className="inputbox" style={{ color: { xs: 'white', md: 'black' } }}>
                    <input
                      type="text"
                      name="selectedUniversity"
                      value={selectedUniversity}
                      onChange={(e) => setSelectedUniversity(e.target.value)}
                      required
                      // Add these attributes for dropdown functionality
                      list="universities"
                      autocomplete="off"
                    />

                    <label>University</label>

                    <datalist id="universities">
                      {universities.map((university) => (
                          <option key={university} value={university}>
                            {university}
                          </option>
                        ))}
                    </datalist>
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
                    Finish
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
