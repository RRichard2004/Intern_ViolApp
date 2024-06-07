import React from 'react';
import { IonButton, IonIcon } from '@ionic/react';
import { homeOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';

interface NavigateToProps {
  whereTo: string;
  className: string;
}
//what will this component receive as properties

const NavigateTo: React.FC<NavigateToProps> = ({ whereTo, className }) => {
  const history = useHistory();

const navigateTo = () => { // function that the button will execute
  history.push(whereTo) 
};

  return ( // returned button
    <IonButton className={className} onClick={navigateTo}>
    </IonButton>
  );
};

export default NavigateTo;
