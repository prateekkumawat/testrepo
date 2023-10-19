import React, { FC } from 'react';
import { Row, Typography } from 'antd';
import { FormikProps } from 'formik';
import moment from 'moment';
import { BsCameraFill } from 'react-icons/bs';
import { RangePickerProps } from 'antd/es/date-picker';
import dayjs from 'dayjs';
import { ShadowedCard } from '../../../../Component/Card/Card';
import {
  StyledFormItem,
  StyledSimpleInput,
  StyledSimpleDatePicker,
  StyledInput,
} from '../../../../Component/Form/Form';
import { getAgeFromDate, getBase64 } from '../../../../utility';
import { CreatePatientScreen1 } from '../../Types';
import { PhoneNumber } from '../../../../Component/PhoneNumber/PhoneNumber';

interface CustomInputProps {
  value?: any;
  onChange?: (value: any) => void;
  onValueChange?: (value: any) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  value,
  onChange,
  onValueChange,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (onChange) {
      onChange(newValue);
    }

    if (onValueChange) {
      onValueChange(newValue);
    }
  };

  return (
    <StyledInput value={value} onChange={handleInputChange} /* Other props */ />
  );
};

export const PatientInfoBasicCard1: FC<FormikProps<CreatePatientScreen1>> = (
  formikProps
) => {
  const returnProfileImageSrc = (): string => {
    if (formikProps.values.profileImage) {
      return `data:image;base64,${formikProps.values.profileImage}`;
    }
    if (formikProps.values.gender === 'Female') return '/female.png';
    return '/male.png';
  };

  const disabledDate: RangePickerProps['disabledDate'] = (current) => {
    return current && current > dayjs().endOf('day');
  };

  return (
    <div className="">
      <div className="image-section">
        <div className="patient-profile">
          <img
            src={returnProfileImageSrc()}
            className={`${
              formikProps.values.profileImage ? 'has-image' : 'no-image'
            } profile`}
            alt="profile"
            height={150}
            width={150}
          />
          <label htmlFor="file-input" className="camera-label">
            <input
              style={{ display: 'none' }}
              id="file-input"
              type="file"
              onChange={async (e) => {
                const base64 = await getBase64(e?.target?.files?.[0]);
                formikProps.setFieldValue('profileImage', base64);
              }}
            />
            <BsCameraFill className="camera-icon" />
          </label>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <StyledFormItem
            label="SSN"
            name="ssn"
            initialValue={formikProps.values.ssn}
            help={formikProps.errors.ssn}
            validateStatus={formikProps.errors.ssn ? 'error' : ''}
          >
            <StyledSimpleInput
              name="ssn"
              onChange={formikProps.handleChange}
              onBlur={formikProps.handleBlur}
              placeholder="SSN"
            />
          </StyledFormItem>
          <StyledFormItem
            label="Primary Phone Number"
            required
            name="primaryPhoneNumber"
            validateStatus={
              formikProps.errors.primaryPhoneNumber ? 'error' : ''
            }
            help={formikProps.errors.primaryPhoneNumber}
            initialValue={formikProps.values.primaryPhoneNumber}
          >
            <PhoneNumber
              error={formikProps?.errors?.primaryPhoneNumber}
              defaultValue={formikProps.values.primaryPhoneNumber}
              onValueChange={(value) =>
                formikProps.setFieldValue(
                  'primaryPhoneNumber',
                  value?.floatValue?.toString()
                )
              }
            />
          </StyledFormItem>
          <StyledFormItem
            label="Secondary Phone Number"
            name="secondaryPhoneNumber"
            initialValue={formikProps.values.secondaryPhoneNumber}
            validateStatus={
              formikProps.errors.secondaryPhoneNumber ? 'error' : ''
            }
            help={formikProps.errors.secondaryPhoneNumber}
          >
            <PhoneNumber
              error={formikProps?.errors?.secondaryPhoneNumber}
              defaultValue={formikProps.values.secondaryPhoneNumber}
              onValueChange={(value) =>
                formikProps.setFieldValue(
                  'secondaryPhoneNumber',
                  value?.floatValue?.toString()
                )
              }
            />
          </StyledFormItem>
          <StyledFormItem
            label="E-mail Id"
            name="email"
            initialValue={formikProps.values.email}
            help={formikProps.errors.email}
            validateStatus={formikProps.errors.email ? 'error' : ''}
          >
            <StyledSimpleInput
              name="email"
              onChange={formikProps.handleChange}
              onBlur={formikProps.handleBlur}
              placeholder="Type an email id"
            />
          </StyledFormItem>

          <div className="row align-items-center">
            <div className="col-md-8">
              <StyledFormItem
                label="Date of Birth"
                name="dateOfBirth"
                required
                className="mb-0"
                // initialValue={formikProps.values.dateOfBirth}
              >
                <StyledSimpleDatePicker
                  disabledDate={disabledDate}
                  style={{ width: '100%' }}
                  name="dateOfBirth"
                  onChange={(_value, dateString) =>
                    formikProps.setFieldValue(
                      'dateOfBirth',
                      moment(dateString).format('yyyy-MM-DD')
                    )
                  }
                  placeholder="Date of birth"
                  format="MM/DD/YYYY"
                />
              </StyledFormItem>
            </div>
            <div className="col-md-4">
              <p className="text font-m mt-4">
                {formikProps.values.dateOfBirth
                  ? `${getAgeFromDate(formikProps.values.dateOfBirth)} y/o`
                  : null}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
