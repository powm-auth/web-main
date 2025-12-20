import React from 'react';
import { motion } from 'framer-motion';

interface BusinessSectionProps {
    title: string;
    description: string;
    points: Record<string, string>;
    visual: React.ReactNode;
    align?: 'left' | 'right';
}

export const BusinessSection: React.FC<BusinessSectionProps> = ({
    title,
    description,
    points,
    visual,
    align = 'left'
}) => {
    const isRight = align === 'right';

    return (
        <div style={{
            padding: '4rem 0',
            position: 'relative'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 2rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '4rem',
                alignItems: 'center'
            }}>

                {/* Text Side */}
                <motion.div
                    initial={{ opacity: 0, x: isRight ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    style={{ order: isRight ? 2 : 1 }}
                >


                    <h3 style={{
                        fontSize: '2.5rem',
                        marginBottom: '1.5rem',
                        background: 'linear-gradient(135deg, #fff 0%, #aaa 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        lineHeight: 1.2
                    }}>
                        {title}
                    </h3>

                    <p style={{ color: '#aaa', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                        {description}
                    </p>

                    <div style={{ display: 'grid', gap: '1rem' }}>
                        {Object.values(points).map((point, i) => (
                            <div key={i} style={{
                                background: 'rgba(255,255,255,0.02)',
                                borderLeft: '2px solid rgba(255,255,255,0.1)',
                                padding: '1rem',
                                borderRadius: '0 8px 8px 0',
                                color: '#ddd'
                            }}>
                                <span dangerouslySetInnerHTML={{ __html: point }} />
                            </div>
                        ))}
                    </div>

                </motion.div>

                {/* Visual Side */}
                <div style={{
                    order: isRight ? 1 : 2,
                    display: 'flex',
                    justifyContent: 'center',
                    perspective: '1000px'
                }}>
                    {visual}
                </div>

            </div>
        </div>
    );
};
