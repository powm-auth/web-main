
import React from 'react';
import { motion } from 'framer-motion';
import { EyeOff, ShieldCheck } from 'lucide-react';

interface UseCaseSectionProps {
    title: string;
    context: string;
    challenge: string;
    proofText: string;
    hiddenData: string;
    visual: React.ReactNode;
    align?: 'left' | 'right';
}

export const UseCaseSection: React.FC<UseCaseSectionProps> = ({
    title,
    context,
    challenge,
    proofText,
    hiddenData,
    visual,
    align = 'left'
}) => {
    const isRight = align === 'right';

    return (
        <div style={{
            padding: '6rem 0',
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
                        {context}
                    </p>

                    <div style={{ display: 'grid', gap: '1.5rem' }}>
                        {/* The Challenge */}
                        <div style={{
                            background: 'rgba(255,255,255,0.02)',
                            borderLeft: '4px solid #FF4B1F',
                            padding: '1rem',
                            borderRadius: '0 8px 8px 0'
                        }}>
                            <div style={{ fontSize: '12px', color: '#FF4B1F', marginBottom: '4px', textTransform: 'uppercase', fontWeight: 600 }}>The Challenge</div>
                            <div style={{ color: '#ddd' }}>"{challenge}"</div>
                        </div>

                        {/* The Proof */}
                        <div style={{
                            background: 'rgba(255,255,255,0.02)',
                            borderLeft: '4px solid #39FF14',
                            padding: '1rem',
                            borderRadius: '0 8px 8px 0'
                        }}>
                            <div style={{ fontSize: '12px', color: '#39FF14', marginBottom: '4px', textTransform: 'uppercase', fontWeight: 600 }}>The Powm Proof</div>
                            <div style={{ color: '#ddd', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <ShieldCheck size={16} color="#39FF14" />
                                {proofText}
                            </div>
                        </div>

                        {/* What is Hidden */}
                        <div style={{
                            background: 'rgba(255,255,255,0.02)',
                            borderLeft: '4px solid #444',
                            padding: '1rem',
                            borderRadius: '0 8px 8px 0'
                        }}>
                            <div style={{ fontSize: '12px', color: '#888', marginBottom: '4px', textTransform: 'uppercase', fontWeight: 600 }}>Hidden Data (Zero-Knowledge)</div>
                            <div style={{ color: '#888', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <EyeOff size={16} />
                                {hiddenData}
                            </div>
                        </div>
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
