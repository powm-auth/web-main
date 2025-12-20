import React from 'react';
import { motion } from 'framer-motion';
import { Users, Headphones, Activity } from 'lucide-react';

import { useTranslation } from 'react-i18next';

export const VisualTeam: React.FC = () => {
    const { t } = useTranslation();
    return (
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
                background: 'linear-gradient(135deg, #222 0%, #000 100%)',
                borderRadius: '24px',
                padding: '24px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                width: '100%',
                maxWidth: '320px',
                aspectRatio: '0.8',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                position: 'relative',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                overflow: 'hidden'
            }}
        >
            {/* Glow Effect */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '150px',
                height: '150px',
                background: 'rgba(255, 255, 255, 0.03)',
                filter: 'blur(60px)',
                borderRadius: '50%'
            }} />

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', zIndex: 1 }}>

                {/* Support Agent */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    style={{
                        background: 'rgba(255,255,255,0.05)',
                        padding: '16px',
                        borderRadius: '16px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '8px',
                        gridColumn: 'span 2'
                    }}
                >
                    <div style={{ background: '#333', padding: '8px', borderRadius: '50%' }}>
                        <Users size={20} color="#fff" />
                    </div>
                    <div style={{ fontSize: '12px', color: '#fff', fontWeight: 600 }}>{t('for_business_page.visual_team.partner')}</div>
                    <div style={{ fontSize: '10px', color: '#888', textAlign: 'center' }}>{t('for_business_page.visual_team.priority')}</div>
                </motion.div>

                {/* 24/7 Monitoring */}
                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    style={{
                        background: 'rgba(255,255,255,0.05)',
                        padding: '16px',
                        borderRadius: '16px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '8px'
                    }}
                >
                    <Activity size={20} color="#39FF14" />
                    <div style={{ fontSize: '10px', color: '#888' }}>{t('for_business_page.visual_team.uptime')}</div>
                    <div style={{ fontSize: '12px', color: '#fff', fontWeight: 600 }}>99.99%</div>
                </motion.div>

                {/* Priority Support */}
                <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    style={{
                        background: 'rgba(255,255,255,0.05)',
                        padding: '16px',
                        borderRadius: '16px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '8px'
                    }}
                >
                    <Headphones size={20} color="#4D9FFF" />
                    <div style={{ fontSize: '10px', color: '#888' }}>{t('for_business_page.visual_team.support')}</div>
                    <div style={{ fontSize: '12px', color: '#fff', fontWeight: 600 }}>{t('for_business_page.visual_team.direct')}</div>
                </motion.div>

            </div>

            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    width: '100%',
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, #fff, transparent)',
                    opacity: 0.2
                }}
            />

        </motion.div>
    );
};
