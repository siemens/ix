import {
  IxButton,
  IxContent,
  IxContentHeader,
  IxEventList,
  IxEventListItem,
  IxKeyValue,
  IxKeyValueList,
  Modal as IxModal,
  IxModalContent,
  IxModalFooter,
  IxModalHeader,
  ModalRef,
  showModal,
} from '@siemens/ix-react';
import './Home.css';

import { Device, DeviceInfo } from '@capacitor/device';
import { ScreenOrientation } from '@capacitor/screen-orientation';
import { useLayoutEffect, useRef, useState } from 'react';
import { isPlatform } from '@ionic/react';

const TriggerEventModal = () => {
  const modalRef = useRef<ModalRef>(null);
  const [name, setName] = useState('New Event');

  function onSave() {
    if (modalRef.current) {
      modalRef.current.close(name);
    }
  }

  function onCancel() {
    if (modalRef.current) {
      modalRef.current.dismiss();
    }
  }

  return (
    <IxModal ref={modalRef}>
      <IxModalHeader>Create new Event</IxModalHeader>
      <IxModalContent>
        <label>Event name</label>
        <input
          className="ix-form-control"
          type="text"
          onInput={(e) => setName(e.currentTarget.value)}
          defaultValue={name}
        />
      </IxModalContent>
      <IxModalFooter>
        <IxButton onClick={onSave}>Save</IxButton>
        <IxButton onClick={onCancel}>Cancel</IxButton>
      </IxModalFooter>
    </IxModal>
  );
};

const Home: React.FC = () => {
  const [events, setEvents] = useState<string[]>([]);

  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>();
  const [batteryLevel, setBatteryLevel] = useState<number>();
  const [orientation, setOrientation] = useState<string>('');

  useLayoutEffect(() => {
    ScreenOrientation.orientation().then(({ type }) => {
      setOrientation(type);
    });

    ScreenOrientation.addListener('screenOrientationChange', ({ type }) => {
      setOrientation(type);
    });
  }, []);

  useLayoutEffect(() => {
    async function getDeviceInfo() {
      const info = await Device.getInfo();
      setDeviceInfo(info);
    }

    getDeviceInfo();

    async function getBatteryInfo() {
      const info = await Device.getBatteryInfo();

      if (!info.batteryLevel) {
        setBatteryLevel(0);
        return;
      }

      setBatteryLevel(info.batteryLevel * 100);
    }

    getBatteryInfo();
  }, []);

  async function onNewEntryClick() {
    const result = await showModal({
      centered: true,
      content: <TriggerEventModal></TriggerEventModal>,
      size: 'full-screen',
    });

    result.onClose.once((eventName) => {
      setEvents([...events, eventName]);
    });
  }

  return (
    <IxContent>
      <IxContentHeader
        slot="header"
        headerTitle="My Phone"
        headerSubtitle="Show information about your phone"
      >
        <IxButton outline onClick={onNewEntryClick}>
          Create new entry
        </IxButton>
      </IxContentHeader>

      <div className="Home__Content">
        <IxKeyValueList className="Home__System_Settings">
          <IxKeyValue label="Device" value={deviceInfo?.model} />
          <IxKeyValue label="Version" value={`${deviceInfo?.iOSVersion}`} />
          <IxKeyValue label="Battery" value={`${batteryLevel}%`} />
          <IxKeyValue
            label="Orientation"
            value={`${isPlatform('mobile') ? orientation : 'portrait-primary'}`}
          />
        </IxKeyValueList>

        <div className="Home__Event__Container">
          <h2>Events</h2>
          <div className="Home__Event__Event_List">
            <IxEventList animated={false}>
              <IxEventListItem itemColor="color-alarm">
                Battery low
              </IxEventListItem>
              <IxEventListItem itemColor="color-success">
                Upload success
              </IxEventListItem>
              <IxEventListItem itemColor="color-warning">
                Heat limit
              </IxEventListItem>
              <IxEventListItem itemColor="color-alarm">
                Restart required
              </IxEventListItem>

              {events.map((event, index) => (
                <IxEventListItem key={index}>{event}</IxEventListItem>
              ))}
            </IxEventList>
          </div>
        </div>
      </div>
    </IxContent>
  );
};

export default Home;
