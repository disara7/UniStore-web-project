import React, { useState } from "react";
import "./css/createSeller.css"
import seller from "../Components/Assets/images/sellerLogo.png"
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import { formLabelClasses } from '@mui/joy/FormLabel';
import { CssVarsProvider,extendTheme  } from '@mui/joy/styles';
import GlobalStyles from '@mui/joy/GlobalStyles'
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import CssBaseline from '@mui/joy/CssBaseline';
import signInBg from '../Components/Assets/images/seller.png';
import logo from '../Components/Assets/images/logo.png';
import AspectRatio from '@mui/joy/AspectRatio';
import IconButton from '@mui/joy/IconButton';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { auth, storage, getDownloadURL, ref, uploadBytesResumable, firestore, collection, setDoc, doc } from '../FirebaseConfig/firebase';
import Compressor from "compressorjs";

const theme = extendTheme({ cssVarPrefix: 'demo' });

export default function BecomeSeller() {
    const [sellerLogo, setSellerLogo] = useState(seller);
    const [businessName, setBusinessName] = useState('');
    const [tpNo, setTpNo] = useState('');
    const [businessDescription, setBusinessDescription] = useState('');

    const handlePictureUpload = async (e) => {
        try {
          // Get the selected file:
          const file = e.target.files[0];
      
          if (!file) {
            throw new Error('Please select a file to upload.');
          }
      
          const user = auth.currentUser; // Retrieve the currently logged-in user's ID
          const fileName = `SellerLogo`;
      
          const storageRef = ref(storage, `seller_logo/${user.uid}/${fileName}`);
          const compressedImage = await new Promise((resolve, reject) => {new Compressor(file, {
            quality: 0.6, 
            maxWidth: 800, 
            maxHeight: 800, 
            success(result) {
              resolve(result);
            },
            error(error) {
              reject(error);
            },
          });
        });
          
      
          const task = await uploadBytesResumable(storageRef, compressedImage); 
      
          const downloadURL = await getDownloadURL(task.ref); 
      
          setSellerLogo(downloadURL);
      
          console.log('Picture uploaded successfully!');
      
        } catch (error) {
          console.error('Error uploading picture:', error);
        }
      };
    
      const validateInput = (businessName,tpNo) => {
        const errors = [];
      
        if (!businessName.trim()) {
          errors.push('First name is required.');
        }
      
        if (!tpNo.trim()) {
          errors.push('Last name is required.');
        }
      
        if (errors.length > 0) {
          // Display or return the error messages to the user
          return false;
        }
      
        return true; // Indicates valid input
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior
      
        if (!validateInput(businessName,tpNo)) {
          alert('Please  enter all required information.');
          return;
        }
        
      
        try {
          const user = auth.currentUser;
          const userRef = doc(collection(firestore, 'Sellers'),user.uid);
          
          const userData = {
            businessName,
            tpNo
          };
    
          await setDoc(userRef, userData);
          console.log('Seller account created successfully!');
          window.location.replace('/UserProfile');
      
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
                    <Typography level="h1">Seller Details</Typography>
                    <Typography level="body-sm">Business Profile Picture</Typography>
                    
                </Stack>
                <div style={{width:'auto',height:'auto',position: 'relative'}}>
                <AspectRatio
                    ratio="1"
                    maxHeight={200}
                    sx={{ width:{xs:'120px', md:'150px'}, borderRadius: '100%' }}
                >
                    <img
                    src={sellerLogo}
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
                        name="businessName"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        required
                    />
                    
                        <label>Business Name</label>
                        <div className="login-icons">
                        </div>
                    </div>   
                    </div>
                    <div className="user-box">
                    <div className="inputbox" style={{color: {xs:'white', md:'black'}}}>
                        <textarea
                            name="businessDescription"
                            value={businessDescription}
                            onChange={(e) => setBusinessDescription(e.target.value)}
                            required
                        />     
                        <label>Business Description</label>
                    </div>   
                    </div>
                    <div className="user-box">
                    <div className="inputbox" style={{color: {xs:'white', md:'black'}}}>
                    <input
                        type="text"
                        name="lname"
                        value={tpNo}
                        onChange={(e) => setTpNo(e.target.value)}
                        required
                    />
                    
                        <label>Phone Number</label>
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
                        Become a Seller
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