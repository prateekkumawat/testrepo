import React, { useState, useEffect, useMemo } from 'react';
import { Button, notification, Row, Table } from 'antd';
import { useParams } from 'react-router-dom';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from 'moment';
import { mockViewDta } from './ViewVitals.mock';
import { Vitals } from '../VitalsType';
import { ViewVitalsWrapper } from './ViewVitals.styled';
import { ShadowedCard } from '../../../Component/Card/Card';
import { PatientService } from '../../../Service/Patient';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const tabs = [
  'Height',
  'Weight',
  'BMI',
  'Blood Pres.',
  'Pulse Rate',
  'O2 Sat.',
  'Temperature',
  'Resp. Rate',
];

const tabsKey = {
  Height: 'height',
  Weight: 'weight',
  BMI: 'bmi',
  'Blood Pres.': 'bloodPressure',
  'Pulse Rate': 'pulseRate',
  'O2 Sat.': 'o2Saturation',
  Temperature: 'temperature',
  'Resp. Rate': 'respirationRate',
};

export const ViewVitals: React.FC = () => {
  const maxTabsToShow = 6;
  const [activeTab, setActiveTab] = useState('Height');
  const [startIndex, setStartIndex] = useState(0);
  const [vitalsData, setVitalsData] = useState<any>({});
  const { patientId } = useParams();
  const patientService = PatientService();

  const handleNext = () => {
    const currentIndex = tabs.indexOf(activeTab);
    if (currentIndex + 1 < tabs.length) {
      if (currentIndex + 1 >= startIndex + maxTabsToShow) {
        setStartIndex(startIndex + 1);
      }
      setActiveTab(tabs[currentIndex + 1]);
    }
  };

  const handlePrevious = () => {
    const currentIndex = tabs.indexOf(activeTab);
    if (currentIndex > 0) {
      if (currentIndex - 1 < startIndex) {
        setStartIndex(startIndex - 1);
      }
      setActiveTab(tabs[currentIndex - 1]);
    }
  };

  const handleChangeTab = (tabName: string) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    const viewVital = async () => {
      try {
        const data = await patientService.getVitalsForPatient(patientId!);
        setVitalsData(data);
      } catch (err: any) {
        notification.error({
          message: err?.response || 'Error occured while view vitals',
        });
      }
    };
    viewVital();
  }, []);

  const commonDataset = {
    fontSize: '2em',
    width: '2em',
    pointRadius: 10,
    pointHoverRadius: 15,
  };

  const commondataFormat = (selectedTab: string) => {
    return [
      {
        ...commonDataset,
        label: selectedTab,
        data: Object.keys(vitalsData)?.map((elem) => {
          const elemKey = vitalsData?.[elem];
          return vitalsData?.[elem]?.[
            tabsKey[selectedTab as keyof typeof tabsKey] as keyof typeof elemKey
          ];
        }),
        backgroundColor: '#972587',
      },
    ];
  };

  const getDataSet = (selectedTab: string) => {
    if (
      ['Height', 'Weight', 'BMI', 'Pulse Rate', 'Resp. Rate'].includes(
        selectedTab
      )
    ) {
      return commondataFormat(selectedTab);
    }
    if (selectedTab === 'Blood Pres.') {
      return [
        {
          ...commonDataset,
          label: 'Systolic',
          data: Object.keys(vitalsData)?.map((elem) => {
            return vitalsData?.[elem]?.[tabsKey[selectedTab]].split('/')[0];
          }),
          backgroundColor: '#972587',
        },
        {
          ...commonDataset,
          label: 'Distolic',
          data: Object.keys(vitalsData)?.map((elem) => {
            return vitalsData?.[elem]?.[tabsKey[selectedTab]].split('/')[1];
          }),
          backgroundColor: '#273C91',
        },
      ];
    }
    if (selectedTab === 'O2 Sat.') {
      return [
        {
          ...commonDataset,
          label: selectedTab,
          data: Object.keys(vitalsData)?.map((elem) => {
            return vitalsData?.[elem]?.[tabsKey[selectedTab]].split('%')[0];
          }),
          backgroundColor: '#972587',
        },
      ];
    }
    if (selectedTab === 'Temperature') {
      return [
        {
          ...commonDataset,
          label: selectedTab,
          data: Object.keys(vitalsData)?.map((elem) => {
            return vitalsData?.[elem]?.[tabsKey[selectedTab]].split('°C')[0];
          }),
          backgroundColor: '#972587',
        },
      ];
    }
    return [];
  };

  const data = {
    labels: Object.keys(vitalsData).map((e) => moment(e).format('DD MMMM')),
    datasets: getDataSet(activeTab),
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    elements: {
      line: {
        tension: 0.4,
      },
    },
  };

  const columns = () => {
    if (activeTab === 'BMI') {
      return [
        {
          title: 'BMI',
          dataIndex: 'bmi',
        },
        {
          title: 'height',
          dataIndex: 'height',
        },
        {
          title: 'weight',
          dataIndex: 'weight',
        },
        {
          title: 'date',
          dataIndex: 'date',
        },
      ];
    }
    if (activeTab === 'Height') {
      return [
        {
          title: 'height',
          dataIndex: 'height',
        },
        {
          title: 'date',
          dataIndex: 'date',
        },
      ];
    }
    if (activeTab === 'Weight') {
      return [
        {
          title: 'weight',
          dataIndex: 'weight',
        },
        {
          title: 'date',
          dataIndex: 'date',
        },
      ];
    }
    if (activeTab === 'Blood Pres.') {
      return [
        {
          title: 'bloodPressure',
          dataIndex: 'bloodPressure',
        },
        {
          title: 'date',
          dataIndex: 'date',
        },
      ];
    }
    if (activeTab === 'Pulse Rate') {
      return [
        {
          title: 'pulseRate',
          dataIndex: 'pulseRate',
        },
        {
          title: 'date',
          dataIndex: 'date',
        },
      ];
    }
    if (activeTab === 'O2 Sat.') {
      return [
        {
          title: 'o2Saturation',
          dataIndex: 'o2Saturation',
        },
        {
          title: 'date',
          dataIndex: 'date',
        },
      ];
    }
    if (activeTab === 'Temperature') {
      return [
        {
          title: 'temperature',
          dataIndex: 'temperature',
        },
        {
          title: 'date',
          dataIndex: 'date',
        },
      ];
    }
    if (activeTab === 'Resp. Rate') {
      return [
        {
          title: 'respirationRate',
          dataIndex: 'respirationRate',
        },
        {
          title: 'date',
          dataIndex: 'date',
        },
      ];
    }

    return [];
  };

  return (
    <ViewVitalsWrapper>
      <div className="navbar">
        <Button
          className="circle-button-prev-button"
          onClick={() => handlePrevious()}
          disabled={tabs.indexOf(activeTab) === 0}
        >
          {' '}
          {'<'}{' '}
        </Button>
        <div className="tab-scroll">
          {tabs.map((tabName, index) => (
            <div
              key={index}
              className={`view-vitals-link ${
                activeTab === tabName ? 'active' : ''
              }`}
              onClick={() => handleChangeTab(tabName)}
            >
              {tabName}
            </div>
          ))}
        </div>

        <Button
          className="circle-button-next-button"
          onClick={() => handleNext()}
          disabled={tabs.indexOf(activeTab) === tabs.length - 1}
        >
          {' '}
          {'>'}{' '}
        </Button>
      </div>
      <ShadowedCard className="vitals-graph">
        <Line options={options} data={data} />{' '}
      </ShadowedCard>
      <div className="vitals-data">
        <h1 style={{ textAlign: 'center' }}>{activeTab}</h1>
        <Table
          columns={columns()}
          dataSource={Object.keys(vitalsData)?.map((date) => ({
            date,
            ...vitalsData?.[date],
          }))}
          size="small"
          pagination={false}
          showHeader={false}
          bordered={false}
          style={{ padding: '20px 0' }}
        />
      </div>
    </ViewVitalsWrapper>
  );
};
