import React, { useState } from 'react';
import '../styles/Contact.css';
import { supabase } from '../supabaseClient';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    console.log('📤 Form submitted with data:', formData);

    try {
      console.log('🚀 Attempting to insert into Supabase...');
      
      // Insert data into Supabase
      const { data, error } = await supabase
        .from('contacts')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
            created_at: new Date().toISOString()
          }
        ]);

      console.log('📊 Supabase response - data:', data);
      console.log('📊 Supabase response - error:', error);

      if (error) {
        console.error('❌ Supabase error:', error);
        throw error;
      }

      // Success
      console.log('✅ Data inserted successfully!');
      setSubmitStatus({
        type: 'success',
        message: 'ขอบคุณที่ติดต่อเรา! เราจะติดต่อกลับโดยเร็วที่สุด'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });

    } catch (error) {
      console.error('❌ Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง หรือติดต่อเราโดยตรง'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenMap = () => {
    window.open('https://maps.google.com/?q=ศูนย์วัฒนธรรมเชียงใหม่', '_blank');
  };

  return (
    <section className="contact-section">
      <h2 className="section-title">ติดต่อเรา</h2>
      <div className="contact-container">
        <ContactForm 
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          submitStatus={submitStatus}
        />
        <ContactInfo handleOpenMap={handleOpenMap} />
      </div>
    </section>
  );
};

const ContactForm = ({ formData, handleChange, handleSubmit, isSubmitting, submitStatus }) => {
  return (
    <div className="contact-form animate-on-scroll">
      <h3 className="form-title">ส่งข้อความถึงเรา</h3>
      
      {submitStatus.message && (
        <div className={`submit-status ${submitStatus.type}`}>
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">ชื่อ-นามสกุล</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            disabled={isSubmitting}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">อีเมล</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            disabled={isSubmitting}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">เบอร์โทรศัพท์</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            disabled={isSubmitting}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">ข้อความ</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="พิมพ์ข้อความของคุณที่นี่..."
            disabled={isSubmitting}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          {isSubmitting ? 'กำลังส่ง...' : 'ส่งข้อความ'}
        </button>
      </form>
    </div>
  );
};

const ContactInfo = ({ handleOpenMap }) => {
  const contactDetails = [
    {
      icon: '📍',
      title: 'ที่อยู่',
      content: ['บริษัท อีวี พาวเวอร์ เอ็นเนอร์จี จำกัด (สำนักงานใหญ่)', '129 ม.5 ถ.เชียงใหม่-หางดง ต.แม่เหียะ อ.เมือง จ.เชียงใหม่ 50100']
    },
    {
      icon: '📞',
      title: 'โทรศัพท์',
      content: ['090-456-6646']
    },
    {
      icon: '📧',
      title: 'อีเมล',
      content: ['evpowerenergy@gmail.com']
    }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'F', url: 'https://www.facebook.com/EVPowerEnergy' },
    { name: 'Line', icon: 'LINE', url: 'https://lin.ee/RmVr8ob' },
    { name: 'Instagram', icon: 'IG', url: 'https://www.instagram.com/evpowerenergy/' },
    { name: 'YouTube', icon: 'YOUTUBE', url: 'https://www.youtube.com/@evpowerenergyTH' }
  ];

  return (
    <div className="contact-info animate-on-scroll">
      <h3>ข้อมูลติดต่อ</h3>
      
      {contactDetails.map((detail, index) => (
        <div key={index} className="info-item">
          <div className="info-icon">{detail.icon}</div>
          <div className="info-text">
            <strong>{detail.title}</strong>
            {detail.content.map((line, i) => (
              <span key={i}>{line}<br/></span>
            ))}
          </div>
        </div>
      ))}

      <div className="social-links">
        <h4>ติดตามเราบนโซเชียล</h4>
        <div className="social-icons">
          {socialLinks.map((social) => (
            <a 
              key={social.name}
              href={social.url}
              className="social-icon"
              aria-label={social.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Contact;
