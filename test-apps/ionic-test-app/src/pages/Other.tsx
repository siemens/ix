/*
 * COPYRIGHT (c) Siemens AG 2018-2024 ALL RIGHTS RESERVED.
 */
import { IonContent, IonPage } from '@ionic/react';
import './Other.css';
import {
  IxBlind,
  IxContent,
  IxContentHeader,
  IxDropdown,
  IxDropdownItem,
  IxIconButton,
  IxKpi,
  IxTypography,
} from '@siemens/ix-react';
import {
  iconContextMenu,
  iconInfo,
  iconRename,
  iconTrashcan,
} from '@siemens/ix-icons/icons';

const Other: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IxContent>
          <IxContentHeader
            slot="header"
            headerTitle="Other"
            headerSubtitle="Explain what this page is about"
          ></IxContentHeader>
          <IxBlind label="Example" sublabel="Sublabel">
            <IxIconButton
              id="context-menu"
              slot="header-actions"
              ghost
              icon={iconContextMenu}
            ></IxIconButton>
            <IxTypography format="body">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </IxTypography>
          </IxBlind>
          <IxDropdown trigger={'context-menu'}>
            <IxDropdownItem icon={iconRename}>Rename...</IxDropdownItem>
            <IxDropdownItem icon={iconTrashcan}>Delete</IxDropdownItem>
          </IxDropdown>

          <IxKpi label="Motor speed" value="Nominal"></IxKpi>
          <IxKpi label="Motor speed" value="122.6" unit="rpm"></IxKpi>
          <IxKpi label="Motor speed" value="122.6" state="alarm"></IxKpi>
          <IxKpi label="Motor speed" value="122.6" state="warning"></IxKpi>

          <IxKpi
            label="Motor speed"
            value="Nominal"
            orientation="vertical"
          ></IxKpi>
          <IxKpi
            label="Motor speed"
            value="{122.6}"
            unit="rpm"
            state="alarm"
            orientation="vertical"
          ></IxKpi>
        </IxContent>
      </IonContent>
    </IonPage>
  );
};

export default Other;
