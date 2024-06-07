import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { IonApp, IonPage, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { setupIonicReact } from '@ionic/react';

//importing default css
import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/typography.css';


// Importing our own css
import './theme/home.css';
import './theme/language_selector.css';
import './theme/main.css';
import './theme/Menu.css';
import './theme/form.css';
import './theme/contact.css';
import './theme/variables.css';


{/* Naming and importing all pages */}
import Language from './pages/Language';

import Home_a from './pages/arabic/Home';
  import Menu_a from './pages/arabic/Menu';
  import Form_a from './pages/arabic/Form';
  import Info_a from './pages/arabic/Info';
  import Contacts_a from './pages/arabic/Contacts';

import Home_f from './pages/french/Home';
  import Menu_f from './pages/french/Menu';
  import Form_f from './pages/french/Form';
  import Info_f from './pages/french/Info';
  import Contacts_f from './pages/french/Contacts';

setupIonicReact();

const App: React.FC = () => (
<IonApp>
<IonReactRouter>
  <Switch>
    {/* Setting up routes for each page */}
    <Route exact path="/" component={Language} />
        {/* ·exact· makes it, so only correct links can open each pages
            ·path· is what needed in the searcbar for each page to appear
            ·component· is the page witch will appear on the exact path */}

    <Route exact path="/arabic" component={Home_a} />
      <Route exact path="/arabic/menu" component={Menu_a} />
      <Route exact path="/arabic/form" component={Form_a} />
      <Route exact path="/arabic/info" component={Info_a} />
      <Route exact path="/arabic/contact" component={Contacts_a} />

    <Route exact path="/french" component={Home_f} />
      <Route exact path="/french/menu" component={Menu_f} />
      <Route exact path="/french/form" component={Form_f} />
      <Route exact path="/french/info" component={Info_f} />
      <Route exact path="/french/contact" component={Contacts_f} />


    {/* Redirecting to the default page for unknown links */}
    <Redirect to="/" />
  </Switch>
</IonReactRouter>
</IonApp>
);
export default App;
