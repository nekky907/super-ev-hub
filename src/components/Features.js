import React from 'react';
import '../styles/Features.css';

import fastChargeImg from '../assets/closeupelectriccarfrance.png';
import easyPayImg from '../assets/Designer.png';
import huaweiTechImg from '../assets/huaweiLogo.png';

const Features = () => {
  const features = [
    {
      id: 1,
      title: 'FAST CHARGE',
      backgroundImage: fastChargeImg,
      description: [
        'ชาร์จเร็วถึง 350 กิโลวัตต์ด้วย',
        'Ultra Fast Charging',
        '(720 kW)',
        'จาก HUAWEI',
        'ชาร์จได้เร็วภายใน 10 นาที'
      ]
    },
    {
      id: 2,
      title: 'EASY PAY',
      backgroundImage: easyPayImg,
      description: [
        'สะดวกรวดเร็ว',
        'สแกนจ่ายผ่าน',
        'ด้วย QR CODE',
        'จ่ายผ่านบัตรเครดิต',
        'และแบงค์ทุกธนาคาร'
      ]
    },
    {
      id: 3,
      title: 'HUAWEI TECHNOLOGY',
      backgroundImage: huaweiTechImg,
      description: [
        'ใช้เทคโนโลยีขั้นสูง',
        'จาก HUAWEI',
        'คุณภาพระดับสากล',
        'และปลอดภัย',
        ''
      ]
    }
  ];

  return (
    <section className="features">
      <div className="features-container">
        {features.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
    </section>
  );
};

const FeatureCard = ({ feature }) => {
  return (
    <div 
      className="feature-card animate-on-scroll"
      style={{
        backgroundImage: `url(${feature.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="feature-card-overlay"></div>
      <div className="feature-card-content">
        <div className="feature-icon">{feature.icon}</div>
        <h3>{feature.title}</h3>
        <div className="feature-description">
          {feature.description.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;