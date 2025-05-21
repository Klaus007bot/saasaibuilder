import React, { useRef } from 'react';
import { gsap } from 'gsap';
// import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'; // Uncomment and configure if you have MorphSVGPlugin

// gsap.registerPlugin(MorphSVGPlugin); // Uncomment if using MorphSVGPlugin

export default function AnimatedLoginButton({ text = 'Login' }) {
  const buttonRef = useRef();
  const morphRef = useRef();
  const keyRef = useRef();

  const handlePointerDown = () => {
    if (buttonRef.current.classList.contains('active')) return;
    gsap.to(buttonRef.current, {
      '--background-scale': 0.97,
      duration: 0.15
    });
  };

  const handleClick = e => {
    e.preventDefault();
    if (buttonRef.current.classList.contains('active')) return;
    buttonRef.current.classList.add('active');

    gsap.to(buttonRef.current, {
      keyframes: [
        { '--background-scale': 0.97, duration: 0.15 },
        { '--background-scale': 1, delay: 0.125, duration: 1.2, ease: 'elastic.out(1, .6)' }
      ]
    });

    gsap.to(buttonRef.current, {
      keyframes: [
        { '--key-scale': 1, '--key-y': '-32px', duration: 0.4, ease: 'power1.in' },
        { '--key-y': '-30px', duration: 0.3 },
        { '--key-y': '20px', '--key-scale': 0.9, duration: 0.25, ease: 'none' },
        { '--key-scale': 0, duration: 0.3, ease: 'none' }
      ]
    });

    gsap.to(buttonRef.current, {
      '--text-o': 1,
      '--text-x': '12px',
      delay: 1,
      duration: 0.3
    });

    gsap.delayedCall(2, () => {
      buttonRef.current.classList.remove('active');
      buttonRef.current.style.setProperty('--key-scale', 1);
      buttonRef.current.style.setProperty('--key-y', '0px');
      buttonRef.current.style.setProperty('--text-o', 0);
      buttonRef.current.style.setProperty('--text-x', '0px');
    });

    // MorphSVGPlugin morphs (uncomment if you have the plugin)
    // gsap.to(morphRef.current, {
    //   keyframes: [
    //     {
    //       morphSVG: 'M0 12C6 12 20 10 32 0C43.9024 9.99999 58 12 64 12V13H0V12Z',
    //       duration: 0.25,
    //       ease: 'power1.out'
    //     },
    //     {
    //       morphSVG: 'M0 12C6 12 17 12 32 12C47.9024 12 58 12 64 12V13H0V12Z',
    //       duration: 0.15,
    //       ease: 'none'
    //     }
    //   ]
    // });
    // gsap.to(keyRef.current, {
    //   keyframes: [
    //     {
    //       morphSVG: 'M13 2C9.13 2 6 5.13 6 9C6 10.31 6.39 11.53 7.05 12.57L2 17.59V21H5V19H7V21H10V17.59L11.57 16H13C16.87 16 20 12.87 20 9C20 5.13 16.87 2 13 2Z',
    //       duration: 0.3,
    //       ease: 'power1.out'
    //     }
    //   ]
    // });
  };

  return (
    <button
      ref={buttonRef}
      className="login-button"
      style={{
        '--background-scale': 1,
        '--key-scale': 1,
        '--key-y': '0px',
        '--text-o': 0,
        '--text-x': '0px',
        padding: 0,
        border: 'none',
        background: 'none',
        outline: 'none',
        cursor: 'pointer',
        position: 'relative',
        width: 180,
        height: 56,
        display: 'inline-block',
        fontFamily: 'inherit',
        fontSize: 18
      }}
      onPointerDown={handlePointerDown}
      onClick={handleClick}
    >
      <span style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
        transform: 'scale(var(--background-scale,1))',
        transition: 'transform 0.2s',
        background: 'linear-gradient(90deg, #646cff 60%, #a259ff 100%)',
        borderRadius: 16,
        boxShadow: '0 4px 24px #646cff22',
      }}>
        <svg width="64" height="13" viewBox="0 0 64 13" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          <path ref={morphRef} d="M0 12C6 12 17 12 32 12C47.9024 12 58 12 64 12V13H0V12Z" fill="#fff" />
        </svg>
      </span>
      <span style={{
        position: 'absolute',
        left: 24,
        top: '50%',
        transform: 'translateY(-50%) scale(var(--key-scale,1)) translateY(var(--key-y,0px))',
        zIndex: 2,
        transition: 'transform 0.2s',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <svg ref={keyRef} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C8.13 2 5 5.13 5 9C5 10.31 5.39 11.53 6.05 12.57L2 17.59V21H6V19H8V21H12V17.59L13.57 16H15C18.87 16 22 12.87 22 9C22 5.13 18.87 2 15 2Z" fill="#646cff" />
        </svg>
      </span>
      <span style={{
        position: 'absolute',
        left: 64,
        top: '50%',
        transform: 'translateY(-50%) translateX(var(--text-x,0px))',
        opacity: 'var(--text-o,0)',
        zIndex: 2,
        color: '#fff',
        fontWeight: 700,
        fontSize: 18,
        letterSpacing: 1,
        transition: 'opacity 0.2s, transform 0.2s',
      }}>{text}</span>
      <span style={{ visibility: 'hidden' }}>{text}</span>
    </button>
  );
}
