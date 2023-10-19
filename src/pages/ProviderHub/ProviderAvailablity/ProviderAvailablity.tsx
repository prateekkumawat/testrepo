import { Button, notification, Spin, Typography } from 'antd';
import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { BsCalendar3 } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import { ProviderService } from '../../../Service/Provider';
import { ScheduleType, TabValues } from '../types';
import { ProviderAvailablityWrapper } from './ProviderAvailablity.styled';
import { ScheduleDeailRow } from './ScheduleDetailRow';

export interface ProviderAvailablityProp {
  className?: string;
  setActiveTab: Dispatch<SetStateAction<TabValues | undefined>>;
}
export const ProviderAvailablity: FC<ProviderAvailablityProp> = ({
  className,
  setActiveTab,
}) => {
  const { providerId } = useParams();
  const providerService = ProviderService();
  const [workingHoursList, setWorkingHoursList] = useState<Array<any>>([]);
  const [leavesList, setLeavesList] = useState<Array<any>>([]);
  const [loader, setLoader] = useState<boolean>(true);

  useEffect(() => {
    const getPriviederSchedule = async (providerID: string) => {
      try {
        setLoader(true);
        const data: Array<any> = await providerService.getProviderSchedule(
          providerID
        );
        const workinglist: Array<any> = [];
        const leaveList: Array<any> = [];
        data?.forEach((d) => {
          if (d.scheduleType === ScheduleType.LEAVE) leaveList.push(d);
          else if (d.scheduleType === ScheduleType.WORKING_HOURS)
            workinglist.push(d);
        });
        setWorkingHoursList(workinglist);
        setLeavesList(leaveList);
        setLoader(false);
      } catch (err) {
        setLoader(false);
        notification.error({
          message: 'Error occured',
        });
      }
    };
    if (providerId) getPriviederSchedule(providerId);
  }, [providerId]);

  return (
    <ProviderAvailablityWrapper className={className}>
      <div className="card-section">
        <div className="card-section-header">
          <Typography className="header-title"> Working Hours </Typography>
          <Button
            onClick={() => {
              setActiveTab(TabValues.WORKING_HOURS);
            }}
          >
            + Add New
          </Button>
        </div>
        <div className="hours-row">
          <div className="hours-first-half">
            {loader ? (
              <Spin />
            ) : (
              workingHoursList?.map((list, index) => (
                <ScheduleDeailRow
                  btnClick={(id: string | number) => {
                    setActiveTab(TabValues.WORKING_HOURS);
                  }}
                  editClick={(id: string | number) => {
                    setActiveTab(TabValues.WORKING_HOURS);
                  }}
                  btnText={list.approveFlag ? 'Approved' : 'Pending'}
                  firstValue={list.title}
                  startDate={list.startDate}
                  endDate={list.endDate}
                  index={index}
                  key={list.title}
                />
              ))
            )}
          </div>
        </div>
      </div>

      <div className="card-section">
        <div className="card-section-header">
          <Typography className="header-title"> Leave </Typography>
          <Button
            onClick={() => {
              setActiveTab(TabValues.LEAVE);
            }}
          >
            + Add New
          </Button>
        </div>

        {loader ? (
          <div
            style={{
              display: 'grid',
              placeContent: 'center',
              height: '100%',
              width: '100%',
            }}
          >
            <Spin />
          </div>
        ) : (
          leavesList?.map((list, index) => (
            <ScheduleDeailRow
              btnClick={(id: string | number) => {
                setActiveTab(TabValues.LEAVE);
              }}
              editClick={(id: string | number) => {
                setActiveTab(TabValues.LEAVE);
              }}
              btnText={list.approveFlag ? 'Approved' : 'Pending'}
              firstValue={list.reasonForLeave}
              startDate={list.startDate}
              endDate={list.endDate}
              index={index}
              key={list.reasonForLeave}
            />
          ))
        )}
      </div>
      <div
        className="calendar-icon"
        onClick={() => {
          setActiveTab(TabValues.MONTLY_CALENDAR);
        }}
      >
        <BsCalendar3 />
      </div>
    </ProviderAvailablityWrapper>
  );
};
