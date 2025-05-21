import React, { useState } from 'react';
import AnimatedLoginButton from './AnimatedLoginButton';

export default function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'system', text: 'Hello! I am your AI assistant. How can I help you today?' }
  ]);
  const [showProducts, setShowProducts] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { role: 'user', text: input }]);
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { role: 'ai', text: `You said: "${input}" (AI response here)` }
      ]);
    }, 500);
    setInput('');
  };

  return (
    <div>
      <div style={{ position: 'absolute', top: '2rem', left: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <span style={{ fontWeight: 700, fontSize: '1.1rem', color: '#646cff', letterSpacing: '1px' }}>Brightly</span>
      </div>
      <div style={{ position: 'absolute', top: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <div style={{ position: 'relative' }}>
          <button style={{ padding: '0.25rem 0.75rem', fontSize: '0.85rem', background: '#fff', color: '#646cff', border: '1px solid #646cff', borderRadius: '4px', cursor: 'pointer', minWidth: '80px', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
            onClick={() => setShowProducts(p => !p)}>
            Products <span style={{ fontSize: '0.8em' }}>▼</span>
          </button>
          {showProducts && (
            <div style={{ position: 'absolute', top: '110%', left: 0, background: '#fff', border: '1px solid #eee', borderRadius: 4, boxShadow: '0 2px 8px #0001', minWidth: 120, zIndex: 10 }}>
              <div style={{ padding: '0.5rem 1rem', cursor: 'pointer', whiteSpace: 'nowrap' }}>Product 1</div>
              <div style={{ padding: '0.5rem 1rem', cursor: 'pointer', whiteSpace: 'nowrap' }}>Product 2</div>
            </div>
          )}
        </div>
        <button style={{ padding: '0.25rem 0.75rem', fontSize: '0.85rem', background: '#fff', color: '#646cff', border: '1px solid #646cff', borderRadius: '4px', cursor: 'pointer', minWidth: '80px' }}>
          Pricing
        </button>
        <button style={{ padding: '0.25rem 0.75rem', fontSize: '0.85rem', background: '#fff', color: '#646cff', border: '1px solid #646cff', borderRadius: '4px', cursor: 'pointer', minWidth: '80px' }}>
          Learn
        </button>
        <button style={{ padding: '0.25rem 0.75rem', fontSize: '0.85rem', background: '#fff', color: '#646cff', border: '1px solid #646cff', borderRadius: '4px', cursor: 'pointer', minWidth: '80px' }}>
          Contact Sales
        </button>
      </div>
      <div style={{ position: 'absolute', top: '2rem', right: '2rem', display: 'flex', gap: '0.5rem' }}>
        <button style={{ padding: '0.25rem 0.75rem', fontSize: '0.85rem', background: '#646cff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Sign Up
        </button>
        <AnimatedLoginButton text="Login" />
      </div>
      <div style={{ textAlign: 'center', color: '#22c55e', fontWeight: 600, fontSize: '1rem', marginTop: '5.2rem', letterSpacing: '0.5px' }}>
        5,000+ businesses trust Brightly
      </div>
      <h1 style={{ textAlign: 'center', marginTop: '1.2rem' }}>
        AI that builds a website for you.
      </h1>
      <p style={{ textAlign: 'center', fontSize: '1.15rem', color: '#444', margin: '1rem 0 2.5rem 0' }}>
        Get your business online in 30 seconds with the #1 AI website builder and marketing platform.
      </p>
      {/* AI Prompt Section - Revert to chat interface */}
      <div style={{ maxWidth: 480, margin: '2rem auto', background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px #0001', padding: 24 }}>
        <div style={{ minHeight: 120, marginBottom: 16 }}>
          {messages.map((msg, i) => {
            let label = 'System';
            if (msg.role === 'user') label = 'You';
            else if (msg.role === 'ai') label = 'AI';
            return (
              <div key={i} style={{ margin: '8px 0', color: msg.role === 'user' ? '#333' : '#646cff', textAlign: msg.role === 'user' ? 'right' : 'left' }}>
                <b>{label}:</b> {msg.text}
              </div>
            );
          })}
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <input
            style={{ flex: 1, padding: 8, fontSize: 16, borderRadius: 4, border: '1px solid #ccc' }}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' ? handleSend() : undefined}
            placeholder="Type your message..."
          />
          <button
            style={{ padding: '0 1.5rem', fontSize: 16, background: '#646cff', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer' }}
            onClick={handleSend}
          >
            Send
          </button>
        </div>
      </div>
      {/* Short AI Prompt Section with connecting line, using current React page style */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '2.5rem 0 2rem 0', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px #0001', border: '1px solid #eee', padding: '0.7rem 1.2rem', minWidth: 320, maxWidth: 420 }}>
          <input
            style={{ flex: 1, fontSize: '1rem', border: 'none', outline: 'none', background: 'transparent', color: '#444' }}
            placeholder="Describe your business in a sentence..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' ? handleSend() : undefined}
          />
          <button
            style={{ marginLeft: 10, padding: '0.5rem 1.2rem', fontSize: '0.95rem', background: '#646cff', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 600, cursor: 'pointer', boxShadow: '0 2px 8px #646cff22', transition: 'background 0.2s' }}
            onClick={handleSend}
          >
            Generate
          </button>
        </div>
        {/* Connecting line to features - full vertical and horizontal connection */}
        <div style={{ position: 'relative', width: '100%', height: 90, display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
          {/* Vertical line - increased length */}
          <div style={{ position: 'absolute', left: '50%', top: 0, transform: 'translateX(-50%)', width: 4, height: 70, background: '#646cff', borderRadius: 2 }}></div>
          {/* Horizontal line - increased length */}
          <div style={{ position: 'absolute', left: '15%', top: 70, width: '70%', height: 4, background: '#646cff', borderRadius: 2 }}></div>
        </div>
      </div>
      {/* Features Section - styled to match current React page */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', margin: '0 0 2.5rem 0', position: 'relative' }}>
        {/* Feature Card 1 */}
        <div style={{ background: 'linear-gradient(135deg, #f8fafc 60%, #e0e7ff 100%)', borderRadius: 16, boxShadow: '0 4px 24px #646cff22', padding: '2.2rem 2.5rem', minWidth: 320, minHeight: 260, textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', border: '1.5px solid #646cff22', transition: 'box-shadow 0.2s', cursor: 'pointer', position: 'relative' }}>
          <div style={{ color: '#646cff', fontWeight: 700, fontSize: '1.1rem', marginBottom: 8, letterSpacing: '0.5px' }}>Plan</div>
          <div style={{ fontWeight: 800, fontSize: '1.7rem', marginBottom: 14, color: '#222' }}>Sitemaps</div>
          <div style={{ color: '#444', fontSize: '1.08rem', marginBottom: 22, lineHeight: 1.5 }}>Quickly map out your website pages with an AI-generated sitemap</div>
          <button style={{ padding: '0.5rem 1.5rem', fontSize: '1.05rem', background: '#646cff', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 700, boxShadow: '0 2px 8px #646cff22', transition: 'background 0.2s' }}>Give it a try</button>
        </div>
        {/* Feature Card 2 */}
        <div style={{ background: 'linear-gradient(135deg, #f8fafc 60%, #e0e7ff 100%)', borderRadius: 16, boxShadow: '0 4px 24px #646cff22', padding: '2.2rem 2.5rem', minWidth: 320, minHeight: 260, textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', border: '1.5px solid #646cff22', transition: 'box-shadow 0.2s', cursor: 'pointer', position: 'relative' }}>
          <div style={{ color: '#646cff', fontWeight: 700, fontSize: '1.1rem', marginBottom: 8, letterSpacing: '0.5px' }}>Structure</div>
          <div style={{ fontWeight: 800, fontSize: '1.7rem', marginBottom: 14, color: '#222' }}>Wireframes</div>
          <div style={{ color: '#444', fontSize: '1.08rem', marginBottom: 22, lineHeight: 1.5 }}>Effortlessly structure your pages and copy with distraction-free wireframes</div>
          <button style={{ padding: '0.5rem 1.5rem', fontSize: '1.05rem', background: '#646cff', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 700, boxShadow: '0 2px 8px #646cff22', transition: 'background 0.2s' }}>Give it a try</button>
        </div>
        {/* Feature Card 3 */}
        <div style={{ background: 'linear-gradient(135deg, #f8fafc 60%, #e0e7ff 100%)', borderRadius: 16, boxShadow: '0 4px 24px #646cff22', padding: '2.2rem 2.5rem', minWidth: 320, minHeight: 260, textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', border: '1.5px solid #646cff22', transition: 'box-shadow 0.2s', cursor: 'pointer', position: 'relative' }}>
          <div style={{ color: '#646cff', fontWeight: 700, fontSize: '1.1rem', marginBottom: 8, letterSpacing: '0.5px' }}>Conceptualise</div>
          <div style={{ fontWeight: 800, fontSize: '1.7rem', marginBottom: 14, color: '#222' }}>Style Guide</div>
          <div style={{ color: '#444', fontSize: '1.08rem', marginBottom: 22, lineHeight: 1.5 }}>Instantly create design concepts and apply the winning style across pages</div>
          <button style={{ padding: '0.5rem 1.5rem', fontSize: '1.05rem', background: '#646cff', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 700, boxShadow: '0 2px 8px #646cff22', transition: 'background 0.2s' }}>Give it a try</button>
        </div>
      </div>
      {/* Used by leading companies and brands */}
      <div style={{ textAlign: 'center', color: '#888', fontWeight: 500, fontSize: '1rem', margin: '1.2rem 0 2.5rem 0', letterSpacing: '0.2px' }}>
        Used by leading companies and brands worldwide
      </div>
      {/* Fake logos row */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2.5rem', margin: '0 0 2.5rem 0', flexWrap: 'wrap' }}>
        <div style={{ width: 90, height: 38, background: '#f3f4f6', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#646cff', fontSize: '1.1rem', letterSpacing: '1px', boxShadow: '0 1px 4px #0001' }}>ACME</div>
        <div style={{ width: 90, height: 38, background: '#f3f4f6', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#22c55e', fontSize: '1.1rem', letterSpacing: '1px', boxShadow: '0 1px 4px #0001' }}>Globex</div>
        <div style={{ width: 90, height: 38, background: '#f3f4f6', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#ff6a3d', fontSize: '1.1rem', letterSpacing: '1px', boxShadow: '0 1px 4px #0001' }}>Umbrella</div>
        <div style={{ width: 90, height: 38, background: '#f3f4f6', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#a259ff', fontSize: '1.1rem', letterSpacing: '1px', boxShadow: '0 1px 4px #0001' }}>Wayne</div>
        <div style={{ width: 90, height: 38, background: '#f3f4f6', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#eab308', fontSize: '1.1rem', letterSpacing: '1px', boxShadow: '0 1px 4px #0001' }}>Stark</div>
      </div>
      {/* Big Brightly text like the Shipfaster image */}
      <div style={{
        width: '100%',
        textAlign: 'center',
        fontSize: '5.5rem',
        fontWeight: 900,
        letterSpacing: '2px',
        margin: '2.5rem 0 2.5rem 0',
        background: 'linear-gradient(90deg, #d1d5db 0 40%, #ff6a3d 55%, #a259ff 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        color: 'transparent',
        lineHeight: 1.1,
        userSelect: 'none',
        display: 'inline-block'
      }}>
        <span style={{ color: '#d1d5db', background: 'none', WebkitTextFillColor: 'inherit' }}>Bri</span>
        <span style={{ background: 'linear-gradient(90deg, #ff6a3d 0%, #a259ff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>ghtly</span>
      </div>
      {/* How it works section - big visual cards */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'stretch',
        gap: '2.5rem',
        margin: '3.5rem 0 3.5rem 0',
        flexWrap: 'wrap',
      }}>
        {/* Card 1: Sitemap */}
        <div style={{
          background: '#fff',
          borderRadius: 24,
          boxShadow: '0 6px 32px #646cff22',
          padding: '2.5rem 2.5rem 2.5rem 2.5rem',
          minWidth: 480,
          maxWidth: 540,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          <div style={{ color: '#888', fontWeight: 500, fontSize: '1.35rem', marginBottom: 8 }}>Prompt to</div>
          <div style={{ fontWeight: 900, fontSize: '2.8rem', color: '#222', marginBottom: 18, display: 'flex', alignItems: 'center', gap: 10 }}>
            Sitemap <span style={{ fontSize: '1.5rem' }}>✨</span>
          </div>
          <div style={{ color: '#222', fontSize: '1.18rem', lineHeight: 1.6, marginBottom: 0 }}>
            The best way to start off your new project. Use AI to map out all your key pages with just a few sentences about your company. Effortlessly create a complete sitemap in mere seconds, not hours.
          </div>
        </div>
        {/* Card 2: Visual placeholder for screenshot or UI */}
        <div style={{
          background: '#f8fafc',
          borderRadius: 24,
          boxShadow: '0 6px 32px #646cff11',
          minWidth: 540,
          maxWidth: 640,
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}>
          <div style={{
            width: '90%',
            height: 260,
            background: 'linear-gradient(90deg, #e0e7ff 0%, #fff 100%)',
            borderRadius: 18,
            boxShadow: '0 2px 12px #a259ff22',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#a259ff',
            fontWeight: 700,
            fontSize: '1.3rem',
            opacity: 0.7,
          }}>
            [Your UI Screenshot Here]
          </div>
        </div>
        {/* Card 3: Wireframes */}
        <div style={{
          background: '#fff',
          borderRadius: 24,
          boxShadow: '0 6px 32px #646cff22',
          padding: '2.5rem 2.5rem 2.5rem 2.5rem',
          minWidth: 480,
          maxWidth: 540,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          <div style={{ color: '#888', fontWeight: 500, fontSize: '1.35rem', marginBottom: 8 }}>Prompt to</div>
          <div style={{ fontWeight: 900, fontSize: '2.8rem', color: '#222', marginBottom: 18, display: 'flex', alignItems: 'center', gap: 10 }}>
            Wireframes <span style={{ fontSize: '1.5rem' }}>🗂️</span>
          </div>
          <div style={{ color: '#222', fontSize: '1.18rem', lineHeight: 1.6, marginBottom: 0 }}>
            Effortlessly structure your pages and copy with distraction-free wireframes. Visualize your site before you build.
          </div>
        </div>
        {/* Card 4: Visual placeholder for wireframes UI */}
        <div style={{
          background: '#f8fafc',
          borderRadius: 24,
          boxShadow: '0 6px 32px #646cff11',
          minWidth: 540,
          maxWidth: 640,
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}>
          <div style={{
            width: '90%',
            height: 260,
            background: 'linear-gradient(90deg, #e0e7ff 0%, #fff 100%)',
            borderRadius: 18,
            boxShadow: '0 2px 12px #a259ff22',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#a259ff',
            fontWeight: 700,
            fontSize: '1.3rem',
            opacity: 0.7,
          }}>
            [Wireframes Screenshot Here]
          </div>
        </div>
        {/* Card 5: Style Guide */}
        <div style={{
          background: '#fff',
          borderRadius: 24,
          boxShadow: '0 6px 32px #646cff22',
          padding: '2.5rem 2.5rem 2.5rem 2.5rem',
          minWidth: 480,
          maxWidth: 540,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          <div style={{ color: '#888', fontWeight: 500, fontSize: '1.35rem', marginBottom: 8 }}>Prompt to</div>
          <div style={{ fontWeight: 900, fontSize: '2.8rem', color: '#222', marginBottom: 18, display: 'flex', alignItems: 'center', gap: 10 }}>
            Style Guide <span style={{ fontSize: '1.5rem' }}>🎨</span>
          </div>
          <div style={{ color: '#222', fontSize: '1.18rem', lineHeight: 1.6, marginBottom: 0 }}>
            Instantly create design concepts and apply the winning style across pages. Consistency made easy.
          </div>
        </div>
        {/* Card 6: Visual placeholder for style guide UI */}
        <div style={{
          background: '#f8fafc',
          borderRadius: 24,
          boxShadow: '0 6px 32px #646cff11',
          minWidth: 540,
          maxWidth: 640,
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}>
          <div style={{
            width: '90%',
            height: 260,
            background: 'linear-gradient(90deg, #e0e7ff 0%, #fff 100%)',
            borderRadius: 18,
            boxShadow: '0 2px 12px #a259ff22',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#a259ff',
            fontWeight: 700,
            fontSize: '1.3rem',
            opacity: 0.7,
          }}>
            [Style Guide Screenshot Here]
          </div>
        </div>
      </div>
      {/* Multi-Slideshow Section - All Animated */}
      <div style={{ background: '#fafafa', padding: '60px 20px', overflow: 'hidden' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: 50, color: '#333' }}>
          Projetos incríveis criados com nossa plataforma
        </h2>
        {/* Faixa 1: Direita */}
        <div style={{ overflow: 'hidden', marginBottom: 40 }}>
          <div className="slideshow-track right-track" style={{ display: 'flex', gap: 24, animation: 'slideRight 30s linear infinite' }}>
            <img src="https://via.placeholder.com/300x180?text=Site+1" alt="Site 1" style={imgStyle} />
            <img src="https://via.placeholder.com/300x180?text=Site+2" alt="Site 2" style={imgStyle} />
            <img src="https://via.placeholder.com/300x180?text=Site+3" alt="Site 3" style={imgStyle} />
            <img src="https://via.placeholder.com/300x180?text=Site+4" alt="Site 4" style={imgStyle} />
            <img src="https://via.placeholder.com/300x180?text=Site+5" alt="Site 5" style={imgStyle} />
          </div>
        </div>
        {/* Faixa 2: Esquerda */}
        <div style={{ overflow: 'hidden', marginBottom: 40 }}>
          <div className="slideshow-track left-track" style={{ display: 'flex', gap: 24, animation: 'slideLeft 30s linear infinite' }}>
            <img src="https://via.placeholder.com/300x180?text=Site+6" alt="Site 6" style={imgStyle} />
            <img src="https://via.placeholder.com/300x180?text=Site+7" alt="Site 7" style={imgStyle} />
            <img src="https://via.placeholder.com/300x180?text=Site+8" alt="Site 8" style={imgStyle} />
            <img src="https://via.placeholder.com/300x180?text=Site+9" alt="Site 9" style={imgStyle} />
            <img src="https://via.placeholder.com/300x180?text=Site+10" alt="Site 10" style={imgStyle} />
          </div>
        </div>
        {/* Faixa 3: Direita (Animated) */}
        <div style={{ overflow: 'hidden', marginBottom: 40 }}>
          <div className="slideshow-track right-track" style={{ display: 'flex', gap: 24, animation: 'slideRight 30s linear infinite' }}>
            <img src="https://via.placeholder.com/300x180?text=Site+11" alt="Site 11" style={imgStyle} />
            <img src="https://via.placeholder.com/300x180?text=Site+12" alt="Site 12" style={imgStyle} />
            <img src="https://via.placeholder.com/300x180?text=Site+13" alt="Site 13" style={imgStyle} />
            <img src="https://via.placeholder.com/300x180?text=Site+14" alt="Site 14" style={imgStyle} />
            <img src="https://via.placeholder.com/300x180?text=Site+15" alt="Site 15" style={imgStyle} />
          </div>
        </div>
        <style>{`
          .slideshow-track img {
            width: 300px;
            height: 180px;
            border-radius: 16px;
            object-fit: cover;
            flex-shrink: 0;
            box-shadow: 0 8px 16px rgba(0,0,0,0.1);
            transition: transform 0.3s;
          }
          .slideshow-track img:hover {
            transform: scale(1.05);
          }
          @keyframes slideRight {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          @keyframes slideLeft {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          @media (max-width: 768px) {
            .slideshow-track img {
              width: 220px;
              height: 130px;
            }
          }
        `}</style>
      </div>
      {/* Pricing Section - 2 visually appealing plans */}
      <div style={{ position: 'relative', background: '#fff', padding: '96px 24px', margin: '0', zIndex: 1 }}>
        <div style={{ position: 'absolute', inset: 0, top: -12, zIndex: 0, pointerEvents: 'none', overflow: 'hidden', filter: 'blur(48px)' }} aria-hidden="true">
          <div style={{ margin: '0 auto', width: 1155, maxWidth: '100%', height: 290, background: 'linear-gradient(45deg, #ff80b5, #9089fc)', opacity: 0.3, clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
        </div>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontWeight: 600, color: '#6366f1', fontSize: '1.1rem', margin: 0 }}>Pricing</h2>
          <p style={{ marginTop: 8, fontSize: '2.8rem', fontWeight: 600, color: '#222', marginBottom: 0 }}>Choose the right plan for you</p>
        </div>
        <p style={{ margin: '1.5rem auto 0 auto', maxWidth: 600, color: '#555', fontSize: '1.15rem', textAlign: 'center', fontWeight: 500 }}>Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', maxWidth: 900, margin: '4rem auto 0 auto', alignItems: 'center' }}>
          {/* Hobby Plan */}
          <div style={{ borderRadius: '1.5rem 1.5rem 0 1.5rem', background: 'rgba(255,255,255,0.6)', padding: '2.5rem', border: '1px solid #e5e7eb', boxShadow: '0 4px 24px #646cff11', margin: '0 1rem', minHeight: 420, position: 'relative', zIndex: 1 }}>
            <h3 id="tier-hobby" style={{ fontWeight: 600, color: '#6366f1', fontSize: '1.1rem', margin: 0 }}>Hobby</h3>
            <p style={{ marginTop: 16, display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 600, color: '#222' }}>$29</span>
              <span style={{ fontSize: '1rem', color: '#888' }}>/month</span>
            </p>
            <p style={{ marginTop: 24, color: '#555', fontSize: '1.05rem' }}>The perfect plan if you're just getting started with our product.</p>
            <ul style={{ marginTop: 32, marginBottom: 0, color: '#555', fontSize: '1rem', lineHeight: 2, paddingLeft: 0, listStyle: 'none' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ color: '#6366f1', fontWeight: 700 }}>✔</span> 25 products</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ color: '#6366f1', fontWeight: 700 }}>✔</span> Up to 10,000 subscribers</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ color: '#6366f1', fontWeight: 700 }}>✔</span> Advanced analytics</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ color: '#6366f1', fontWeight: 700 }}>✔</span> 24-hour support response time</li>
            </ul>
            <a href="#" aria-describedby="tier-hobby" style={{ marginTop: 32, display: 'block', borderRadius: 8, padding: '0.7rem 0', textAlign: 'center', fontWeight: 600, color: '#6366f1', border: '1px solid #c7d2fe', background: '#fff', textDecoration: 'none', transition: 'box-shadow 0.2s' }}>Get started today</a>
          </div>
          {/* Enterprise Plan */}
          <div style={{ position: 'relative', borderRadius: '1.5rem', background: '#111827', padding: '2.5rem', boxShadow: '0 8px 32px #11182722', border: '1px solid #222', minHeight: 420, zIndex: 1 }}>
            <h3 id="tier-enterprise" style={{ fontWeight: 600, color: '#a5b4fc', fontSize: '1.1rem', margin: 0 }}>Enterprise</h3>
            <p style={{ marginTop: 16, display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 600, color: '#fff' }}>$99</span>
              <span style={{ fontSize: '1rem', color: '#a5a5a5' }}>/month</span>
            </p>
            <p style={{ marginTop: 24, color: '#d1d5db', fontSize: '1.05rem' }}>Dedicated support and infrastructure for your company.</p>
            <ul style={{ marginTop: 32, marginBottom: 0, color: '#d1d5db', fontSize: '1rem', lineHeight: 2, paddingLeft: 0, listStyle: 'none' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ color: '#a5b4fc', fontWeight: 700 }}>✔</span> Unlimited products</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ color: '#a5b4fc', fontWeight: 700 }}>✔</span> Unlimited subscribers</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ color: '#a5b4fc', fontWeight: 700 }}>✔</span> Advanced analytics</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ color: '#a5b4fc', fontWeight: 700 }}>✔</span> Dedicated support representative</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ color: '#a5b4fc', fontWeight: 700 }}>✔</span> Marketing automations</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ color: '#a5b4fc', fontWeight: 700 }}>✔</span> Custom integrations</li>
            </ul>
            <a href="#" aria-describedby="tier-enterprise" style={{ marginTop: 32, display: 'block', borderRadius: 8, padding: '0.7rem 0', textAlign: 'center', fontWeight: 600, color: '#fff', background: '#6366f1', textDecoration: 'none', transition: 'box-shadow 0.2s' }}>Get started today</a>
          </div>
        </div>
      </div>
      {/* Testimonial Section - Dual Slideshow, Responsive & Interesting */}
      <div style={{ background: '#f5f5f5', padding: '70px 0 80px 0', position: 'relative' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.2rem', fontWeight: 800, color: '#222', marginBottom: '2.5rem', letterSpacing: '0.5px' }}>
          O que dizem nossos usuários 💬
        </h2>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 40 }}>
          {/* Grupo 1: Slideshow para direita */}
          <div style={{ overflow: 'hidden', width: '100%' }}>
            <div className="testimonial-track testimonial-track-right" style={{ display: 'flex', gap: 32, animation: 'testimonialSlideRight 32s linear infinite' }}>
              {/* Testimonial Cards */}
              {(() => {
                const testimonials = [
                  {
                    text: "Brightly is a game changer! I built my portfolio in minutes and the AI suggestions are spot on.",
                    user: "@juliaweb",
                    role: "Frontend Developer",
                    img: "https://via.placeholder.com/40"
                  },
                  {
                    text: "The best tool for agencies. Our workflow is much faster and clients love the results.",
                    user: "@agenciacriativa",
                    role: "Agency Owner",
                    img: "https://via.placeholder.com/40"
                  },
                  {
                    text: "I never thought building a website could be this easy. The templates are beautiful and flexible.",
                    user: "@marcosdesigner",
                    role: "UI Designer",
                    img: "https://via.placeholder.com/40"
                  },
                  {
                    text: "Support is amazing and the platform keeps getting better. Highly recommended!",
                    user: "@alineux",
                    role: "Freelancer",
                    img: "https://via.placeholder.com/40"
                  }
                ];
                return testimonials.map((t, i) => (
                  <div key={i} style={{ minWidth: 340, maxWidth: 380, background: '#fff', borderRadius: 18, boxShadow: '0 4px 24px #646cff22', padding: 28, display: 'flex', flexDirection: 'column', gap: 18, height: 200, justifyContent: 'space-between' }}>
                    <div style={{ color: '#444', fontSize: '1.08rem', lineHeight: 1.6, fontWeight: 500 }}>&ldquo;{t.text}&rdquo;</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <img src={t.img} alt={t.user} style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover', border: '2px solid #646cff22' }} />
                      <div>
                        <div style={{ fontWeight: 700, color: '#646cff', fontSize: '1.05rem' }}>{t.user}</div>
                        <div style={{ color: '#888', fontSize: '0.98rem' }}>{t.role}</div>
                      </div>
                    </div>
                  </div>
                ));
              })()}
            </div>
          </div>
          {/* Grupo 2: Slideshow para esquerda */}
          <div style={{ overflow: 'hidden', width: '100%' }}>
            <div className="testimonial-track testimonial-track-left" style={{ display: 'flex', gap: 32, animation: 'testimonialSlideLeft 32s linear infinite' }}>
              {/* Testimonial Cards */}
              {(() => {
                const testimonials = [
                  {
                    text: "Epic and Amazing... The Brightly products that were already amazing, gain another great addition with the site builder. This is a real time saver for projects and clients.",
                    user: "@rrabrot",
                    role: "Designer & Webflow developer",
                    img: "https://via.placeholder.com/40"
                  },
                  {
                    text: "This is insane. The amount of time and effort that goes into what the AI just generated in seconds 🤯 Brightly is revitalising the fun in web design.",
                    user: "@cipux_",
                    role: "Designer",
                    img: "https://via.placeholder.com/40"
                  },
                  {
                    text: "Been sitting here with my jaw on the floor – periodically saying 'oh my god, no way' after checking out Brightly’s new site builder. This is nuts my friends.",
                    user: "@brryant",
                    role: "Co-founder @webflow",
                    img: "https://via.placeholder.com/40"
                  },
                  {
                    text: "Brightly bringing the heat 🔥 Been using it on client projects to build sitemaps and it’s made my process much more efficient. I love it.",
                    user: "@KarimArdalan",
                    role: "Designer & Webflow developer",
                    img: "https://via.placeholder.com/40"
                  }
                ];
                return testimonials.map((t, i) => (
                  <div key={i} style={{ minWidth: 340, maxWidth: 380, background: '#fff', borderRadius: 18, boxShadow: '0 4px 24px #646cff22', padding: 28, display: 'flex', flexDirection: 'column', gap: 18, height: 200, justifyContent: 'space-between' }}>
                    <div style={{ color: '#444', fontSize: '1.08rem', lineHeight: 1.6, fontWeight: 500 }}>&ldquo;{t.text}&rdquo;</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <img src={t.img} alt={t.user} style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover', border: '2px solid #646cff22' }} />
                      <div>
                        <div style={{ fontWeight: 700, color: '#646cff', fontSize: '1.05rem' }}>{t.user}</div>
                        <div style={{ color: '#888', fontSize: '0.98rem' }}>{t.role}</div>
                      </div>
                    </div>
                  </div>
                ));
              })()}
            </div>
          </div>
        </div>
        <style>{`
          @keyframes testimonialSlideRight {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          @keyframes testimonialSlideLeft {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          @media (max-width: 900px) {
            .testimonial-track > div {
              min-width: 260px !important;
              max-width: 300px !important;
              padding: 18px !important;
              height: 180px !important;
            }
          }
        `}</style>
      </div>
      {/* Companies and Brands That Trust Us + Stats */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2.5rem',
        margin: '3rem 0 3.5rem 0',
      }}>
        <div style={{
          textAlign: 'center',
          color: '#fff',
          fontWeight: 900,
          fontSize: '2rem',
          letterSpacing: '0.2px',
          background: 'linear-gradient(90deg, #646cff 0%, #22c55e 100%)',
          borderRadius: '16px',
          boxShadow: '0 4px 24px #646cff33',
          padding: '1.2rem 2.5rem',
          maxWidth: 700,
          textShadow: '0 2px 8px #0002',
          border: '2.5px solid #a259ff',
        }}>
          Companies and brands that trust us
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2.5rem',
          flexWrap: 'wrap',
          background: 'linear-gradient(90deg, #f8fafc 60%, #e0e7ff 100%)',
          borderRadius: '14px',
          boxShadow: '0 2px 12px #646cff11',
          padding: '1.5rem 0',
          maxWidth: 900,
        }}>
          {/* Fake company logos */}
          <div style={{ width: 110, height: 44, background: '#fff', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#646cff', fontSize: '1.25rem', letterSpacing: '1px', boxShadow: '0 1px 6px #646cff22', border: '2px solid #646cff22' }}>ACME</div>
          <div style={{ width: 110, height: 44, background: '#fff', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#22c55e', fontSize: '1.25rem', letterSpacing: '1px', boxShadow: '0 1px 6px #22c55e22', border: '2px solid #22c55e22' }}>Globex</div>
          <div style={{ width: 110, height: 44, background: '#fff', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#ff6a3d', fontSize: '1.25rem', letterSpacing: '1px', boxShadow: '0 1px 6px #ff6a3d22', border: '2px solid #ff6a3d22' }}>Umbrella</div>
          <div style={{ width: 110, height: 44, background: '#fff', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#a259ff', fontSize: '1.25rem', letterSpacing: '1px', boxShadow: '0 1px 6px #a259ff22', border: '2px solid #a259ff22' }}>Wayne</div>
          <div style={{ width: 110, height: 44, background: '#fff', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#eab308', fontSize: '1.25rem', letterSpacing: '1px', boxShadow: '0 1px 6px #eab30822', border: '2px solid #eab30822' }}>Stark</div>
          <div style={{ width: 110, height: 44, background: '#fff', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#06b6d4', fontSize: '1.25rem', letterSpacing: '1px', boxShadow: '0 1px 6px #06b6d422', border: '2px solid #06b6d422' }}>Initech</div>
          <div style={{ width: 110, height: 44, background: '#fff', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#f43f5e', fontSize: '1.25rem', letterSpacing: '1px', boxShadow: '0 1px 6px #f43f5e22', border: '2px solid #f43f5e22' }}>Hooli</div>
          <div style={{ width: 110, height: 44, background: '#fff', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#10b981', fontSize: '1.25rem', letterSpacing: '1px', boxShadow: '0 1px 6px #10b98122', border: '2px solid #10b98122' }}>Vehement</div>
        </div>
        {/* Stats Row */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2.5rem',
          marginTop: '2.5rem',
          flexWrap: 'wrap',
        }}>
          <div style={{
            background: '#fff',
            borderRadius: 12,
            boxShadow: '0 2px 12px #646cff11',
            padding: '1.2rem 2.5rem',
            minWidth: 220,
            textAlign: 'center',
            fontWeight: 800,
            fontSize: '1.5rem',
            color: '#646cff',
            border: '2px solid #646cff22',
          }}>
            5,000+ websites created
          </div>
          <div style={{
            background: '#fff',
            borderRadius: 12,
            boxShadow: '0 2px 12px #22c55e11',
            padding: '1.2rem 2.5rem',
            minWidth: 220,
            textAlign: 'center',
            fontWeight: 800,
            fontSize: '1.5rem',
            color: '#22c55e',
            border: '2px solid #22c55e22',
          }}>
            99% satisfied customers
          </div>
          <div style={{
            background: '#fff',
            borderRadius: 12,
            boxShadow: '0 2px 12px #a259ff11',
            padding: '1.2rem 2.5rem',
            minWidth: 220,
            textAlign: 'center',
            fontWeight: 800,
            fontSize: '1.5rem',
            color: '#a259ff',
            border: '2px solid #a259ff22',
          }}>
            1 minute to create your site
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper style for images
const imgStyle = {
  width: 300,
  height: 180,
  borderRadius: 16,
  objectFit: 'cover',
  flexShrink: 0,
  boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s',
};
