import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface ContactFormProps {
  buttonText: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ buttonText }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<'idle' | 'form' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;

    // Simulate sending email
    console.log(`Sending email to contact@powm.app from ${email}`);
    // In a real app, we'd use an API call here.
    // For now, let's open mailto as a fallback or just show success
    // window.location.href = `mailto:contact@powm.app?subject=Powm Inquiry&body=${encodeURIComponent(message)}`;

    setStep('success'); setTimeout(() => {
      setIsOpen(false);
      setStep('idle');
    }, 3000);
  };

  return (
    <motion.div
      layout
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{
        background: isOpen ? 'rgba(57, 57, 57, 0.1)' : '#fff',
        backdropFilter: isOpen ? 'blur(var(--glass-blur))' : 'none',
        WebkitBackdropFilter: isOpen ? 'blur(var(--glass-blur))' : 'none',
        borderRadius: isOpen ? '24px' : '99px',
        padding: isOpen ? '32px' : '12px 32px',
        width: isOpen ? 'min(90vw, 400px)' : 'auto',
        cursor: isOpen ? 'default' : 'pointer',
        border: '1px solid',
        borderColor: isOpen ? 'var(--glass-border)' : 'transparent',
        overflow: 'hidden',
        position: 'relative'
      }}
      onClick={() => !isOpen && (setIsOpen(true), setStep('form'))}
    >
      <motion.div layout="position">
        {!isOpen && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              color: '#000',
              fontSize: '16px',
              fontWeight: 600,
              whiteSpace: 'nowrap'
            }}
          >
            {buttonText}
          </motion.span>
        )}

        {isOpen && step === 'form' && (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <h3 style={{ color: '#fff', margin: 0, fontSize: '1.25rem' }}>{t('contact.title', 'Get in touch')}</h3>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); setIsOpen(false); setStep('idle'); }}
                style={{ background: 'none', border: 'none', color: '#666', cursor: 'pointer', padding: '4px' }}
              >
                ✕
              </button>
            </div>

            <input
              name="email"
              type="email"
              placeholder={t('contact.emailPlaceholder', 'Your mail')}
              required
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                padding: '12px',
                color: '#fff',
                outline: 'none',
                fontSize: '14px'
              }}
            />

            <button
              type="submit"
              style={{
                background: '#fff',
                color: '#000',
                border: 'none',
                borderRadius: '8px',
                padding: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                marginTop: '8px'
              }}
            >
              {t('contact.submit', 'Send Request')}
            </button>
          </motion.form>
        )}

        {isOpen && step === 'success' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ textAlign: 'center', padding: '2rem 0', color: '#fff' }}
          >
            <div style={{
              width: '48px',
              height: '48px',
              background: '#39FF14',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px'
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h3 style={{ margin: '0 0 8px' }}>{t('contact.successTitle', 'Request Sent')}</h3>
            <p style={{ margin: 0, color: '#888', fontSize: '14px' }}>{t('contact.successMessage', 'We\'ll contact you shortly.')}</p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};
