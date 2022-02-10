import { IonThumbnail, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar , IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonAvatar,IonIcon,IonFabButton,IonFab, IonSearchbar } from '@ionic/react';
import { createOutline, add, pencil, pencilSharp, trash, trashBin, personSharp} from 'ionicons/icons';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import Header from './Header';
import { useEffect, useState } from 'react';

import React  from 'react';
import { useHistory } from 'react-router-dom';

// services
import {getVilla} from '../services/VillaRESTAPI'

const Book: React.FC = () => {
    const history = useHistory();

    const [items,setItems] = useState([]);
    // get book from service 
    const [villaList, setVilla] = useState([ {
        "id":1,
        "image":"https://training.pyther.com/books/9780746066928_cover_image.jpg",
        "title":"My Villa",
        "price":"7346",
        "Location":"Some Location"
     }]);
     const loadVillas = async () =>{
        let tempData = await getVilla();
        setVilla(tempData);
        console.log("tempData:",tempData);
     }
    
    
  
    useEffect(() => {
        let unlisten = history.listen((location, action) => {
            loadVillas(); // after coming from Edit
          });
          loadVillas(); // when URL is /Book and refresh
          return(unlisten);
  }, []);
 





    // search 
    const [searchBook, setSearchBook] = useState('');
    const handleSearch = (e:any) => {
      setSearchBook(e.detail.value);
    }

    const filteredItems = villaList.filter(item => {
      return item.price.toLowerCase().indexOf(searchBook.toLowerCase()) > -1;
    });
    
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Book - List</IonTitle>
          </IonToolbar>
        </IonHeader>
  
        <IonContent fullscreen>
          <IonList>
            <IonItem>
              <IonSearchbar value={searchBook} onIonChange={handleSearch} placeholder="Search" animated color="info"></IonSearchbar>
            </IonItem>
            {filteredItems.map((item, index) => (
              <IonItem key={index}>
                <IonThumbnail slot="start">
                  <img src={item.image} />
                </IonThumbnail>
                <IonLabel>
                <h3>{item.title}</h3>
                    </IonLabel>
                <IonLabel>
                  <h2>{item.price}</h2>
                  <p>{item.Location}</p>
                 
                </IonLabel>
              
            
              </IonItem>
            ))}
          </IonList> 
          
        </IonContent>
      </IonPage>
    );
  };
  


export default Book;


