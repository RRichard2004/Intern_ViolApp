import React from 'react';
import {
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonHeader,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButton
} from '@ionic/react';

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

import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom

import '../theme/variables.css';
import '../theme/language_selector.css';

const Page = () => {
  const history = useHistory(); // Initialize the history object

  return (
    <>
      {/* IonContent for page content */}
      <IonContent scroll-y="false">
        <div className='centeringelementsdiv'>
          {/* IonButton for selecting Arabic language */}
          <IonButton
            className="bigbutton languageselectorbutton"
            color="color-button-primary"
            onClick={(e) => { e.preventDefault(); history.push('/arabic'); }}>
            العربية
          </IonButton>
          {/* IonButton for selecting French language */}
          <IonButton
            className="bigbutton languageselectorbutton"
            color="color-button-primary"
            onClick={(e) => { e.preventDefault(); history.push('/french'); }}>
            FRANCAIS
          </IonButton>
        </div>
      </IonContent>
    </>
  );
}

export default Page;
