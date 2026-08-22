'use client';

import React, { useState, useRef, useEffect } from 'react';
import { DownOutlined } from '@ant-design/icons';
import emailjs from '@emailjs/browser';
import styles from './ContactSection.module.scss';

interface FormErrors {
  fullName?: string;
  company?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    projectType: 'Residential',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  // Uncontrolled ref for the honeypot field to prevent React state re-renders from resetting the bot trap
  const honeypotRef = useRef<HTMLInputElement>(null);
  const selectWrapperRef = useRef<HTMLDivElement>(null);
  const options = ['Residential', 'Commercial'];

  // Auto-hide success status message after 10 seconds
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (status.type === 'success') {
      timer = setTimeout(() => {
        setStatus({ type: null, message: '' });
      }, 10000); // 10,000ms = 10 seconds
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [status.type]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectWrapperRef.current &&
        !selectWrapperRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) return 'Full Name is required.';
        if (value.trim().length < 3) return 'Full Name must be at least 3 characters.';
        // Name must contain only letters, spaces, hyphens, and apostrophes (no numbers or special symbols)
        const hasNumbersOrSymbols = /[^a-zA-Z\s'-]/.test(value);
        if (hasNumbersOrSymbols) {
          return 'Full Name cannot contain numbers or special symbols.';
        }
        return undefined;

      case 'company':
        if (value.trim() && value.trim().length > 20) {
          return 'Company name cannot exceed 20 characters.';
        }
        return undefined;

      case 'email':
        if (!value.trim()) return 'Email address is required.';
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(value.trim())) return 'Please enter a valid email address (e.g. name@domain.com or name@company.co).';
        return undefined;

      case 'phone':
        if (value.trim()) {
          const hasLetters = /[a-zA-Z]/.test(value);
          if (hasLetters) return 'Phone number cannot contain letters or text characters.';
          const digitsOnly = value.replace(/\D/g, '');
          if (digitsOnly.length < 11) return 'Phone number must contain at least 11 numeric digits.';
          if (digitsOnly.length > 15) return 'Phone number cannot exceed 15 numeric digits.';
        }
        return undefined;

      case 'message':
        if (!value.trim()) return 'Message is required.';
        if (value.trim().length < 10) return 'Message must be at least 10 characters long.';
        // URL validation: block website links / URLs in message
        const urlRegex = /(https?:\/\/|www\.|[a-zA-Z0-9-]+\.(com|org|net|io|co|biz|info|gov|edu))/i;
        if (urlRegex.test(value.trim())) return 'Message cannot contain website links or URLs.';
        return undefined;

      default:
        return undefined;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    // Immediate real-time inline error display on typing
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const value = formData[field as keyof typeof formData];
    const error = validateField(field, value);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleSelectOption = (option: string) => {
    setFormData((prev) => ({ ...prev, projectType: option }));
    setIsDropdownOpen(false);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    const nameErr = validateField('fullName', formData.fullName);
    const compErr = validateField('company', formData.company);
    const emailErr = validateField('email', formData.email);
    const phoneErr = validateField('phone', formData.phone);
    const msgErr = validateField('message', formData.message);

    if (nameErr) newErrors.fullName = nameErr;
    if (compErr) newErrors.company = compErr;
    if (emailErr) newErrors.email = emailErr;
    if (phoneErr) newErrors.phone = phoneErr;
    if (msgErr) newErrors.message = msgErr;

    setErrors(newErrors);
    setTouched({
      fullName: true,
      company: true,
      email: true,
      phone: true,
      message: true,
    });

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Honeypot Anti-Spam Check using Uncontrolled Ref
    const honeypotVal = honeypotRef.current ? honeypotRef.current.value : '';

    if (honeypotVal && honeypotVal.trim() !== '') {
      // SPAM BOT DETECTED: simulate fake success without triggering EmailJS
      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.',
      });
      setFormData({
        fullName: '',
        company: '',
        email: '',
        phone: '',
        projectType: 'Residential',
        message: '',
      });
      if (honeypotRef.current) {
        honeypotRef.current.value = '';
      }
      return;
    }

    // 2. Client-side Form Validation Check
    if (!validateForm()) {
      setStatus({
        type: 'error',
        message: 'Please resolve the highlighted errors before submitting.',
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    const serviceId =
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id';
    const templateId =
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id';
    const publicKey =
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key';

    const templateParams = {
      from_name: formData.fullName,
      company: formData.company || 'Not specified',
      from_email: formData.email,
      phone: formData.phone || 'Not specified',
      project_type: formData.projectType,
      message: formData.message,
    };

    try {
      if (
        serviceId === 'your_service_id' ||
        templateId === 'your_template_id' ||
        publicKey === 'your_public_key'
      ) {
        setTimeout(() => {
          setStatus({
            type: 'success',
            message:
              'Thank you! Your message has been received. (To activate live email delivery, add your EmailJS keys in .env.local).',
          });
          setFormData({
            fullName: '',
            company: '',
            email: '',
            phone: '',
            projectType: 'Residential',
            message: '',
          });
          setErrors({});
          setTouched({});
          setIsSubmitting(false);
        }, 800);
        return;
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setStatus({
        type: 'success',
        message:
          'Thank you! Your message has been sent successfully. We will follow up within 1–2 business days.',
      });
      setFormData({
        fullName: '',
        company: '',
        email: '',
        phone: '',
        projectType: 'Residential',
        message: '',
      });
      setErrors({});
      setTouched({});
    } catch (error) {
      console.error('EmailJS submit error:', error);
      setStatus({
        type: 'error',
        message:
          'Failed to send message. Please check your network connection or try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={styles.contactWrapper}>
      <div className={styles.container}>
        {/* Left Column: Text & Notice */}
        <div className={styles.leftColumn}>
          <h2 className={styles.headline}>
            Let&apos;s <span className={styles.coralText}>Build</span> Something<br />
            Precise
          </h2>
          <p className={styles.subheadline}>
            Tell us about your project and we&apos;ll follow up with next steps.
          </p>

          <div className={styles.noticeBox}>
            <div className={styles.noticeLine} />
            <p className={styles.noticeText}>
              We reply within 1–2 business days. Every inquiry gets a real answer,
              not a form letter.
            </p>
          </div>
        </div>

        {/* Right Column: Form Card */}
        <div className={styles.rightColumn}>
          <form className={styles.formCard} onSubmit={handleSubmit} noValidate>
            {/* Uncontrolled Hidden Honeypot Input Field for Bot Trap */}
            <div className={styles.honeypotField} aria-hidden="true">
              <input
                ref={honeypotRef}
                type="text"
                name="website"
                defaultValue=""
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className={styles.formRow}>
              {/* Full Name */}
              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  onBlur={() => handleBlur('fullName')}
                  className={`${styles.inputField} ${
                    errors.fullName && touched.fullName ? styles.hasError : ''
                  }`}
                  required
                />
                {errors.fullName && touched.fullName && (
                  <span className={styles.errorMessage}>{errors.fullName}</span>
                )}
              </div>

              {/* Company */}
              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  onBlur={() => handleBlur('company')}
                  className={`${styles.inputField} ${
                    errors.company && touched.company ? styles.hasError : ''
                  }`}
                />
                {errors.company && touched.company && (
                  <span className={styles.errorMessage}>{errors.company}</span>
                )}
              </div>
            </div>

            <div className={styles.formRow}>
              {/* Email */}
              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={() => handleBlur('email')}
                  className={`${styles.inputField} ${
                    errors.email && touched.email ? styles.hasError : ''
                  }`}
                  required
                />
                {errors.email && touched.email && (
                  <span className={styles.errorMessage}>{errors.email}</span>
                )}
              </div>

              {/* Phone */}
              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={() => handleBlur('phone')}
                  className={`${styles.inputField} ${
                    errors.phone && touched.phone ? styles.hasError : ''
                  }`}
                />
                {errors.phone && touched.phone && (
                  <span className={styles.errorMessage}>{errors.phone}</span>
                )}
              </div>
            </div>

            {/* Project Type */}
            <div className={styles.fieldGroup}>
              <label className={styles.fieldLabel}>Project Type</label>
              <div className={styles.selectWrapper} ref={selectWrapperRef}>
                <button
                  type="button"
                  className={`${styles.customSelectTrigger} ${
                    isDropdownOpen ? styles.isOpen : ''
                  }`}
                  onClick={() => setIsDropdownOpen((prev) => !prev)}
                >
                  <span>{formData.projectType}</span>
                  <DownOutlined
                    className={`${styles.selectArrow} ${
                      isDropdownOpen ? styles.isOpen : ''
                    }`}
                  />
                </button>

                {isDropdownOpen && (
                  <div className={styles.customDropdownMenu}>
                    {options.map((option) => (
                      <div
                        key={option}
                        className={styles.customOption}
                        onClick={() => handleSelectOption(option)}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Message */}
            <div className={styles.fieldGroup}>
              <label className={styles.fieldLabel}>Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={() => handleBlur('message')}
                className={`${styles.textareaField} ${
                  errors.message && touched.message ? styles.hasError : ''
                }`}
                rows={2}
                required
              />
              {errors.message && touched.message && (
                <span className={styles.errorMessage}>{errors.message}</span>
              )}
            </div>

            {status.message && (
              <div
                className={`${styles.statusBanner} ${
                  status.type === 'success' ? styles.success : styles.error
                }`}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
