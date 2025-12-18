
import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

export const ProofIdentity: React.FC = () => {
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
                aspectRatio: '0.7',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                position: 'relative'
            }}
        >
            <div style={{
                position: 'absolute',
                top: '-50px',
                left: '-50px',
                width: '150px',
                height: '150px',
                background: 'rgba(0, 150, 255, 0.1)', // Blue glow
                filter: 'blur(60px)',
                borderRadius: '50%'
            }} />

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem', zIndex: 1 }}>
                <div style={{
                    width: '48px',
                    height: '48px',
                    background: '#333',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <User color="#fff" size={24} />
                </div>
                <div>
                    <div style={{ color: '#fff', fontWeight: 600, fontSize: '16px' }}>Powm ID</div>
                    <div style={{ color: '#666', fontSize: '12px' }}>Verified Credential</div>
                </div>
            </div>

            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                style={{
                    height: '2px',
                    width: '100%',
                    background: 'linear-gradient(90deg, transparent, #444, transparent)',
                    marginBottom: '1rem'
                }}
            />

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px', zIndex: 1 }}>

                <div style={{
                    background: 'rgba(255,255,255,0.05)',
                    padding: '16px',
                    borderRadius: '12px',
                    border: '1px solid rgba(255,255,255,0.05)'
                }}>
                    <div style={{ fontSize: '10px', color: '#888', textTransform: 'uppercase', marginBottom: '4px' }}>Status</div>
                    <div style={{ color: '#4D9FFF', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 12.17l7.59-7.59L19 6l-9 9z" /></svg>
                        Identity Verified
                    </div>
                </div>

                <div style={{
                    background: 'rgba(255,255,255,0.05)',
                    padding: '16px',
                    borderRadius: '12px',
                    border: '1px solid rgba(255,255,255,0.05)'
                }}>
                    <div style={{ fontSize: '10px', color: '#888', textTransform: 'uppercase', marginBottom: '4px' }}>First Name</div>
                    <div style={{ color: '#fff', fontWeight: 500 }}>Sarah</div>
                </div>

                {/* Obscured Fields */}
                <div style={{ opacity: 0.4 }}>
                    <div style={{ fontSize: '10px', color: '#888', textTransform: 'uppercase', marginBottom: '4px' }}>Last Name</div>
                    <div style={{ background: '#333', height: '14px', width: '80%', borderRadius: '4px' }}></div>
                </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '1rem', zIndex: 1 }}>
                <span style={{ fontSize: '10px', color: '#444', border: '1px solid #333', padding: '4px 8px', borderRadius: '4px' }}>
                    P2P CERTIFIED
                </span>
            </div>

        </motion.div>
    );
};
