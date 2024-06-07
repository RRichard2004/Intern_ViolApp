// French.tsx
import React from 'react';
import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonHeader,
  IonFooter,
  IonTitle,
  IonToolbar,
  IonPage,
  IonImg,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import NavBTN from '../../components/NavigateBtn'; // Import the new shared button component

const Page: React.FC = () => {
    const history = useHistory();

  return (
    <IonPage >
      <IonContent>
        <IonGrid className='centeringelementsdiv'>
                    {/* Big home image */}
          <IonRow>
            <IonCol size="12" class="ion-padding ion-text-center">
              <IonImg src="../../../public/woman.svg" alt="" className='ion-text-wrap'></IonImg>
            </IonCol>
          </IonRow>

          {/* Row for the buttons */}
          <IonRow>
            <IonCol size="12" class="ion-padding ion-text-center">
              {/* IonButton for navigation forward to menu*/}
              <IonButton color="color-button-primary bigbutton" onClick={() => history.push('/arabic/menu')}>
                مرحبا 
              </IonButton>

              {/* A div for spacing */}
              <div className="ion-text-wrap" />

              {/* for navigating back to the default page */}
              <NavBTN className='custombackbutton custombackbuttonhome' whereTo="/" />
            </IonCol>
          </IonRow>
          <IonRow className='gridfooterparent'>
            <IonCol size="3">
              <IonImg src="./public/logo1.png" alt="people.png" className='footerimg'></IonImg>
            </IonCol>
            <IonCol size="3">
              <IonImg src="./public/logo2.png" alt="people.png" className='footerimg'></IonImg>
            </IonCol>
            <IonCol size="3">
              <IonImg src="./public/logo3.png" alt="people.png" className='footerimg'></IonImg>
            </IonCol>
            <IonCol size="3">
              <IonImg src="./public/logo4.png" alt="people.png" className='footerimg'></IonImg>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Page;