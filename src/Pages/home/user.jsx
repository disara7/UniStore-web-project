import React, { useState,useEffect } from "react";
import { auth,deleteDoc,firestore,signOut, updateDoc } from "../../FirebaseConfig/firebase";
import '../css/user.css';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import IconButton from '@mui/joy/IconButton';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';

import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { onAuthStateChanged,ref,storage,getDownloadURL,getDoc,doc,uploadBytesResumable,deleteUser,reauthenticateWithCredential,EmailAuthProvider,GoogleAuthProvider,reauthenticateWithPopup } from "../../FirebaseConfig/firebase";
import profilePic from '../../Components/Assets/images/user.png'
import Compressor from "compressorjs";


export default function UserProfile() {
    const [profilePictureUrl, setProfilePictureUrl] = useState(profilePic);
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [university, setUniversity] = useState('');
    const [originalFname, setOriginalFname] = useState('');
    const [originalLname, setOriginalLname] = useState('');

    const logOut = () => {
        signOut(auth)
          .then(() => {
            console.log('Sign out successful');
            window.location.replace('/');
          })
          .catch((error) => {
            console.error('Error signing out:', error);
          });
      };

      useEffect(() => {
        const getUserProfilePicture = async () => {
          const unsubscribe = onAuthStateChanged(auth, async (user) => {
            
            if (user) {
              const uid = user.uid;
              const userRef = doc(firestore, "Users", uid);
              try {
                const docSnap = await getDoc(userRef);
                if (docSnap.exists) {
                  const data = docSnap.data();
                  const fname = data.fname; 
                  const lname = data.lname;
                  const email = data.username;
                  const university = data.selectedUniversity;
                  setFname(fname);
                  setLname(lname);
                  setOriginalFname(fname);
                  setOriginalLname(lname);
                  setEmail(email);
                  setUniversity(university);
                } else {
                  console.log("No document found");
                };

                const profilePictureRef = ref(storage, `user_profile_pictures/${user.uid}/ProfilePic`);
                const url = await getDownloadURL(profilePictureRef);
                setProfilePictureUrl(url);
              } catch (error) {
                console.error('Error fetching profile picture:', error);
                // Handle error fetching profile picture
              }
            }
          });
      
          return unsubscribe;
        };
      
        const unsubscribe = getUserProfilePicture();
        return() => unsubscribe;
      }, []);

      const handleFnameChange = (event) => {
        setFname(event.target.value);
      };
      const handleLnameChange = (event) => {
        setLname(event.target.value);
      }
    
      const handleSave = async () => {
        try {
          const user = auth.currentUser;
          const userDocRef = doc(firestore, 'Users', user.uid);
          await updateDoc(userDocRef, {
            fname: fname,
            lname: lname,
          }, { merge: true }); 
          console.log('Data updated successfully');
          alert("Data updated successfully!");
        } catch (error) {
          console.error('Error updating data:', error);
          // Handle error updating data
        }
      }

      const handleReset = () => {
        setFname(originalFname); 
        setLname(originalLname); 
      }

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
      
          setProfilePictureUrl(downloadURL);
      
          console.log('Picture uploaded successfully!');
      
        } catch (error) {
          console.error('Error uploading picture:', error);
        }
      };

      const handleDelete = async () => {
        const user = auth.currentUser;

        if (user) {
        const providers = user.providerData.map((userInfo) => userInfo.providerId);
        // Display a confirmation popup
        const confirmed = window.confirm('Are you sure you want to delete your account? This action cannot be undone.');
      
        if (confirmed) {
          try {
            const method = providers.includes('password') ? 'email' : providers.includes('google.com') ? 'google' : null;

            if (method === 'email') {
              // Re-authenticate using email and password
              const password = prompt('Please enter your password:');
              const credentials = EmailAuthProvider.credential(user.email, password);
              await reauthenticateWithCredential(user, credentials);
            } else if (method === 'google') {
              // Re-authenticate using Google authentication
              const googleAuthProvider = new GoogleAuthProvider();
              await reauthenticateWithPopup(user, googleAuthProvider);
            } else {
              console.log('No re-authentication method available');
              return;
            }

            // Delete user account and associated document
            await deleteUser(user);
            await deleteDoc(doc(firestore, 'Users', user.uid));
            alert("Account deleted!");
            console.log('User account deleted successfully');
          } catch (error) {
            console.error('Error deleting user account:', error);
          }
        } else {
          console.log('User account deletion cancelled');
        }
        window.location.replace('/');
      }
      }

    return (
        <div className="userProfile" style={{ minHeight: '100vh', bgcolor:'F7F7F7' }}>
            <Typography level="h2" component="h1" sx={{ mt: 1, mb: 2, pl: '5%', pt: 5, color: 'white' }}>
              My Account
            </Typography>
            <hr />
            <div className="bg"></div>
            
        <Box sx={{ flex: 1, width: '100%' }}>
          
          <Stack
            spacing={4}
            sx={{
              display: 'flex',
              maxWidth: '800px',
              mx: 'auto',
              px: { xs: 2, md: 6 },
              py: { xs: 2, md: 3 },
            }}
          >
            <Card variant="plain" sx={{ bgcolor: 'white' }}>
              <Box sx={{ mb: 1 }}>
                <Typography level="title-lg">Personal Information</Typography>
              </Box>
              <Stack
                direction="row"
                spacing={3}
                sx={{ display: { xs: 'none', md: 'flex' }, my: 1 }}
              >
                <Stack direction="column" spacing={1} sx={{height: 120}}>
                  <AspectRatio
                    ratio="1"
                    maxHeight={200}
                    sx={{ flex: 1, minWidth: 120, borderRadius: '100%' }}
                  >
                      <img src={profilePictureUrl} alt=""/>
                  </AspectRatio>
                  <IconButton
                    aria-label="upload new picture"
                    size="sm"
                    variant="outlined"
                    color="neutral"
                    sx={{
                      bgcolor: 'background.body',
                      position: 'absolute',
                      zIndex: 2,
                      borderRadius: '50%',
                      left: 100,
                      top: {sm: 100, md:150},
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
                </Stack>
                <Stack spacing={2} sx={{ flexGrow: 1 }}>
                  <Stack spacing={1}>
                    <FormLabel>Name</FormLabel>
                    <FormControl
                      sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
                    >
                      <Input size="sm" placeholder="First name" value={fname} onChange={handleFnameChange}/>
                      <Input size="sm" placeholder="Last name" value={lname} onChange={handleLnameChange} sx={{ flexGrow: 1 }} />
                    </FormControl>
                  </Stack>
                  <Stack direction="row" spacing={2}>
                    <FormControl>
                      <FormLabel>University</FormLabel>
                      <Input size="sm" value={university} placeholder="University" disabled/>
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Email</FormLabel>
                      <Input
                        size="sm"
                        type="email"
                        startDecorator={<EmailRoundedIcon />}
                        placeholder="Email"
                        value={email}
                        sx={{ flexGrow: 1 }}
                        disabled
                      />
                    </FormControl>
                  </Stack>
                </Stack>
              </Stack>
              <Stack
                direction="column"
                spacing={2}
                sx={{ display: { xs: 'flex', md: 'none' }, my: 1 }}
              >
                <Stack direction="row" spacing={2}>
                  <Stack direction="column" spacing={1}>
                    <AspectRatio
                      ratio="1"
                      maxHeight={108}
                      sx={{ flex: 1, minWidth: 108, borderRadius: '100%' }}
                    >
                      <img src={profilePictureUrl} alt=""/>
                    </AspectRatio>
                    <IconButton
                      aria-label="upload new picture"
                      size="sm"
                      variant="outlined"
                      color="neutral"
                      sx={{
                        bgcolor: 'background.body',
                        position: 'absolute',
                        zIndex: 2,
                        borderRadius: '50%',
                        left: 90,
                        top: 140,
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
                  </Stack>
                  <Stack spacing={1} sx={{ flexGrow: 1 }}>
                    <FormLabel>Name</FormLabel>
                    <FormControl
                      sx={{
                        display: {
                          sm: 'flex-column',
                          md: 'flex-row',
                        },
                        gap: 2,
                      }}
                    >
                      <Input size="sm" placeholder="First name" value={fname} onChange={handleFnameChange}/>
                      <Input size="sm" placeholder="Last name" value={lname} onChange={handleLnameChange}/>
                    </FormControl>
                  </Stack>
                </Stack>
                <FormControl>
                  <FormLabel>University</FormLabel>
                  <Input size="sm" value={university} placeholder="University" disabled/>
                </FormControl>
                <FormControl sx={{ flexGrow: 1 }} >
                  <FormLabel>Email</FormLabel>
                  <Input
                    size="sm"
                    type="email"
                    startDecorator={<EmailRoundedIcon />}
                    placeholder="Email"
                    value={email}
                    sx={{ flexGrow: 1 }}
                    disabled
                  />
                </FormControl>
              </Stack>
              <CardOverflow>
                <CardActions sx={{ justifyContent:'center', pt: 2 }}>
                  <Button size="sm" variant="solid" color="neutral" sx={{borderRadius: '20px', bgcolor:'black',p:'0 30px'}} onClick={handleSave}>
                    Save
                  </Button>
                  <Button size="sm" variant="outlined" color="neutral" sx={{borderRadius: '20px', p:'0 30px'}} onClick={handleReset}>
                    Reset
                  </Button>
                </CardActions>
              </CardOverflow>
            </Card>
            <Card variant="plain" sx={{ bgcolor: 'white' }}>
            <Box sx={{ mb: 1 }}>
                <Typography level="title-lg">Seller</Typography>
              </Box>
              <Box sx={{ mb: 1 }}>
                <Typography level="body-sm">
                  Elevate your entrepreneurial journey and expand your reach with <b>UniStore</b>, the ultimate platform for university undergraduates to showcase and sell their creations, while also offering a marketplace for preloved items, promoting sustainability and reducing waste.
                </Typography>
              </Box>
              
              <CardOverflow>
                <CardActions sx={{ alignSelf: 'flex-start', pt: 2 }}>
                  <Button size="sm" variant="solid" color="neutral" sx={{borderRadius: '20px',p:'0 30px' , bgcolor:'black',minWidth: '150px',maxWidth: '200px',}}>
                    Become a Seller
                  </Button>
                </CardActions>
              </CardOverflow>
            </Card>
          </Stack>
        </Box>
        <div style={{display:'flex',justifyContent:'center', paddingBottom:'20px', gap:'10px'}}>
          <Button onClick={logOut} color="danger" sx={{borderRadius: '20px', padding: '0 30px'}}>Logout</Button>
          <Button variant="outlined" color="danger" sx={{borderRadius: '20px', padding: '0 30px'}} onClick={handleDelete}>Delete Account</Button>
        </div>
        </div>
    )
}