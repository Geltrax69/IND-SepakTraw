import React, { useState } from 'react';
import {
  Email as MailIcon,
  Phone as PhoneIcon,
  Room as LocationIcon,
  Gavel as ShieldIcon,
  Search as SearchIcon,
  Send as SendIcon,
  CheckCircle as CheckIcon,
  ContactMail as DirectoryIcon,
  Close as CloseIcon
} from '@mui/icons-material';
import { useContent } from '../../content/ContentContext';

export const ContactUsPage = () => {
  const { content } = useContent();

  const [searchState, setSearchState] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'MYAS Compliance',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  // Full database of State & UT SepakTakraw Associations
  const STATE_ASSOCIATIONS = [
    { state: 'Manipur', secretary: 'Sh. L. Bishwajit Singh', designation: 'Hony. General Secretary', email: 'manipur@sepaktrawindia.com', phone: '+91 98620 12345', address: 'Khuman Lampak Sports Complex, Imphal' },
    { state: 'Nagaland', secretary: 'Sh. Ruokuo Kense', designation: 'Hony. General Secretary', email: 'nagaland@sepaktrawindia.com', phone: '+91 94360 23456', address: 'State Sports Complex, Dimapur' },
    { state: 'Delhi', secretary: 'Sh. Rajesh Kumar', designation: 'Hony. General Secretary', email: 'delhi@sepaktrawindia.com', phone: '+91 98110 34567', address: 'IG Stadium Complex, ITO, New Delhi' },
    { state: 'Mizoram', secretary: 'Sh. Lalrinsanga', designation: 'Hony. General Secretary', email: 'mizoram@sepaktrawindia.com', phone: '+91 94361 45678', address: 'Hawla Indoor Stadium, Aizawl' },
    { state: 'Kerala', secretary: 'Sh. Suresh Varghese', designation: 'Hony. General Secretary', email: 'kerala@sepaktrawindia.com', phone: '+91 94470 56789', address: 'Jimmy George Indoor Stadium, Thiruvananthapuram' },
    { state: 'Maharashtra', secretary: 'Sh. Sachin Tendulkar Patil', designation: 'Hony. General Secretary', email: 'maharashtra@sepaktrawindia.com', phone: '+91 98220 67890', address: 'Balewadi Sports Complex, Pune' },
    { state: 'Tamil Nadu', secretary: 'Sh. K. Ramanathan', designation: 'Hony. General Secretary', email: 'tamilnadu@sepaktrawindia.com', phone: '+91 98400 78901', address: 'Nehru Stadium, Park Town, Chennai' },
    { state: 'Uttar Pradesh', secretary: 'Sh. Amit Verma', designation: 'Hony. General Secretary', email: 'up@sepaktrawindia.com', phone: '+91 94150 89012', address: 'KD Singh Babu Stadium, Lucknow' },
    { state: 'West Bengal', secretary: 'Sh. Sourav Banerjee', designation: 'Hony. General Secretary', email: 'westbengal@sepaktrawindia.com', phone: '+91 98300 90123', address: 'Netaji Indoor Stadium, Kolkata' },
    { state: 'Assam', secretary: 'Sh. Pranab Baruah', designation: 'Hony. General Secretary', email: 'assam@sepaktrawindia.com', phone: '+91 94350 01234', address: 'Nehru Stadium, Ulubari, Guwahati' },
    { state: 'Punjab', secretary: 'Sh. Harpreet Singh', designation: 'Hony. General Secretary', email: 'punjab@sepaktrawindia.com', phone: '+91 98140 12345', address: 'Guru Nanak Stadium, Ludhiana' },
    { state: 'Karnataka', secretary: 'Sh. V. S. Murthy', designation: 'Hony. General Secretary', email: 'karnataka@sepaktrawindia.com', phone: '+91 98450 23456', address: 'Kanteerava Indoor Stadium, Bengaluru' },
  ];

  const filteredStates = STATE_ASSOCIATIONS.filter(
    (item) =>
      item.state.toLowerCase().includes(searchState.toLowerCase()) ||
      item.secretary.toLowerCase().includes(searchState.toLowerCase()) ||
      item.address.toLowerCase().includes(searchState.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ backgroundColor: '#0b0c10', color: '#f0f2f5', minHeight: '100vh', paddingBottom: '80px' }}>
      {/* Header Banner */}
      <section className="page-header" style={{ backgroundColor: '#12141c', borderBottom: '1px solid #222634', padding: '60px 24px 48px' }}>
        <div className="max-width-container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '30px', backgroundColor: 'rgba(255, 199, 44, 0.12)', border: '1px solid rgba(255, 199, 44, 0.3)', color: '#ffc72c', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
            <DirectoryIcon style={{ fontSize: 16 }} />
            <span>National Federation Contact &amp; State Directory</span>
          </div>

          <h1 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em', margin: 0, color: '#ffffff', fontFamily: 'var(--font-nike-futura-nd, sans-serif)' }}>
            Contact <span style={{ color: '#ffc72c' }}>STFI Federation</span>
          </h1>

          <p style={{ color: '#a0a5b5', fontSize: 'clamp(15px, 2vw, 18px)', marginTop: '12px', maxWidth: '820px', lineHeight: 1.6 }}>
            Reach out to the SepakTakraw Federation of India secretariat, Right to Information (RTI) Cell, Selection Committee, or your respective State Association.
          </p>

          {/* Quick Contact Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginTop: '36px' }}>
            <div style={{ backgroundColor: '#181b26', padding: '24px', borderRadius: '14px', border: '1px solid #292d3e' }}>
              <MailIcon style={{ fontSize: 26, color: '#ffc72c', marginBottom: '10px' }} />
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#ffc72c', textTransform: 'uppercase' }}>Official Email</div>
              <div style={{ fontSize: '15px', fontWeight: 800, color: '#ffffff', marginTop: '4px' }}>{content.contact.email}</div>
              <div style={{ fontSize: '12px', color: '#888e9e', marginTop: '4px' }}>General inquiries, media, disclosures</div>
            </div>

            <div style={{ backgroundColor: '#181b26', padding: '24px', borderRadius: '14px', border: '1px solid #292d3e' }}>
              <ShieldIcon style={{ fontSize: 26, color: '#00a651', marginBottom: '10px' }} />
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#00a651', textTransform: 'uppercase' }}>RTI Public Officer</div>
              <div style={{ fontSize: '15px', fontWeight: 800, color: '#ffffff', marginTop: '4px' }}>{content.contact.rtiEmail}</div>
              <div style={{ fontSize: '12px', color: '#888e9e', marginTop: '4px' }}>{content.contact.rtiOfficer}</div>
            </div>

            <div style={{ backgroundColor: '#181b26', padding: '24px', borderRadius: '14px', border: '1px solid #292d3e' }}>
              <LocationIcon style={{ fontSize: 26, color: '#3898ec', marginBottom: '10px' }} />
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#3898ec', textTransform: 'uppercase' }}>Federation Headquarters</div>
              <div style={{ fontSize: '15px', fontWeight: 800, color: '#ffffff', marginTop: '4px' }}>{content.contact.officeName}</div>
              <div style={{ fontSize: '12px', color: '#888e9e', marginTop: '4px' }}>New Delhi, India</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <section className="max-width-container" style={{ marginTop: '48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '40px' }}>
          {/* Left Column: Official Contact Form */}
          <div style={{ backgroundColor: '#12141c', border: '1px solid #222634', borderRadius: '20px', padding: '36px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#ffffff', margin: 0, textTransform: 'uppercase' }}>
              Send Inquiry <span style={{ color: '#ffc72c' }}>or Feedback</span>
            </h2>
            <p style={{ fontSize: '14px', color: '#a0a5b5', marginTop: '6px', marginBottom: '28px', lineHeight: 1.5 }}>
              Submit your inquiry directly to the STFI Secretariat. For urgent RTI or selection trial queries, please include your State Unit / Registration ID.
            </p>

            {submitted ? (
              <div style={{ backgroundColor: 'rgba(0, 166, 81, 0.15)', border: '1px solid #00a651', borderRadius: '14px', padding: '28px', textAlign: 'center', color: '#ffffff' }}>
                <CheckIcon style={{ fontSize: 48, color: '#00a651', marginBottom: '12px' }} />
                <h3 style={{ fontSize: '20px', fontWeight: 800, margin: 0 }}>Inquiry Submitted Successfully!</h3>
                <p style={{ fontSize: '14px', color: '#a0a5b5', marginTop: '8px', lineHeight: 1.5 }}>
                  Thank you for contacting the SepakTakraw Federation of India. Our Secretariat team will review your inquiry and get back to you within 24-48 business hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', category: 'MYAS Compliance', message: '' });
                  }}
                  className="btn-pill btn-yellow"
                  style={{ marginTop: '20px', fontWeight: 800 }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#c0c5d0', marginBottom: '8px' }}>Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your complete name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{ width: '100%', backgroundColor: '#0b0c10', border: '1px solid #292d3e', borderRadius: '10px', padding: '14px', color: '#fff', fontSize: '14px', outline: 'none' }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#c0c5d0', marginBottom: '8px' }}>Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{ width: '100%', backgroundColor: '#0b0c10', border: '1px solid #292d3e', borderRadius: '10px', padding: '14px', color: '#fff', fontSize: '14px', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#c0c5d0', marginBottom: '8px' }}>Phone / Mobile</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{ width: '100%', backgroundColor: '#0b0c10', border: '1px solid #292d3e', borderRadius: '10px', padding: '14px', color: '#fff', fontSize: '14px', outline: 'none' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#c0c5d0', marginBottom: '8px' }}>Inquiry Category *</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    style={{ width: '100%', backgroundColor: '#0b0c10', border: '1px solid #292d3e', borderRadius: '10px', padding: '14px', color: '#fff', fontSize: '14px', outline: 'none' }}
                  >
                    <option value="MYAS Compliance">MYAS Mandatory Compliance Disclosures</option>
                    <option value="Championship Events">National Championship &amp; Event Calendar</option>
                    <option value="Selection Trials">Asian Games &amp; International Selection Trials</option>
                    <option value="State Affiliation">State / Union Territory Affiliation</option>
                    <option value="RTI Request">Right to Information (RTI) Query</option>
                    <option value="Anti Doping">NADA Anti-Doping Inquiry</option>
                    <option value="General">General Inquiry / Media</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#c0c5d0', marginBottom: '8px' }}>Message Details *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Write your inquiry or question here in detail..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ width: '100%', backgroundColor: '#0b0c10', border: '1px solid #292d3e', borderRadius: '10px', padding: '14px', color: '#fff', fontSize: '14px', outline: 'none', resize: 'vertical' }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-pill btn-yellow"
                  style={{ fontWeight: 800, padding: '14px 28px', fontSize: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer' }}
                >
                  <SendIcon style={{ fontSize: 18 }} />
                  <span>Submit Inquiry to STFI</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: State Associations Directory */}
          <div>
            <div style={{ backgroundColor: '#12141c', border: '1px solid #222634', borderRadius: '20px', padding: '32px' }}>
              <h2 style={{ fontSize: '22px', fontWeight: 900, color: '#ffffff', margin: 0, textTransform: 'uppercase' }}>
                Affiliated <span style={{ color: '#ffc72c' }}>State Associations</span>
              </h2>
              <p style={{ fontSize: '13.5px', color: '#a0a5b5', marginTop: '4px', marginBottom: '20px' }}>
                Directory of 28 recognized State &amp; UT SepakTakraw Associations in India.
              </p>

              {/* State Search Bar */}
              <div style={{ position: 'relative', marginBottom: '20px' }}>
                <SearchIcon style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#ffc72c', fontSize: 20 }} />
                <input
                  type="text"
                  placeholder="Filter state association (e.g. Manipur, Delhi, Kerala)..."
                  value={searchState}
                  onChange={(e) => setSearchState(e.target.value)}
                  style={{ width: '100%', backgroundColor: '#0b0c10', border: '1px solid #292d3e', borderRadius: '10px', padding: '12px 14px 12px 44px', color: '#fff', fontSize: '13.5px', outline: 'none' }}
                />
              </div>

              {/* State List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxHeight: '520px', overflowY: 'auto', paddingRight: '4px' }}>
                {filteredStates.map((item, idx) => (
                  <div key={idx} style={{ backgroundColor: '#0b0c10', border: '1px solid #222634', borderRadius: '12px', padding: '18px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#ffc72c', margin: 0 }}>{item.state} SepakTakraw Association</h4>
                      <span style={{ fontSize: '11px', fontWeight: 700, color: '#00a651', backgroundColor: 'rgba(0,166,81,0.1)', padding: '2px 8px', borderRadius: '4px' }}>Affiliated Unit</span>
                    </div>

                    <div style={{ fontSize: '13.5px', color: '#ffffff', fontWeight: 700, marginTop: '8px' }}>
                      {item.secretary} <span style={{ color: '#888e9e', fontWeight: 500 }}>({item.designation})</span>
                    </div>

                    <div style={{ fontSize: '12.5px', color: '#a0a5b5', marginTop: '6px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}><MailIcon style={{ fontSize: 14 }} /> {item.email}</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}><PhoneIcon style={{ fontSize: 14 }} /> {item.phone}</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}><LocationIcon style={{ fontSize: 14 }} /> {item.address}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
