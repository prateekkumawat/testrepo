import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { Row, Button, Spin } from 'antd';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { ViewScheduleWrapper } from './ViewSchedule.styled';
import { colorCodes } from '../utility';
import { ProviderService } from '../../../Service/Provider';
import { AppointmentService } from '../../../Service/Appointment';
import { ProviderWithId } from '../../Providers/types';
import { StyledSimpleSelect } from '../../../Component/Form/Form';
import { ViewSchedueUI } from './ViewSchedueUI';
import { combineDateAndTime } from '../../../utility';

export interface ViewScheduleProp {
  className?: string;
  selectedSpeciality: string;
  selectedDate: string;
  setSelectedSchedule: Dispatch<SetStateAction<any>>;
}

interface ScheduleColumn {
  appointmentId: number;
  patientId: number;
  providerId: number;
  typeOfVisit: string;
  speciality: string;
  currentStatusOfVisit: string;
  reasonOfVisit: string;
  scheduleDate: string;
  scheduleStartTime: string;
  scheduleEndTime: string;
}

export interface ResourceMap {
  resourecId: string;
}

export const ViewSchedule: FC<ViewScheduleProp> = ({
  className,
  selectedSpeciality,
  selectedDate,
  setSelectedSchedule,
}) => {
  const [rows, setRows] = useState<Array<any>>([]);
  const [selectedProvider, setSelectedProvider] = useState<
    Array<ProviderWithId>
  >([]);
  const [loader, setLoader] = useState<boolean>(true);
  const [providerList, setProviderList] = useState<Array<ProviderWithId>>([]);
  const [selectedProviderIds, setSelectedProviderIds] = useState<number[]>([]);
  const providerService = ProviderService();
  const appointmentService = AppointmentService();

  const handleProviderSelectChange = (value: any) => {
    const temp = value.map((e: any) =>
      providerList.find((pl) => pl.providerId === e)
    );
    if (temp?.length) {
      setSelectedProvider([...temp]);
      setSelectedProviderIds(value);
    }
  };

  const handleRemoveProvider = (provider: ProviderWithId) => {
    setSelectedProvider((prev: any) => {
      if (!prev) return [];
      const updatedProviders = prev.filter(
        (e: any) => e.providerId !== Number(provider.providerId)
      );
      const updatedProviderIds = selectedProviderIds.filter(
        (id) => id !== Number(provider.providerId)
      );
      console.log('Updated Providers:', updatedProviders);
      console.log('Updated Provider IDs:', updatedProviderIds);
      setSelectedProviderIds(updatedProviderIds);
      return updatedProviders;
    });
  };

  useEffect(() => {
    const getProviderBySpeciality = async () => {
      try {
        const data = await providerService.getProviderBySpeciality(
          selectedSpeciality
        );
        setProviderList(data);
      } catch (err) {
        console.log('getProviderBySpeciality -> err', err);
      }
    };

    getProviderBySpeciality();
  }, [selectedSpeciality]);

  useEffect(() => {
    const getSchedule = async () => {
      setLoader(true);
      try {
        if (selectedProvider?.length) {
          const listORow = [];
          // eslint-disable-next-line no-restricted-syntax
          for await (const selectedProvp of selectedProvider) {
            const data: Array<ScheduleColumn> =
              await appointmentService.getAllAppointmentForProvider(
                selectedProvp.providerId,
                selectedDate
              );
            const ro = data?.map((r) => ({
              ...r,
              resourceId: r.providerId,
              id: r.appointmentId,
              title: r.patientId,
              start: combineDateAndTime(r.scheduleDate, r.scheduleStartTime),
              end: combineDateAndTime(r.scheduleDate, r.scheduleEndTime),
            }));
            listORow.push(...ro);
          }
          setRows(listORow);
        } else {
          const data: Array<ScheduleColumn> =
            await appointmentService.getAllAppointment(selectedDate);
          const ro = data?.map((r) => ({
            ...r,
            resourceId: r.providerId,
            id: r.appointmentId,
            title: r.patientId,
            start: combineDateAndTime(r.scheduleDate, r.scheduleStartTime),
            end: combineDateAndTime(r.scheduleDate, r.scheduleEndTime),
          }));
          setRows(ro);
        }
      } catch (err) {
        console.log('getProviderBySpeciality -> err', err);
      } finally {
        setLoader(false);
      }
    };

    getSchedule();
  }, [selectedProvider, selectedDate]);

  return (
    <ViewScheduleWrapper className={className}>
      <Row className="view-schedule-header-wrapper">
        <Row className="color-code-wrapper">
          {Object.keys(colorCodes).map((e) => (
            <div className="color-codes" key={e}>
              <div
                className="color-circle"
                style={{
                  backgroundColor: colorCodes[e as keyof typeof colorCodes],
                }}
              />
              <div className="value">{e}</div>
            </div>
          ))}
        </Row>
        <Row style={{ minWidth: '28%' }}>
          <StyledSimpleSelect
            mode="multiple"
            maxTagCount={2}
            style={{ minWidth: '100%' }}
            className="provider-drop-down"
            placeholder="Search Dr Name"
            value={selectedProviderIds}
            // onChange={(value: any) => {
            //   const temp = value.map((e: any) =>
            //     providerList.find((pl) => pl.providerId === e)
            //   );
            //   if (temp?.length) setSelectedProvider([...temp]);
            // }}
            onChange={handleProviderSelectChange}
            options={providerList?.map((provider) => ({
              label: [provider.prefix, provider.firstName, provider.lastName]
                .map((e) => e.trim())
                .join(' '),
              value: provider.providerId,
            }))}
          />
        </Row>
      </Row>
      {loader ? (
        <div
          style={{
            display: 'gird',
            placeContent: 'center',
            height: '80vh',
            width: '100%',
          }}
        >
          <Spin />
        </div>
      ) : (
        <ViewSchedueUI
          setSelectedSchedule={setSelectedSchedule}
          selectedDate={selectedDate}
          backgroundEvents={[
            {
              resourceId: 3,
              providerId: 3,
              title: <p>Available for Clients</p>,
              start: new Date(2023, 7, 25, 10),
              end: new Date(2023, 7, 25, 12),
            },
          ]}
          events={rows?.length ? rows : []}
          resourceMap={selectedProvider?.map((provider) => ({
            ...provider,
            resourceTitle: (
              <Row
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                  padding: '10px',
                  alignItems: 'center',
                }}
              >
                <p
                  style={{
                    width: '75%',
                  }}
                >
                  {provider.firstName}
                </p>
                <Button
                  style={{
                    maxWidth: '30px',
                    width: '15%',
                    padding: 0,
                  }}
                  onClick={() => handleRemoveProvider(provider)}
                >
                  X
                </Button>
              </Row>
            ),
          }))}
        />
      )}
    </ViewScheduleWrapper>
  );
};
