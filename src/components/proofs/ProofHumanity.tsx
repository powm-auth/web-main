
import React from 'react';
import { motion } from 'framer-motion';
import { Fingerprint, Bot, ShieldCheck } from 'lucide-react';

import { useTranslation } from 'react-i18next';

export const ProofHumanity: React.FC = () => {
    const { t } = useTranslation();
    return (
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
                background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 100%)', // Deep purple theme
                borderRadius: '24px',
                padding: '2rem',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                width: '100%',
                maxWidth: '320px',
                aspectRatio: '0.7',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '200px',
                height: '200px',
                background: 'rgba(125, 60, 255, 0.15)', // Purple glow
                filter: 'blur(50px)',
                borderRadius: '50%'
            }} />

            {/* Icons floating */}
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ position: 'relative', height: '100px', width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '20px' }}
            >
                <Fingerprint size={80} color="#c471ed" style={{ filter: 'drop-shadow(0 0 10px rgba(196, 113, 237, 0.5))' }} />

                <motion.div
                    style={{ position: 'absolute', top: 0, right: 20, opacity: 0.4 }}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity }}
                >
                    <Bot size={40} color="#ff4b1f" />
                </motion.div>
                <motion.div
                    style={{ position: 'absolute', bottom: 0, left: 20, opacity: 0.5, color: '#39FF14' }}
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                >
                    <ShieldCheck size={36} />
                </motion.div>
            </motion.div>

            <div style={{ textAlign: 'center', zIndex: 1 }}>
                <div style={{ color: '#c471ed', fontWeight: 600, letterSpacing: '1px', fontSize: '12px', marginBottom: '8px' }}>{t('proofs.humanity.token')}</div>
                <div style={{ color: '#fff', fontSize: '24px', fontWeight: 700, marginBottom: '24px' }}>{t('proofs.humanity.human')}</div>
            </div>

            <div style={{
                background: 'rgba(0,0,0,0.3)',
                borderRadius: '12px',
                padding: '12px',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                border: '1px solid rgba(255,255,255,0.05)'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#aaa' }}>
                    <span>{t('proofs.humanity.score')}</span>
                    <span style={{ color: '#39FF14' }}>100%</span>
                </div>
                <div style={{ width: '100%', height: '4px', background: '#333', borderRadius: '2px' }}>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 1, delay: 0.5 }}
                        style={{ height: '100%', background: 'linear-gradient(90deg, #12c2e9, #c471ed, #f64f59)', borderRadius: '2px' }}
                    />
                </div>
            </div>

            <div style={{
                fontFamily: 'monospace',
                fontSize: '10px',
                color: '#666',
                marginTop: '20px',
                background: '#000',
                padding: '8px',
                borderRadius: '4px',
                width: '100%',
                textAlign: 'center'
            }}>
                0x71C...39A &bull; {t('proofs.humanity.non_transferable')}
            </div>

        </motion.div>
    );
};
