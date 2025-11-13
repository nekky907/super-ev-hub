import React from 'react';
import '../styles/InfoSection.css';
import bgImage from '../assets/bwTPgate.png';
import landmarkImage from '../assets/landmarkCM.png';

const InfoSection = () => {
  const handleReserve = () => {
    alert('กำลังนำคุณไปยังหน้าจองการชาร์จ...');
    // In production: window.location.href = '/reservation';
  };

  const handleOpenMap = () => {
    window.open('https://maps.google.com/?q=ศูนย์วัฒนธรรมเชียงใหม่', '_blank');
  };

  return (
    <section className="info-section">
      {/* Background Image */}
      <div className="info-background">
        <img src={bgImage} alt="Tha Pae Gate" />
        <div className="info-overlay"></div>
      </div>
      <div className="landmark-image">
        <img src={landmarkImage} alt="Station Landmark" />
      </div>
      <div className="info-content animate-on-scroll">
        <h2 className="location-title">
          <span className="title-oldcm">ศูนย์วัฒนธรรม</span>
          <span className="title-cm">เชียงใหม่</span>
        </h2>
        <p className="info-text">
          เปิดตัว "Super Ev Hub" แห่งแรกของเชียงใหม่<br/>
          สถานีชาร์จรถไฟฟ้าความเร็วสูงสุดจาก<br/>
          Huawei Ultra-Fast Charger 720 kW<br/>
          ที่จะทำให้้การชาร์จไวขึ้น แรงขึ้น สะดวกขึ้น<br/>
          ทำให้การเดินทางของคุณไม่สะดุดอีกต่อไป
        </p>
        <button className="reserve-btn" onClick={handleReserve}>
          จองการชาร์จเลย
        </button>
        <button className="directions-btn" onClick={handleOpenMap}>
          ดูเส้นทาง
        </button>
      </div>
    </section>
  );
};

export default InfoSection;
