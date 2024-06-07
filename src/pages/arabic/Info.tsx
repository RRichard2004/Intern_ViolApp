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
  IonList,
  IonItem,
  IonLabel,
} from '@ionic/react';

import NavBTN from '../../components/NavigateBtn';

const Page: React.FC = () => {
//items that will be shown on the list, can easily be expanded
  const items = [
    { id: 1, title: 'TestPage', description: 'The link to a PDF website', link: 'http://www.educamatic.com/wp-content/uploads/2023/11/%D8%A8%D9%83%D8%A7%D9%84%D9%88%D8%B1%D9%8A%D8%A7-%D8%B9%D9%84%D9%88%D9%85-%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A9.pdf' },
    { id: 2, title: 'YouTube', description: 'Video-sharing platform for watching and uploading videos', link: 'https://youtube.com' },
    { id: 3, title: 'Google', description: 'Search engine for finding information online', link: 'https://google.com' },
    { id: 4, title: 'GitHub', description: 'Platform for hosting and collaborating on code', link: 'https://github.com' },
  ];

  //on button clicks opens given links on another page
  const handleItemClick = (link: string) => {
    window.open(link, '_blank');
  };


return (
<IonPage>
<IonContent style={{ overflowY: 'hidden' }}>
  <IonGrid style={{ height: '100%' }}>
    {/* Picture at the top */}
    <IonRow className="ion-text-center MenupicContainer">
      <IonCol>
        <div className='button-container'>
          {/* Text above the button */}
          <div className='selectortextoffset ion-text-nowrap'>معلومات تهمك</div>
          <IonButton className="backgroundcubes" color="color-button-primary">
            <IonImg src="./public/Info.svg" alt="Information.svg" className='ion-text-wrap MenuPics'></IonImg>
          </IonButton>
        </div>
      </IonCol>
    </IonRow>

    <IonRow>
      <IonCol size="12" className="ion-padding ion-text-center">
          <IonList lines='none'>
            {/* Fills the list with all items */}
            {items.map((item) => (
              <IonItem className='list-item' key={item.id} onClick={() => handleItemClick(item.link)}>
                <IonLabel>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
      </IonCol>
    </IonRow>

    <IonRow>
      <IonCol size="12" className="ion-padding ion-text-center">
        <NavBTN className='custombackbutton' whereTo="/arabic" />
      </IonCol>
    </IonRow>
  </IonGrid>
</IonContent>
</IonPage>

  );
};

export default Page;
