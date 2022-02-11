// login page with daefault username and password admin and admin
import React, { useState } from 'react';
import { IonPage, IonContent, IonInput, IonButton, IonLabel, IonItem, IonList, IonListHeader, IonIcon, IonAlert } from '@ionic/react';
import { useHistory } from 'react-router-dom';


const Login: React.FC = () => {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    

    const handleLogin = () => {
        if (username === 'admin' && password === 'admin') {
            history.push('/page/inbox');
            console.log('login success');
            
        } else {
            alert('login failed');
            setShowAlert(true);
        }

    }
return (
    
    <IonPage>
        <IonContent>
            <IonList>
                <IonListHeader>
                    <IonLabel>Login</IonLabel>
                </IonListHeader>
                <IonItem>
                    <IonLabel position="floating">Username</IonLabel>
                    <IonInput value={username} onIonChange={e => setUsername(e.detail.value!)}></IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Password</IonLabel>
                    <IonInput value={password} onIonChange={e => setPassword(e.detail.value!)} type="password"></IonInput>
                </IonItem>
                <IonButton onClick={handleLogin}>Login</IonButton>
            </IonList>
        </IonContent>
    </IonPage>
);
}

export default Login;