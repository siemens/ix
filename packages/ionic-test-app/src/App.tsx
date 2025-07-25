import { NavLink, Redirect, Route, HashRouter } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
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
import '@siemens/ix/dist/siemens-ix/siemens-ix-core.css';
import '@siemens/ix/dist/siemens-ix/theme/classic-dark.css';
import '@siemens/ix/dist/siemens-ix/theme/classic-light.css';

import './theme/variables.css';
import './theme/preview.css';

import {
  IxApplication,
  IxApplicationContext,
  IxApplicationHeader,
  IxAvatar,
  IxDropdownButton,
  IxDropdownItem,
  IxIcon,
  IxIconButton,
  IxMenu,
  IxMenuItem,
  IxTabItem,
  IxTabs,
} from '@siemens/ix-react';
import Other from './pages/Other';
import {
  iconBulb,
  iconCheckboxes,
  iconStar,
  iconTree,
} from '@siemens/ix-icons/icons';
import Demo from './pages/Demo';
import { useEffect } from 'react';

setupIonicReact();

function useSearchParamChanged(
  paramName: string,
  callback: (newValue: string | null) => void
) {
  useEffect(() => {
    const handleParamChange = () => {
      const searchParams = new URLSearchParams(window.location.search);
      const newValue = searchParams.get(paramName);
      callback(newValue);
    };
    handleParamChange();
    window.addEventListener('popstate', handleParamChange);
    return () => {
      window.removeEventListener('popstate', handleParamChange);
    };
  }, [paramName, callback]);
}

const IxNavLinkMenuItem = ({
  to,
  label,
  icon,
  counter,
}: {
  to: string;
  label: string;
  icon: string;
  counter?: number;
}) => (
  <NavLink
    to={to}
    activeClassName="active"
    component={(props) => (
      <IxMenuItem
        icon={icon}
        onClick={props.navigate}
        active={props.className === 'active'}
        label={label}
        notifications={counter}
      ></IxMenuItem>
    )}
  ></NavLink>
);

const IxNavLinkTab = ({
  to,
  children,
  counter,
}: {
  to: string;
  children: any;
  counter?: number;
}) => (
  <NavLink
    to={to}
    activeClassName="active"
    component={(props) => (
      <IxTabItem
        icon
        onClick={props.navigate}
        selected={props.className === 'active'}
        counter={counter}
      >
        {children}
      </IxTabItem>
    )}
  ></NavLink>
);

const App: React.FC = () => {
  useSearchParamChanged('preview-theme', (newValue) => {
    console.log('New theme:', newValue);
    if (!newValue) {
      return;
    }

    document.body.classList.remove(
      'theme-brand-dark',
      'theme-brand-light',
      'theme-classic-dark',
      'theme-classic-light'
    );

    document.body.classList.add(newValue);
  });
  return (
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
            <IxMenu enableToggleTheme>
              <IxNavLinkMenuItem
                to="home"
                label="Home"
                icon={iconTree}
              ></IxNavLinkMenuItem>
              <IxNavLinkMenuItem
                to="demo"
                label="Demo"
                icon={iconBulb}
              ></IxNavLinkMenuItem>
              <IxNavLinkMenuItem
                to="other"
                label="Other"
                icon={iconStar}
                counter={4}
              ></IxNavLinkMenuItem>
            </IxMenu>
            <IonRouterOutlet animated={false}>
              <Route path="/home">
                <Home />
              </Route>

              <Route path="/other">
                <Other />
              </Route>

              <Route path="/demo">
                <Demo />
              </Route>

              <Route exact path="/">
                <Redirect to="home" />
              </Route>
            </IonRouterOutlet>
            <IxTabs layout="stretched" placement="top" rounded slot="bottom">
              <IxNavLinkTab to="home">
                <IxIcon name={iconTree}></IxIcon>
              </IxNavLinkTab>
              <IxNavLinkTab to="demo">
                <IxIcon name={iconStar}></IxIcon>
              </IxNavLinkTab>
              <IxNavLinkTab to="other" counter={4}>
                <IxIcon name={iconBulb}></IxIcon>
              </IxNavLinkTab>
            </IxTabs>
          </IxApplication>
        </HashRouter>
      </IonApp>
    </IxApplicationContext>
  );
};

export default App;
