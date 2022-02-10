import { IonButtons,IonButton, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar , IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonAvatar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from './ExploreContainer';
import Header from './Header';
import React, { useState } from 'react';

import { addBook, getBookById, updateBook } from '../services/BookRESTAPI';
import { useHistory } from 'react-router';

// export const AddCustomer: React.FC = () => {
//     const [bLabel, setbLabel] = useState("Add");
//     const history = useHistory();
//     const params:any = useParams();

   
//   const [customer,setCustomer] = useState({
//       id:0,
//       name:'',
//       email:'',
//       phone:'',
//       address:''
//   })
//  // getting customer by id
//  const loadCurrentCustomer = async (recordId:any) => {
//     let loadCustomers = await getCustomerById(recordId);
//     console.log("loadCustomers:",loadCustomers);
//     setCustomer(loadCustomers);
// }

//   React.useEffect(() => {
//       if(params.recordId){
//         console.log(">> params.recordId:"+params.recordId);
//         loadCurrentCustomer(params.recordId);
//       }
//   }, []);

// //   update customer
// const updateCustomer = async () =>{
//     console.log(">> updateCustomer");
//     console.log("customer:",customer);
//     await addCustomer(customer);
//     history.push('/Customer');
// }

//   const handleAddCustomer =async ()=>{
//     console.log(">> handleAddCustomer");
//     console.log("customer::",customer);
//     if (customer.id === 0) {
//     await addCustomer(customer);
//     }else{
//         await updateCustomer();
//     }
//     history.push('/Customer')
//   }

//   const handleChange =(e:any)=>{
//     console.log(">> name",e.detail.name);
//     console.log(">> value ",e.detail.value);
//     console.log("customer::",customer);
//   }

//   return (
//     <IonPage>
//       <IonHeader>
//         <IonToolbar>
//           <IonButtons slot="start">
//             <IonMenuButton />
//           </IonButtons>
//           <IonTitle>{bLabel} Customer</IonTitle>
//         </IonToolbar>
//       </IonHeader>

//       <IonContent fullscreen>
//       <IonList >
//       <IonItem class="ion-text-center " >
            
//             <IonInput placeholder="Enter the Name" value={customer.name}
//              onIonChange={(e:any)=>setCustomer({...customer,name:e.detail.value})}
//               name="name" type="text"></IonInput>
//           </IonItem>

//           <IonItem class="ion-text-center ">            
//             <IonInput placeholder="Enter the Email" name="email"
//              value={customer.email}
//              onIonChange={(e:any)=>setCustomer({...customer,email:e.detail.value})}
//               type="email" ></IonInput>
//           </IonItem>

//           <IonItem class="ion-text-center ">            
//             <IonInput placeholder="Enter the PhoneNo" name="phone"
//              onIonChange={(e:any)=>setCustomer({...customer,phone:e.detail.value})}
//              value={customer.phone}
//               type="number" ></IonInput>
//           </IonItem>

//           <IonItem class="ion-text-center ">            
//             <IonInput placeholder="Enter the Address" name="address"
//             value={customer.address}
//             onIonChange={(e:any)=>setCustomer({...customer,address:e.detail.value})}
//              type="text" ></IonInput>
//           </IonItem>

          
//           <IonButton  
//             expand="full"
//             shape="round"
//            fill='outline'
//            color="primary" style={{marginTop:"7px"}}
//            onClick={handleAddCustomer}>{bLabel}</IonButton>
          
          
//         </IonList>
//         </IonContent>
//     </IonPage>
//   );
// };


export const AddBook: React.FC = () => {
    const [bLabel,setBLabel] = useState("Add");
    const history = useHistory();
    const params:any = useParams();
    const [book,setBook] = useState({
        id:0,
        title:'',
        author:'',
        publisher:'',
        isbn:'',
        year:'',
        cover:''
    })
  
    const loadCurrentBook = async (recordId:any) =>{
      let loadBook = await getBookById(recordId);
      setBook(loadBook);
      setBLabel('Update');
    }

    React.useEffect(() => {
        if(params.recordId){
          console.log(">> params.recordId:"+params.recordId);
          loadCurrentBook(params.recordId);
        }
    }, [params.recordId]);
  

    const handleAddBook =async ()=>{
      console.log(">> handleAddBook");
      console.log("book::",book);
      if(book.id == 0){ //add
          await addBook(book);
      }else{
          await updateBook(book);
      }
      history.push('/Customer')
    }
    const handleChange =(e:any)=>{
      console.log(">> name",e.detail.name);
      console.log(">> value ",e.detail.value);
      console.log("book::",book);
    }
    return (
            <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{bLabel} Book</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
      <IonList >
      <IonItem class="ion-text-center " >
            
            <IonInput placeholder="Enter the Book Title" value={book.title}
             onIonChange={(e:any)=>setBook({...book,title:e.detail.value})}
              name="title" type="text"></IonInput>
          </IonItem>

          <IonItem class="ion-text-center ">            
            <IonInput placeholder="Enter the Author name" name="author"
             value={book.author}
             onIonChange={(e:any)=>setBook({...book,author:e.detail.value})}
               ></IonInput>
          </IonItem>

          <IonItem class="ion-text-center ">            
            <IonInput placeholder="Enter the Publisher name" name="publisher"
             onIonChange={(e:any)=>setBook({...book,publisher:e.detail.value})}
             value={book.publisher}
             ></IonInput>
          </IonItem>

          <IonItem class="ion-text-center ">            
            <IonInput placeholder="Enter the isbn" name="isbn"
            value={book.isbn}
            onIonChange={(e:any)=>setBook({...book,isbn:e.detail.value})}
             type="text" ></IonInput>
          </IonItem>

          <IonItem class="ion-text-center ">            
            <IonInput placeholder="Enter the Year" name="year"
            value={book.year}
            onIonChange={(e:any)=>setBook({...book,year:e.detail.value})}
             type="text" ></IonInput>
          </IonItem>

          <IonItem class="ion-text-center ">            
            <IonInput placeholder="Enter the Image URL" name="cover"
            value={book.cover}
            onIonChange={(e:any)=>setBook({...book,cover:e.detail.value})}
             type="text" ></IonInput>
          </IonItem>

          
          <IonButton  
            expand="full"
            shape="round"
           fill='outline'
           color="primary" style={{marginTop:"7px"}}
           onClick={handleAddBook}>{bLabel}</IonButton>
          
          
        </IonList>
        </IonContent>
    </IonPage>

   
    );
  };
  
  