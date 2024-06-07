import React from 'react';
import {
  IonContent,
  IonGrid,
  IonRow,
  IonImg,
  IonList,
  IonItem,
  IonLabel,
  IonPage,
  IonAlert,
  IonCol,
  IonButton
} from '@ionic/react';

import NavBTN from '../../components/NavigateBtn';

// Define the ListItem interface
interface ListItem {
  company: string;
  description: string;
  phoneNumber: string;
}

const Page: React.FC = () => {

  {/* giving some predetermined items, for companies and their mobile phones */}
  const items: ListItem[] = [
    { 
      company: 'Company 1',
      description: 'Description for Company 1',
      phoneNumber: '+1234567890',
    },
    { 
      company: 'Company 2',
      description: 'Description for Company 2',
      phoneNumber: '+9876543210',
    },
    { 
      company: 'Company 3',
      description: 'Description for Company 3',
      phoneNumber: '+5555555555',
    },
    { 
      company: 'Company 4',
      description: 'Description for Company 4',
      phoneNumber: '+1111111111',
    },
    { 
      company: 'Company 5',
      description: 'Description for Company 5',
      phoneNumber: '+9999999999',
    },
    // Add more items here with 'company', 'description', and 'phoneNumber' properties
  ];

  const [selectedItem, setSelectedItem] = React.useState<ListItem | null>(null);

  const onItemClick = (item: ListItem) => {
    setSelectedItem(item);
  };

  const handleAlertDismiss = () => {
    setSelectedItem(null);
  };

  return (
    <IonPage>
      <IonContent>
        <IonGrid>
        {/*contains the upper picture*/}
        <IonRow className="ion-text-center MenupicContainer">
            <IonCol>
            <div className='button-container'>
              {/* Text above the button */}
              <div className='selectortextoffset ion-text-nowrap'>Contactez-nous</div>
              <IonButton className="backgroundcubes" color="color-button-primary" >
                <IonImg src="./public/Contact.svg" alt="Contact.svg" className='ion-text-wrap MenuPics'></IonImg>
              </IonButton>
            </div>
            </IonCol>
          </IonRow>        
          {/*contains the list of companies*/}
          <IonRow className='contact-list-container ion-text-center'>
            <IonList className="full-width-list" lines='none'> 
              {items.map((item, index) => (
                <IonItem className='contact-list-item ion-text-center' key={index} onClick={() => onItemClick(item)}>
                  <IonLabel>
                    <h2>{item.company}</h2>
                    <p className='color'>{item.description}</p>
                  </IonLabel>
                </IonItem>
              ))}
            </IonList>
          </IonRow>
          <IonRow>
            <IonCol size="12" className="ion-padding ion-text-center">
              <NavBTN className='custombackbutton' whereTo="/french" />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      
      {/* popups when the user clicks on a company
          lists the companys name and description */}
      <IonAlert
        className='contact-custom-alert'
        isOpen={!!selectedItem}
        onDidDismiss={handleAlertDismiss}
        header={selectedItem ? selectedItem.company : ''}
        message={selectedItem ? selectedItem.description : ''}
        buttons={[
          { //this button calls the company
            text: 'Call',
            handler: () => {
              const phoneNumber = selectedItem?.phoneNumber || '';
              window.open(`tel:${phoneNumber}`, '_system');
              handleAlertDismiss(); // Dismiss the alert
            },
          },
          { //this button closes the alert
            text: 'Close',
            role: 'cancel',
          }
        ]}
      />

    </IonPage>
  );
};

export default Page;