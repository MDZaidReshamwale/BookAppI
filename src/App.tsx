import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonCard, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Menu from './components/Menu';
import Page from './pages/Page';



/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import DefaultPage from './components/DefaultPage';
import Book from './components/Book';
import Villa from './components/Villa';
import {AddBook} from './components/AddBook';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">

          <Route path="/Book" exact={true}>
            <Book />
          </Route>

          <Route path="/AddBook" exact={true}>
            <AddBook />
          </Route>
          {/* edit book */}
          <Route path="/EditBook/:recordId" exact={true}>
            <AddBook />
          </Route>

          <Route path="/Villa" exact={true}>
            <Villa />
          </Route>

          <Route path="/page/:name" exact={true}>
            <DefaultPage />
          </Route>
          <Route path="/" exact={true}>
            <Redirect to="/page/BookApp" />
          </Route>
      </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
);

export default App;
