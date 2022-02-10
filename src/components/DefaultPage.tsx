import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle,IonCardContent, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import Header from './Header';
import bimg from '../assets/book.png';
import { useEffect, useState } from 'react';
import {getBook} from '../services/BookRESTAPI'

const DefaultPage: React.FC = () => {
    
        const[count,setCount] = useState(' ');
        
        
        const loadBooks = async () =>{
        let tempBooks = await getBook();
        setCount(tempBooks.length);
        }
        useEffect(()=>{
        loadBooks();
        },[]);
  const { name } = useParams<{ name: string; }>();

  return (
   

    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>My Book App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonCard>
          <img src={bimg} />
          <IonCardHeader>
            <IonCardSubtitle>Book Count</IonCardSubtitle>
            <IonCardTitle>There {count} book avaiable  </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          There is no such thing as a child who hates to read; there are only children who have not found the right book
          </IonCardContent>
        </IonCard>
        </IonContent>
        </IonPage>



  );
};

export default DefaultPage;
