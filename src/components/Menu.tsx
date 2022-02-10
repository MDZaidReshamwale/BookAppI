import {
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonNote,
  } from '@ionic/react';
  
  import { useLocation } from 'react-router-dom';
  import { homeOutline ,bookOutline , addCircleOutline  } from 'ionicons/icons';
  import './Menu.css';
  
  interface AppPage {
    url: string;
    iosIcon: string;
    mdIcon: string;
    title: string;
  }
  
  const appPages: AppPage[] = [
    {
      title: 'Book',
      url: '/Book',
      iosIcon: bookOutline,
      mdIcon: bookOutline
    },
    {
      title: 'Villa',
      url: '/AddBook',
      iosIcon: homeOutline,
      mdIcon: homeOutline
    },
    {
      title: 'AddBook',
      url: '/AddBook',
      iosIcon: addCircleOutline,
      mdIcon: addCircleOutline
    },
   
   
  ];

  const Menu: React.FC = () => {
    const location = useLocation();
  
    return (
      <IonMenu contentId="main" type="overlay">
        <IonContent>
          <IonList id="inbox-list">
            <IonListHeader style={{marginBottom:"20px"}} > Book Menu</IonListHeader>
            
            {appPages.map((appPage, index) => {
              return (
                <IonMenuToggle  key={index} autoHide={false}>
                  <IonItem style={{marginTop:"2px"}} className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                    <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                    <IonLabel>{appPage.title}</IonLabel>
                  </IonItem>
                </IonMenuToggle>
              );
            })}
          </IonList>
  
        
        </IonContent>
      </IonMenu>
    );
  };
  
  export default Menu;
  