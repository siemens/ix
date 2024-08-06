import { NavLink, Redirect, Route, HashRouter } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  isPlatform,
  setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

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

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

import '@ionic/react/css/palettes/dark.always.css';
/* import '@ionic/react/css/palettes/dark.class.css'; */
// import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
/* Core CSS for iX */
import '@siemens/ix/dist/siemens-ix/siemens-ix.css';
import './theme/variables.css';
import './theme/preview.css';

import {
  IxApplication,
  IxApplicationContext,
  IxApplicationHeader,
  IxAvatar,
  IxDropdownButton,
  IxDropdownItem,
  IxIconButton,
  IxMenu,
  IxMenuItem,
} from '@siemens/ix-react';
import Other from './pages/Other';
import { iconCheckboxes } from '@siemens/ix-icons/icons';

setupIonicReact();

const IxNavLinkMenuItem = ({ to, label }: { to: string; label: string }) => (
  <NavLink
    to={to}
    activeClassName="active"
    component={(props) => (
      <IxMenuItem
        onClick={props.navigate}
        active={props.className === 'active'}
        label={label}
      ></IxMenuItem>
    )}
  ></NavLink>
);

const ipad = [`sm`, 'md', 'lg'];
const iphone = [`sm`];

let breakpoints = isPlatform('ipad') ? ipad : iphone;

const App: React.FC = () => (
  <IxApplicationContext>
    <IonApp>
      <HashRouter>
        <IxApplication breakpoints={['sm']}>
          <IxApplicationHeader name="My App">
            <IxIconButton ghost icon={iconCheckboxes}></IxIconButton>
            <IxIconButton ghost icon={iconCheckboxes}></IxIconButton>
            <IxIconButton ghost icon={iconCheckboxes}></IxIconButton>

            <IxDropdownButton variant="secondary" label="Select config" ghost>
              <IxDropdownItem label="Config 1"></IxDropdownItem>
              <IxDropdownItem label="Config 2"></IxDropdownItem>
              <IxDropdownItem label="Config 3"></IxDropdownItem>
            </IxDropdownButton>

            <IxAvatar username="John Doe" extra="Administrator">
              <IxDropdownItem label="Action 1"></IxDropdownItem>
              <IxDropdownItem label="Action 2"></IxDropdownItem>
            </IxAvatar>
          </IxApplicationHeader>
          <IxMenu>
            <IxNavLinkMenuItem to="home" label="Home"></IxNavLinkMenuItem>
            <IxNavLinkMenuItem to="other" label="Other"></IxNavLinkMenuItem>
          </IxMenu>
          <IonRouterOutlet animated={false}>
            <Route path="/home">
              <Home />
            </Route>

            <Route path="/other">
              <Other />
            </Route>

            <Route exact path="/">
              <Redirect to="home" />
            </Route>
          </IonRouterOutlet>
        </IxApplication>
      </HashRouter>
    </IonApp>
  </IxApplicationContext>
);

export default App;
