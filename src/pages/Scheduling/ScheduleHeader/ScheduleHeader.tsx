import { Button, Row, Typography } from 'antd';
import dayjs from 'dayjs';
import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { SecondaryButton } from '../../../Component/Button/Button';
import {
  StyledSimpleDatePicker,
  StyledSimpleSelect,
} from '../../../Component/Form/Form';
import { ProviderService } from '../../../Service/Provider';
import { dateFormat } from '../../../utility';
import { DateFormats } from '../../../Types/Types';
import {
  DatePickerWrapper,
  NextButton,
  PrevButton,
  StyledHeaderText,
} from './ScheduleHeader.styled';

export interface HeaderProp {
  selectedSpeciality: string;
  setSelectedSpeciality: Dispatch<SetStateAction<string>>;
  selectedDate: string;
  setSelectedDate: Dispatch<SetStateAction<string>>;
  setViewBooking: Dispatch<SetStateAction<boolean>>;
  viewBooking: boolean;
}

export const ScheduleHeader: FC<HeaderProp> = ({
  selectedSpeciality,
  setSelectedSpeciality,
  viewBooking,
  setViewBooking,
  selectedDate,
  setSelectedDate,
}) => {
  const providerService = ProviderService();
  const [specialityList, setSpecialityList] = useState<Array<string>>([]);
  const [selectedDateValue, setSelectedDateValue] =
    useState<dayjs.Dayjs | null>(dayjs());

  useEffect(() => {
    const loadSpeciality = async () => {
      try {
        const data = await providerService.getSpeciality();
        setSpecialityList(data);
      } catch (err) {
        console.log('loadSpeciality -> err', err);
      }
    };
    loadSpeciality();
  }, []);

  const handleDateChange = (daysToAdd: number) => {
    const targetDate = selectedDate
      ? dayjs(selectedDate)
          .add(daysToAdd, 'day')
          .format(DateFormats.YearMonthDay)
      : dayjs(selectedDateValue)
          .add(daysToAdd, 'day')
          .format(DateFormats.YearMonthDay);
    setSelectedDate(targetDate);
  };
  console.log('specialityList', specialityList);

  return (
    <Row className="schedule-header">
      <StyledHeaderText>Pain Management center</StyledHeaderText>
      {viewBooking ? (
        <Row className="middle-section">
          <PrevButton
            className="date-handlers prev-button"
            onClick={() => handleDateChange(-1)}
          >
            {' '}
            {'<'}{' '}
          </PrevButton>
          <DatePickerWrapper>
            <StyledSimpleDatePicker
              className="datepicker-view-appointment date-picker"
              defaultValue={dayjs()}
              name="date"
              value={selectedDate ? dayjs(selectedDate) : null}
              onChange={(_value, dateString) => {
                if (dateString) {
                  const formattedDate = dateString ? dayjs(dateString) : null;
                  setSelectedDate(
                    formattedDate
                      ? formattedDate.format(DateFormats.YearMonthDay)
                      : ''
                  );
                  setSelectedDateValue(formattedDate || dayjs());
                } else {
                  handleDateChange(0);
                }
              }}
              placeholder={dayjs().format(DateFormats.MonthDayYear)}
              format={DateFormats.MonthDayYear}
            />
          </DatePickerWrapper>
          <NextButton
            className="date-handlers next-button"
            onClick={() => handleDateChange(+1)}
          >
            {' '}
            {'>'}{' '}
          </NextButton>
          <Button
            className="btn"
            type="primary"
            onClick={() => {
              setSelectedDate(dayjs().format(DateFormats.YearMonthDay));
            }}
          >
            Today
          </Button>
        </Row>
      ) : null}

      <Row className="last-section">
        <StyledSimpleSelect
          className="speciality-drop-down"
          value={selectedSpeciality}
          onChange={(value: any) => {
            setSelectedSpeciality(value);
          }}
          options={specialityList.filter((speciality) => speciality !== null).map((speciality) => ({
            label: speciality,
            value: speciality,
          }))}
        />
        <SecondaryButton
          onClick={() => {
            setViewBooking((prev) => !prev);
          }}
        >
          {viewBooking ? '+ Create new' : 'View Appointment'}
        </SecondaryButton>
      </Row>
    </Row>
  );
};
