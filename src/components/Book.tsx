import { IonThumbnail, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar , IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonAvatar,IonIcon,IonFabButton,IonFab, IonSearchbar } from '@ionic/react';
import { createOutline, add, pencil, pencilSharp, trash, trashBin, personSharp} from 'ionicons/icons';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import Header from './Header';
import { useEffect, useState } from 'react';

import React  from 'react';
import { useHistory } from 'react-router-dom';

// services
import {getBook, deleteBook} from '../services/BookRESTAPI'

const Book: React.FC = () => {
    const history = useHistory();

    const [items,setItems] = useState([]);
    // get book from service 
    const [bookList, setBooks] = useState([ {
        "id":1,
        "title":"Harry Potter",
        "author":"Zaid Reshamwale",
        "publisher":"zaidr",
        "isbn":"888888",
        "year":"2020",
        "cover" : "https://training.pyther.com/books/9780746066928_cover_image.jpg"
     }]);
     const loadBooks = async () =>{
        let tempData = await getBook();
        setBooks(tempData);
        console.log("tempData:",tempData);
     }
    
    
  
    useEffect(() => {
        let unlisten = history.listen((location, action) => {
            loadBooks(); // after coming from Edit
          });
          loadBooks(); // when URL is /Book and refresh
          return(unlisten);
  }, []);
 

//   update
const handleUpdate = (item:any) =>{
    console.log(">> handleUpdate");
    console.log("item::",item);
    setItems(item);
    loadBooks();
}


//   delete
const deleteBookHandler = async (id:number) =>{
    console.log(">> deleteBookHandler");
    console.log("id:",id);
    await deleteBook(id);
    loadBooks();
}


    // search 
    const [searchBook, setSearchBook] = useState('');
    const handleSearch = (e:any) => {
      setSearchBook(e.detail.value);
    }

    const filteredItems = bookList.filter(item => {
      return item.author.toLowerCase().indexOf(searchBook.toLowerCase()) > -1;
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
                  <img src={item.cover} />
                </IonThumbnail>
                <IonLabel>
                <h3>{item.author}</h3>
                    </IonLabel>
                <IonLabel>
                  <h2>{item.title}</h2>
                  <p>{item.publisher}</p>
                  <p>{item.isbn}</p>
                  <p>{item.year}</p>
                </IonLabel>
                <IonIcon onClick={()=>{history.push('/EditBook/'+item.id)}} size={'10'} style={{marginRight:"10px"}} icon={createOutline}  ></IonIcon>
                <IonIcon onClick={() => deleteBookHandler(item.id)} size={'10'} icon={trash} />
              
                 
            
              </IonItem>
            ))}
          </IonList> 
           <IonFab vertical="bottom" horizontal="end"slot="fixed">   
           <a href="/AddBook" >
             <IonFabButton>
                <IonIcon icon={add}/>
                 </IonFabButton>
                 </a>
           </IonFab>
        </IonContent>
      </IonPage>
    );
  };
  


export default Book;


