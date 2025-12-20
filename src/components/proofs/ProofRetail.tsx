
import React from 'react';
import { motion } from 'framer-motion';
import { QrCode } from 'lucide-react';

import { useTranslation } from 'react-i18next';

export const ProofRetail: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div style={{ position: 'relative', width: '300px', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

            {/* Merchant Terminal */}
            <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 20, opacity: 1 }}
                transition={{ duration: 0.6 }}
                style={{
                    position: 'absolute',
                    right: 0,
                    top: '20%',
                    width: '180px',
                    height: '240px',
                    background: '#111',
                    borderRadius: '12px',
                    border: '4px solid #333',
                    zIndex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '-10px 10px 30px rgba(0,0,0,0.5)'
                }}
            >
                <div style={{ color: '#555', fontSize: '10px', marginBottom: '10px', letterSpacing: '1px' }}>{t('proofs.retail.pos')}</div>
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        background: ['#333', '#00b800', '#00b800', '#333']
                    }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        background: '#333',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '10px'
                    }}
                >
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </motion.div>
                <div style={{ color: '#fff', fontSize: '18px', fontWeight: 700 }}>{t('proofs.retail.approved')}</div>
            </motion.div>

            {/* User Phone */}
            <motion.div
                initial={{ x: -50, y: 50, opacity: 0, rotate: -10 }}
                whileInView={{ x: -20, y: 20, opacity: 1, rotate: -5 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                    position: 'absolute',
                    left: 0,
                    bottom: '10%',
                    width: '140px',
                    height: '260px',
                    background: '#000',
                    borderRadius: '20px',
                    border: '4px solid #444',
                    zIndex: 2,
                    boxShadow: '10px 10px 40px rgba(0,0,0,0.6)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '16px',
                    overflow: 'hidden'
                }}
            >
                <div style={{ width: '40px', height: '4px', background: '#222', borderRadius: '4px', marginBottom: '20px' }}></div>

                <div style={{
                    width: '90px',
                    height: '90px',
                    background: '#fff',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <QrCode size={60} color="#000" />
                </div>

                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <div style={{ fontSize: '10px', color: '#666' }}>{t('proofs.retail.scanning')}</div>
                    <motion.div
                        animate={{ height: ['0%', '35%', '0%'], opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        style={{
                            position: 'absolute',
                            top: '45px',
                            left: '25px',
                            width: '90px',
                            height: '2px',
                            background: 'var(--electric-purple)',
                            boxShadow: '0 0 10px var(--electric-purple)'
                        }}
                    />
                </div>
            </motion.div>

        </div>
    );
};
