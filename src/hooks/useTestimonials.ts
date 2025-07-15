import { useState, useEffect } from 'react';

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
  email: string;
}

export const useTestimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    loadTestimonials();
  }, []);

  const loadTestimonials = () => {
    const stored = JSON.parse(localStorage.getItem('testimonials') || '[]');
    setTestimonials(stored);
  };

  const addTestimonial = (testimonial: Omit<Testimonial, 'id' | 'status' | 'createdAt'>) => {
    const newTestimonial: Testimonial = {
      ...testimonial,
      id: Date.now().toString(),
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
    
    const updated = [...testimonials, newTestimonial];
    setTestimonials(updated);
    localStorage.setItem('testimonials', JSON.stringify(updated));
  };

  const updateTestimonialStatus = (id: string, status: 'approved' | 'rejected') => {
    const updated = testimonials.map(t => 
      t.id === id ? { ...t, status } : t
    );
    setTestimonials(updated);
    localStorage.setItem('testimonials', JSON.stringify(updated));
  };

  const deleteTestimonial = (id: string) => {
    const updated = testimonials.filter(t => t.id !== id);
    setTestimonials(updated);
    localStorage.setItem('testimonials', JSON.stringify(updated));
  };

  const getApprovedTestimonials = () => {
    return testimonials.filter(t => t.status === 'approved');
  };

  return {
    testimonials,
    addTestimonial,
    updateTestimonialStatus,
    deleteTestimonial,
    getApprovedTestimonials,
    loadTestimonials
  };
};