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
  import { archiveOutline, personAddOutline,  archiveSharp, bookmarkOutline, checkboxSharp, heartOutline, heartSharp, list, mailOutline, mailSharp, personCircleOutline,  paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
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
      iosIcon: personCircleOutline,
      mdIcon: personCircleOutline
    },
    {
      title: 'AddBook',
      url: '/AddBook',
      iosIcon: personAddOutline,
      mdIcon: personAddOutline
    },
   
  ];

  const Menu: React.FC = () => {
    const location = useLocation();
  
    return (
      <IonMenu contentId="main" type="overlay">
        <IonContent>
          <IonList id="inbox-list">
            <IonListHeader>Menu</IonListHeader>
            <IonNote>Ionic Components</IonNote>
            {appPages.map((appPage, index) => {
              return (
                <IonMenuToggle key={index} autoHide={false}>
                  <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
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
  