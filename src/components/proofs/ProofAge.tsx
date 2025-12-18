
import React from 'react';
import { motion } from 'framer-motion';

export const ProofAge: React.FC = () => {
    return (
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
                background: 'linear-gradient(135deg, #6a3985ff 0%, #000 100%)',
                borderRadius: '24px',
                padding: '2rem',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                width: '100%',
                maxWidth: '320px',
                aspectRatio: '0.7', // Simulates phone screen or card
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '150px',
                height: '150px',
                background: 'rgba(20, 255, 75, 0.1)', // Green glow
                filter: 'blur(60px)',
                borderRadius: '50%'
            }} />

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                style={{
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '16px',
                    padding: '1.5rem',
                    width: '100%',
                    textAlign: 'center',
                    border: '1px solid rgba(255,255,255,0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                }}
            >
                <div style={{ fontSize: '14px', color: '#888', fontWeight: 500, letterSpacing: '0.05em' }}>
                    PROOF GENERATED
                </div>
                <div style={{
                    fontSize: '36px',
                    fontWeight: 700,
                    color: '#fff',
                    textShadow: '0 0 20px rgba(255,255,255,0.2)'
                }}>
                    Age ≥ 18
                </div>
                
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    background: 'rgba(57, 255, 20, 0.15)',
                    color: '#39FF14',
                    padding: '8px 16px',
                    borderRadius: '99px',
                    fontSize: '14px',
                    fontWeight: 600,
                    marginTop: '8px'
                }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    VERIFIED
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}
            >
                {['DOB', 'NAME', 'ADDRESS'].map((item) => (
                    <div key={item} style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '12px',
                        background: 'rgba(0,0,0,0.3)',
                        borderRadius: '8px',
                        fontSize: '12px',
                        color: '#666'
                    }}>
                        <span>{item}</span>
                        <span style={{ 
                            background: '#333', 
                            width: '60px', 
                            height: '10px', 
                            borderRadius: '4px',
                            opacity: 0.5
                        }} />
                    </div>
                ))}
            </motion.div>
            
            <div style={{
                position: 'absolute',
                bottom: '16px',
                fontSize: '10px',
                color: '#444',
                textTransform: 'uppercase',
                letterSpacing: '1px'
            }}>
                Zero-Knowledge Proof
            </div>
        </motion.div>
    );
};
