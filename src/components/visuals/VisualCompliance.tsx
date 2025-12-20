import React from 'react';
import { motion } from 'framer-motion';
import { Check, ClipboardList } from 'lucide-react';

import { useTranslation } from 'react-i18next';

export const VisualCompliance: React.FC = () => {
    const { t } = useTranslation();
    return (
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
                background: 'linear-gradient(135deg, #38184fff 0%, #000 100%)',
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
                right: '-50px',
                width: '150px',
                height: '150px',
                background: 'rgba(0, 116, 217, 0.1)', // Blue glow
                filter: 'blur(60px)',
                borderRadius: '50%'
            }} />

            <div style={{ width: '100%', padding: '0 12px', position: 'relative', zIndex: 1 }}>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                    <ClipboardList color="var(--electric-purple)" size={20} />
                    <span style={{ fontSize: '14px', color: '#fff', fontWeight: 600 }}>{t('for_business_page.visual_compliance.compliance_check')}</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {[
                        { name: t('for_business_page.visual_compliance.gdpr'), delay: 0.2 },
                        { name: t('for_business_page.visual_compliance.sovereignty'), delay: 0.4 },
                        { name: t('for_business_page.visual_compliance.privacy'), delay: 0.6 }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: item.delay, duration: 0.5 }}
                            style={{
                                background: 'rgba(255,255,255,0.05)',
                                padding: '12px',
                                borderRadius: '8px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                border: '1px solid rgba(255,255,255,0.05)'
                            }}
                        >
                            <span style={{ fontSize: '12px', color: '#ddd' }}>{item.name}</span>
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ delay: item.delay + 0.2, type: "spring" }}
                            >
                                <div style={{
                                    background: 'rgba(57, 255, 20, 0.2)',
                                    width: '24px',
                                    height: '24px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Check size={14} color="#39FF14" strokeWidth={3} />
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ width: '0%' }}
                    whileInView={{ width: '100%' }}
                    transition={{ delay: 1, duration: 0.8 }}
                    style={{
                        height: '4px',
                        background: '#39FF14',
                        borderRadius: '2px',
                        marginTop: '24px',
                        boxShadow: '0 0 10px rgba(57, 255, 20, 0.5)'
                    }}
                />

                <div style={{ fontSize: '10px', color: '#888', marginTop: '8px', textAlign: 'right' }}>
                    {t('for_business_page.visual_compliance.status_label')}
                </div>
            </div>

        </motion.div>
    );
};
