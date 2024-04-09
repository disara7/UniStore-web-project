import React,{useEffect} from 'react'
import '../content/content.css'
import content_pic from '../../../Components/Assets/images/content.png'
import { NavLink } from 'react-router-dom'
import { auth, firestore, getDoc, onAuthStateChanged,doc } from '../../../FirebaseConfig/firebase';

const Content = () => {
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        const sellerDoc = await getDoc(doc(firestore, 'Sellers', uid));
              if (sellerDoc.exists()) {
                document.querySelector('.content').style.display = 'none';
              } else {
                document.querySelector('.content').style.display = 'block';
              }
      }
      return;
    })
    
  });

  return (
    <div className='content'>
            <div className='left'>
            <div className='topic'>
            <h1>Sustainable Upcycling for a Better Tomorrow</h1>   
            </div>
            <p>A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete</p>
            <div className="buttons">
              <div className="herobtn">
                <NavLink to='/BecomeSeller'><button className='Btn b' style={{margin:'10px'}}>Become a Seller</button></NavLink>
              </div>
            </div>
            </div>
            <div className="floatingImg">
                <img src={content_pic} alt="" />
            </div>
            
            
    </div>
    
  )
}

export default Content