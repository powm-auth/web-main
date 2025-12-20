import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QrCode, Timer, Check } from 'lucide-react';

import { useTranslation } from 'react-i18next';

export const VisualOnboarding: React.FC = () => {
    const { t } = useTranslation();
    const [step, setStep] = useState<'qr' | 'timer' | 'verified'>('qr');

    useEffect(() => {
        // Start the sequence when component mounts or loops
        // Actually recursive setTimeout is better for sequencing state changes.

        let mounted = true;
        const sequence = async () => {
            while (mounted) {
                setStep('qr');
                await new Promise(r => setTimeout(r, 1500));
                if (!mounted) break;
                setStep('timer');
                await new Promise(r => setTimeout(r, 1600)); // slightly longer than the 1.5s countdown text
                if (!mounted) break;
                setStep('verified');
                await new Promise(r => setTimeout(r, 2000));
                if (!mounted) break;
            }
        };
        sequence();
        return () => { mounted = false; };
    }, []);

    return (
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
                background: 'linear-gradient(135deg, #1a1a1a 0%, #000 100%)',
                borderRadius: '24px',
                padding: '24px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                width: '100%',
                maxWidth: '320px',
                aspectRatio: '0.8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                overflow: 'hidden'
            }}
        >
            {/* Glow Effect */}
            <div style={{
                position: 'absolute',
                top: '-50px',
                left: '-50px',
                width: '150px',
                height: '150px',
                background: step === 'verified' ? 'rgba(57, 255, 20, 0.1)' : 'rgba(255, 255, 255, 0.05)',
                filter: 'blur(60px)',
                borderRadius: '50%',
                transition: 'background 0.5s ease'
            }} />

            <div style={{ position: 'relative', zIndex: 1, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <AnimatePresence mode='wait'>

                    {step === 'qr' && (
                        <motion.div
                            key="qr"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            style={{ position: 'relative' }}
                        >
                            <div style={{
                                width: '140px',
                                height: '140px',
                                background: '#fff',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <QrCode size={100} color="#000" />
                            </div>

                            {/* Scan Line Animation */}
                            <motion.div
                                animate={{ top: ['0%', '100%', '0%'] }}
                                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                                style={{
                                    position: 'absolute',
                                    left: 0,
                                    width: '140px',
                                    height: '2px',
                                    background: '#FF4B1F',
                                    boxShadow: '0 0 10px #FF4B1F'
                                }}
                            />
                            <div style={{ marginTop: '16px', color: '#888', fontSize: '12px', textAlign: 'center' }}>
                                {t('for_business_page.visual_onboarding.scan')}
                            </div>
                        </motion.div>
                    )}

                    {step === 'timer' && (
                        <motion.div
                            key="timer"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                        >
                            <div style={{
                                width: '100px',
                                height: '100px',
                                borderRadius: '50%',
                                border: '4px solid #333',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative',
                                boxSizing: 'border-box'
                            }}>
                                <Timer size={40} color="#fff" />
                                <svg style={{ position: 'absolute', top: -4, left: -4, width: 100, height: 100, transform: 'rotate(-90deg)', pointerEvents: 'none' }}>
                                    <circle
                                        cx="50" cy="50" r="48"
                                        stroke="#4D9FFF"
                                        strokeWidth="4"
                                        fill="none"
                                        pathLength="1"
                                        strokeDasharray="1"
                                        strokeDashoffset="1"
                                    >
                                        <animate attributeName="stroke-dashoffset" from="1" to="0" dur="1.5s" fill="freeze" />
                                    </circle>
                                </svg>
                            </div>
                            <div style={{ marginTop: '20px', fontSize: '24px', fontWeight: 700, fontVariantNumeric: 'tabular-nums', color: '#fff' }}>
                                <CountUp duration={1500} /> s
                            </div>
                            <div style={{ marginTop: '8px', color: '#888', fontSize: '12px' }}>
                                {t('for_business_page.visual_onboarding.processing')}
                            </div>
                        </motion.div>
                    )}

                    {step === 'verified' && (
                        <motion.div
                            key="verified"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                        >
                            <div style={{
                                width: '80px',
                                height: '80px',
                                background: '#39FF14',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 0 30px rgba(57, 255, 20, 0.4)'
                            }}>
                                <Check size={40} color="#000" strokeWidth={3} />
                            </div>
                            <div style={{ marginTop: '24px', color: '#fff', fontSize: '20px', fontWeight: 600 }}>
                                {t('for_business_page.visual_onboarding.verified')}
                            </div>
                            <div style={{ marginTop: '8px', color: '#39FF14', fontSize: '12px' }}>
                                {t('for_business_page.visual_onboarding.valid')}
                            </div>
                        </motion.div>
                    )}

                </AnimatePresence>
            </div>
        </motion.div>
    );
};

const CountUp = ({ duration }: { duration: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = 3; // 3 seconds
        const stepTime = Math.abs(Math.floor(duration / (end * 10)));

        let timer = setInterval(() => {
            start += 0.1;
            setCount(Math.min(start, end));
            if (start >= end) clearInterval(timer);
        }, stepTime);

        return () => clearInterval(timer);
    }, [duration]);

    return <span>{count.toFixed(1)}</span>;
};
