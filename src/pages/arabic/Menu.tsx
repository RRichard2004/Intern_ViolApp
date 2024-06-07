import React from 'react';
import {
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonContent,
  IonPage,
  IonImg,
  IonItem,
  IonText,
} from '@ionic/react';

import { useHistory } from 'react-router-dom';

import NavBTN from '../../components/NavigateBtn';

const Arabic: React.FC = () => {
  const history = useHistory();

  // Function to navigate to a specific path
  const navigateTo = (path: string) => {
    history.push(`/arabic/${path}`);
  };

  return (
    <IonPage>
      <IonContent>
        <IonGrid className='centeringelementsdiv'>
          {/* Info */}
          <IonRow className="ion-text-center MenupicContainer">
            <IonCol>
            <div className='button-container'>
              {/* Text above the button */}
              <div className='selectortextoffset ion-text-nowrap' onClick={() => navigateTo('info')}>
                معلومات تهمك    
              </div>
              <IonButton className="backgroundcubes" color="color-button-primary" onClick={() => navigateTo('info')}>
                <IonImg src="./public/Info.svg" alt="Superior.svg" className='ion-text-wrap MenuPics'></IonImg>
              </IonButton>
            </div>
            </IonCol>
          </IonRow>

          {/* Form */}
          <IonRow className="ion-text-center MenupicContainer">
            <IonCol>
              <div className='button-container'>
                {/* Text above the button */}
                <div className='selectortextoffset ion-text-nowrap'onClick={() => navigateTo('form')}>
                  املأ الاستمارة  
                </div>
                <IonButton className="backgroundcubes" color="color-button-primary" onClick={() => navigateTo('form')}>
                  <IonImg src="./public/Form.svg" alt="Superior.svg" className='ion-text-wrap MenuPics'></IonImg>
                </IonButton>
              </div>
            </IonCol>
          </IonRow>

          {/* Contacts */}
          <IonRow className="ion-text-center MenupicContainer">
            <IonCol>
            <div className='button-container'>
              {/* Text above the button */}
              <div className='selectortextoffset ion-text-nowrap' onClick={() => navigateTo('contact')}>
                اتصل بنا
              </div>
              <IonButton className="backgroundcubes" color="color-button-primary" onClick={() => navigateTo('contact')}>
                <IonImg src="./public/Contact.svg" alt="Superior.svg" className='MenuPics'></IonImg>
              </IonButton>
            </div>
            </IonCol>
          </IonRow>
          {/* HomeButton component for navigation */}
          <NavBTN className='custombackbutton' whereTo="/arabic" />
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Arabic;
