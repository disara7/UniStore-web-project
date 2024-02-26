import React, { useState,useEffect } from "react";
import { auth,firestore,signOut } from "../../FirebaseConfig/firebase";
import { useNavigate } from "react-router-dom";
import '../css/user.css';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import IconButton from '@mui/joy/IconButton';
import Textarea from '@mui/joy/Textarea';
import Stack from '@mui/joy/Stack';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Typography from '@mui/joy/Typography';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import VideocamRoundedIcon from '@mui/icons-material/VideocamRounded';
import InsertDriveFileRoundedIcon from '@mui/icons-material/InsertDriveFileRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

// import EditorToolbar from './EditorToolbar';
import { onAuthStateChanged,ref,storage,getDownloadURL,getDoc,doc } from "../../FirebaseConfig/firebase";
import profilePic from '../../Components/Assets/images/user.png'


export default function UserProfile() {
    const navigator = useNavigate();
    const [profilePictureUrl, setProfilePictureUrl] = useState(profilePic);
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [university, setUniversity] = useState('');

    const logOut = () => {
        signOut(auth)
          .then(() => {
            console.log('Sign out successful');
            navigator('/');
          })
          .catch((error) => {
            console.error('Error signing out:', error);
          });
      };

      useEffect(() => {
        const getUserProfilePicture = async () => {
          const unsubscribe = onAuthStateChanged(auth, async (user) => {
            const uid = user.uid;
            const userRef = doc(firestore, "Users", uid);
            if (user) {
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


    return (
        <div className="userProfile" style={{ minHeight: '100vh' }}>
            <Typography level="h2" component="h1" sx={{ mt: 1, mb: 2, pl: '5%', pt: 5, color: 'white' }}>
            User Profile
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
            <Card>
              <Box sx={{ mb: 1 }}>
                <Typography level="title-lg">Personal info</Typography>
              </Box>
              <Divider />
              <Stack
                direction="row"
                spacing={3}
                sx={{ display: { xs: 'none', md: 'flex' }, my: 1 }}
              >
                <Stack direction="column" spacing={1}>
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
                      top: 170,
                      boxShadow: 'sm',
                    }}
                  >
                    <EditRoundedIcon />
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
                      <Input size="sm" value={university} disabled/>
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Email</FormLabel>
                      <Input
                        size="sm"
                        type="email"
                        startDecorator={<EmailRoundedIcon />}
                        placeholder="email"
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
                        left: 85,
                        top: 180,
                        boxShadow: 'sm',
                      }}
                    >
                      <EditRoundedIcon />
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
                  <Input size="sm" value={university} />
                </FormControl>
                <FormControl sx={{ flexGrow: 1 }} >
                  <FormLabel>Email</FormLabel>
                  <Input
                    size="sm"
                    type="email"
                    startDecorator={<EmailRoundedIcon />}
                    placeholder="email"
                    value={email}
                    sx={{ flexGrow: 1 }}
                    disabled
                  />
                </FormControl>
              </Stack>
              <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
                <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
                  <Button size="sm" variant="outlined" color="neutral" sx={{borderRadius: '20px'}}>
                    Cancel
                  </Button>
                  <Button size="sm" variant="solid" color="neutral" sx={{borderRadius: '20px', bgcolor:'black'}}>
                    Save
                  </Button>
                </CardActions>
              </CardOverflow>
            </Card>
            <Card>
              <Box sx={{ mb: 1 }}>
                <Typography level="title-md">Seller</Typography>
                <Typography level="body-sm">
                  Something
                </Typography>
              </Box>
              <Divider />
              
              <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
                <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
                  <Button size="sm" variant="outlined" color="neutral" sx={{borderRadius: '20px'}}>
                    Cancel
                  </Button>
                  <Button size="sm" variant="solid" color="neutral" sx={{borderRadius: '20px', bgcolor:'black'}}>
                    Save
                  </Button>
                </CardActions>
              </CardOverflow>
            </Card>
          </Stack>
        </Box>
          <Button onClick={logOut} sx={{borderRadius: '20px'}}>Logout</Button>
        </div>
    )
}