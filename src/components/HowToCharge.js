import React, { useState } from 'react';
import '../styles/HowToCharge.css';

const HowToCharge = () => {
  const [activeStep, setActiveStep] = useState(null);

  const steps = [
    {
      number: 1,
      icon: '📱',
      title: 'เปิดแอป',
      description: 'ดาวน์โหลดแอป SUPER EV HUB และลงทะเบียน'
    },
    {
      number: 2,
      icon: '📍',
      title: 'เลือกสถานี',
      description: 'ค้นหาและเลือก สถานีที่ใกล้ที่สุด หรือสะดวกที่สุด'
    },
    {
      number: 3,
      icon: '🔌',
      title: 'เสียบปลั๊ก',
      description: 'จอดรถในช่อง เสียบหัวชาร์จ เข้ากับรถ'
    },
    {
      number: 4,
      icon: '📲',
      title: 'สแกน QR',
      description: 'สแกน QR Code ที่ตู้ชาร์จหรือ เลือกจากแอป'
    },
    {
      number: 5,
      icon: '⚡',
      title: 'เริ่มชาร์จ',
      description: 'กดเริ่มชาร์จ ติดตามสถานะ ผ่านแอป'
    },
    {
      number: 6,
      icon: '💳',
      title: 'ชำระเงิน',
      description: 'ชำระเงินผ่านแอป รับใบเสร็จ ทางอีเมล'
    }
  ];

  return (
    <section className="how-to-charge">
      <h2 className="section-title">วิธีการชาร์จ</h2>
      <div className="steps-wrapper">
        <div className="steps-container">
          <div className="progress-line"></div>
          
          {steps.map((step) => (
            <StepCard
              key={step.number}
              step={step}
              isActive={activeStep === step.number}
              onClick={() => setActiveStep(step.number)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const StepCard = ({ step, isActive, onClick }) => {
  return (
    <div 
      className={`step-card animate-on-scroll ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <div className="step-number">{step.number}</div>
      <span className="step-icon">{step.icon}</span>
      <h3 className="step-title">{step.title}</h3>
      <p className="step-desc">
        {step.description.split(' ').map((word, index) => (
          <span key={index}>{word}<br/></span>
        ))}
      </p>
    </div>
  );
};

export default HowToCharge;
