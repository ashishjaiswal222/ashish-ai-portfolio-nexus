import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const submitContact = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call - replace with actual backend when ready
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Store in localStorage for admin to view (temporary until backend)
      const existingContacts = JSON.parse(localStorage.getItem('contacts') || '[]');
      const newContact = {
        ...data,
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
        status: 'new'
      };
      
      localStorage.setItem('contacts', JSON.stringify([...existingContacts, newContact]));
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      return true;
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return { submitContact, isSubmitting };
};