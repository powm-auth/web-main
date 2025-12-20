import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Server } from 'lucide-react';

import { useTranslation } from 'react-i18next';

export const VisualLiability: React.FC = () => {
    const { t } = useTranslation();
    return (
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
                background: 'linear-gradient(135deg, #111 0%, #000 100%)',
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
                background: 'rgba(255, 75, 31, 0.1)', // Orange glow
                filter: 'blur(60px)',
                borderRadius: '50%'
            }} />

            {/* Central Element: The Vault */}
            <div style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.2
                    }}
                    style={{
                        width: '120px',
                        height: '120px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
                    }}
                >
                    <Lock size={48} color="#FF4B1F" />
                </motion.div>

                {/* Floating Elements representing No Data */}
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        position: 'absolute',
                        top: '-30px',
                        right: '-40px',
                        background: 'rgba(0,0,0,0.6)',
                        padding: '8px 12px',
                        borderRadius: '8px',
                        border: '1px solid #333',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                    }}
                >
                    <Server size={14} color="#666" />
                    <span style={{ fontSize: '12px', color: '#666', textDecoration: 'line-through' }}>{t('for_business_page.visual_liability.data_label')}</span>
                </motion.div>

                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    style={{
                        position: 'absolute',
                        bottom: '-20px',
                        left: '-30px',
                        background: 'rgba(0,0,0,0.6)',
                        padding: '8px 12px',
                        borderRadius: '8px',
                        border: '1px solid #333',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                    }}
                >
                    <Shield size={14} color="#39FF14" />
                    <span style={{ fontSize: '12px', color: '#fff' }}>{t('for_business_page.visual_liability.protected')}</span>
                </motion.div>
            </div>

            <div style={{
                position: 'absolute',
                bottom: '24px',
                textAlign: 'center',
                width: '100%'
            }}>
                <div style={{ fontSize: '14px', color: '#fff', fontWeight: 600 }}>{t('for_business_page.visual_liability.zero_retention')}</div>
                <div style={{ fontSize: '10px', color: '#666', marginTop: '4px' }}>{t('for_business_page.visual_liability.yes_no_only')}</div>
            </div>

        </motion.div>
    );
};
