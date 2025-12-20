import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

import { useTranslation } from 'react-i18next';

export const VisualIntegration: React.FC = () => {
    const { t } = useTranslation();
    return (
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
                background: 'linear-gradient(135deg, #1a1a1a 0%, #000 100%)',
                borderRadius: '24px',
                padding: '0',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                width: '100%',
                maxWidth: '320px',
                aspectRatio: '0.8',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                overflow: 'hidden'
            }}
        >
            {/* Glow Effect */}
            <div style={{
                position: 'absolute',
                bottom: '-50px',
                right: '-50px',
                width: '150px',
                height: '150px',
                background: 'rgba(255, 255, 255, 0.05)',
                filter: 'blur(60px)',
                borderRadius: '50%'
            }} />

            {/* Header */}
            <div style={{
                background: '#222',
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                borderBottom: '1px solid #333'
            }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FF5F56' }} />
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FFBD2E' }} />
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27C93F' }} />
                </div>
                <div style={{ fontSize: '10px', color: '#888', marginLeft: 'auto', fontFamily: 'monospace' }}>install.sh</div>
            </div>

            {/* Code Content */}
            <div style={{
                padding: '24px',
                fontFamily: 'monospace',
                fontSize: '12px',
                color: '#fff',
                position: 'relative',
                flex: 1
            }}>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.2 }}
                >
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                        <span style={{ color: '#4D9FFF' }}>$</span>
                        <span>npm install <span style={{ color: '#39FF14' }}>@powm/sdk</span></span>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        style={{ color: '#888', marginBottom: '16px' }}
                    >
                        {t('for_business_page.visual_integration.installed')}<br />
                        {t('for_business_page.visual_integration.added_packages')}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        <span style={{ color: '#C678DD' }}>import</span> {`{ verify }`} <span style={{ color: '#C678DD' }}>from</span> <span style={{ color: '#98C379' }}>'@powm/sdk'</span>;
                        <br /><br />
                        <span style={{ color: '#C678DD' }}>await</span> <span style={{ color: '#61AFEF' }}>verify</span>({`{`}
                        <br />&nbsp;&nbsp;type: <span style={{ color: '#98C379' }}>'age_over_18'</span>
                        <br />{`}`});
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 1.5, type: "spring" }}
                        style={{
                            position: 'absolute',
                            bottom: '20px',
                            right: '20px',
                            background: 'var(--electric-purple)',
                            color: 'var(--electric-white)',
                            padding: '8px 16px',
                            borderRadius: '99px',
                            fontWeight: 700,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            boxShadow: '0 0 20px var(--electric-purple)'
                        }}
                    >
                        <Code size={16} />
                        {t('for_business_page.visual_integration.done')}
                    </motion.div>

                </motion.div>
            </div>

        </motion.div>
    );
};
