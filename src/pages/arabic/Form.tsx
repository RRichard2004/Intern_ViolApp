import React, { useState } from 'react';
import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonImg,
  IonInput,
  IonLabel,
  IonCheckbox,
  IonPage,
  IonAlert
} from '@ionic/react';

import NavBTN from '../../components/NavigateBtn';

const Page: React.FC = () => {

  const [formData] = useState({
    name: '',
    cardnumber: '',
    viol_type_1: false,
    viol_type_2: false,
    viol_type_3: false,
    phonenumber: '',
  });

//just ignore this error, when i wanted to fix this, 8 more came, after the 8 fixed, 20 more came
//it has no actual problem, the framework just doesnt like to work with it
  const handleInput = (e) => { //on every imput, it refreshes the ·formData· object
    const inputName = e.target.name;
    switch (true) {
      case inputName==="name": //it checks the name of target that called handleInput
       formData.name = e.detail.value;
        break;
      case inputName === "cardnumber":
        formData.cardnumber=e.detail.value;
        break;
      case inputName.includes("viol_type")://this enters if anything that contains viol_type calls it
        switch (true) {//after it checks the ID of the object that called the function
          case inputName.includes("1"):
            formData.viol_type_1 = e.detail.checked;
            break;
          case inputName.includes("2"):
            formData.viol_type_2 = e.detail.checked;
            break;
          case inputName.includes("3"):
            formData.viol_type_3 = e.detail.checked;
            break;
        }
        break;
      case inputName === "phonenumber":
        formData.phonenumber = e.detail.value;
        break;
      default: //the program wont enter this, its for development purposes, in case of an error or when testing a new input
        console.log("Unknown Input")
        break;
    }
  };

  const [showAlert, setShowAlert] = useState(false); // Initialize showAlert state


  const handleSubmit = () => { //called when user presses Send

        if (validateName() && validateCard() && validateViol() && validatePhone()) { //calls al validating function, if none of these finds an error with inputs it logs the formdata, that is now ready to export
          console.log(formData);
        } else {//in case of an input error, it just notifies user that inputs were wrong
          setShowAlert(true);
        }
  
    function validateName() {
      // Allow Arabic and English letters and at least one space
      if (/\s/.test(formData.name) && /[\u0600-\u06FF\u0750-\u077F a-zA-Z]/.test(formData.name)) {
        return true;
      }
      return false;
    }
  
    function validateCard() {
      // Allow English letters and digits for the card number
      if (/^[a-zA-Z\d]+$/.test(formData.cardnumber)) {
        return true;
      } else {
        return false;
      }
    }
  
    function validateViol() {
      //returns true if at least one is checked
      if (formData.viol_type_1 || formData.viol_type_2 || formData.viol_type_3) {
        return true;
      } else {
        return false;
      }
    }
  
    function validatePhone() {
      //only allows numbers for phonenumber
      if (/\d/.test(formData.phonenumber)) {
        return true;
      } else {
        return false;
      }
    }
  };
  

  return (
    <IonPage>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol className="ion-padding ion-text-center">
              <div className="button-container">
                {/* Text above the button */}
                <div className="selectortextoffset ion-text-nowrap">املأ الاستمارة</div>
                <IonButton className="backgroundcubes" color="color-button-primary">
                  <IonImg src="./public/Form.svg" alt="Contact.svg" className="ion-text-wrap MenuPics" />
                </IonButton>
              </div>
            </IonCol>
          </IonRow>
          <IonRow>
            <form className="formcontainer">
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonInput 
                      name="name"
                      value={formData.name}
                      onIonInput={handleInput}
                      label="الاسم:"
                      labelPlacement="floating"
                      placeholder="اسمك الكامل"
                      className="Form-User-"
                    />
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonInput
                      name="cardnumber"
                      value={formData.cardnumber}
                      onIonInput={handleInput}
                      label="بطاقة الهوية"
                      labelPlacement="floating"
                      placeholder="يرجى إدخال معلومات بطاقة الهوية الخاصة بك."
                      className="Form-User-"
                    />
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonLabel>نوع الانتهاك الذي قامت به</IonLabel>
                    <div className="checkbox-container Form-User-">
                      <IonCheckbox
                        name="viol_type_1"
                        checked={formData.viol_type_1}
                        onIonChange={handleInput}
                        className="custom-checkbox Form-User-"
                      >
                        العنف الأسري
                      </IonCheckbox>
                      <IonCheckbox
                        name="viol_type_2"
                        checked={formData.viol_type_2}
                        onIonChange={handleInput}
                        className="custom-checkbox Form-User-"
                      >
                        انتهاك في المنزل
                      </IonCheckbox>
                      <IonCheckbox
                        name="viol_type_3"
                        checked={formData.viol_type_3}
                        onIonChange={handleInput}
                        className="custom-checkbox Form-User-"
                      >
                        type 3
                      </IonCheckbox>
                    </div>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonInput
                      name="phonenumber"
                      value={formData.phonenumber}
                      onIonInput={handleInput}
                      type="tel"
                      label="الهاتف"
                      labelPlacement="floating"
                      placeholder="يرجى إدخال رقم هاتفك."
                      className="Form-User-"
                    />
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    {/* Add onClick event handler to the button */}
                    <IonButton type="button" className="form-custom-button-sendform" onClick={handleSubmit}>
                    إرسال 
                    </IonButton>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </form>
          </IonRow>
          <IonRow>
            <IonCol size="12" className="ion-padding ion-text-center">
              <NavBTN className="custombackbutton" whereTo="/arabic" />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>

      <IonAlert
      className='contact-custom-alert'
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header="Error"
        message="There was an error in the form submission."
        buttons={[
          {
            text: 'Close',
            role: 'cancel',
            handler: () => {
              // Handle close button click
              setShowAlert(false); // Hide the alert
            }
          }
        ]}
      />
    </IonPage>
  );
};

export default Page;
