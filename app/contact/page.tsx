'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Github, Linkedin, Twitter, Clock, Send, Loader2 } from 'lucide-react';
import { sendEmail } from './actions';
import SendMessage from '../components/sendmessage';

type FormData = {
  name: string;
  email: string;
  inquiryType: string;
  message: string;
};

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const result = await sendEmail(data);
      setSubmitStatus(result);
      if (result.success) {
        reset();
      }
    } catch (error) {
      setSubmitStatus({ success: false, message: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white py-20 px-4 sm:px-6 lg:px-8 font-main">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Get In <span className="text-purple-500">Touch</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or interested in working together? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left Column: Contact Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Contact Information</h2>
              <p className="text-gray-400">
                Feel free to reach out through the contact form or via the following channels:
              </p>

              <div className="space-y-6 mt-8">
                <a href="mailto:nelsonakalia12@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-all hover:translate-x-2 duration-300 group">
                  <div className="p-3 rounded-full bg-purple-500/10 text-purple-500 group-hover:bg-purple-500/20 transition-all">
                    <Mail size={20} />
                  </div>
                  <span>nelsonakalia12@gmail.com</span>
                </a>

                <a href="https://github.com/Crackedyoda" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-all hover:translate-x-2 duration-300 group">
                  <div className="p-3 rounded-full bg-purple-500/10 text-purple-500 group-hover:bg-purple-500/20 transition-all">
                    <Github size={20} />
                  </div>
                  <span>github.com/Crackedyoda</span>
                </a>

                <a href="https://www.linkedin.com/in/nelson-akalia-51786222a/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-all hover:translate-x-2 duration-300 group">
                  <div className="p-3 rounded-full bg-purple-500/10 text-purple-500 group-hover:bg-purple-500/20 transition-all">
                    <Linkedin size={20} />
                  </div>
                  <span>linkedin.com/in/nelsonakalia</span>
                </a>

                <a href="https://x.com/Himwhoremainss" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-all hover:translate-x-2 duration-300 group">
                   <div className="p-3 rounded-full bg-purple-500/10 text-purple-500 group-hover:bg-purple-500/20 transition-all">
                    <Twitter size={20} />
                  </div>
                  <span>X.com/Himwhoremainss</span>
                </a>
              </div>
            </div>

            {/* Office Hours Box */}
            <div className="bg-[#0f0f11] border border-purple-500/30 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
               {/* Subtle glow effect */}
               <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 blur-3xl rounded-full translate-x-10 -translate-y-10"></div>
               
               <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                 <Clock size={18} className="text-purple-400"/> Office Hours
               </h3>
               <div className="space-y-2 text-gray-400">
                 <p className="flex justify-between">
                   <span>Monday - Friday:</span>
                   <span className="text-gray-200">9am - 5pm WAT</span>
                 </p>
                 <p className="flex justify-between">
                   <span>Response time:</span>
                   <span className="text-gray-200">Within an hours</span>
                 </p>
               </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="space-y-8" id="contact-form">
            <h2 className="text-2xl font-semibold">Send a Message</h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="bg-[#0f0f11] border border-white/5 p-6 sm:p-8 rounded-2xl space-y-6 shadow-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full bg-[#1a1a1c] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className="w-full bg-[#1a1a1c] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="inquiryType" className="text-sm font-medium text-gray-300">Inquiry Type</label>
                <div className="relative">
                    <select
                        id="inquiryType"
                        {...register('inquiryType', { required: 'Please select an inquiry type' })}
                        className="w-full bg-[#1a1a1c] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all appearance-none cursor-pointer"
                    >
                        <option value="" className="bg-[#1a1a1c]">Select inquiry type</option>
                        <option value="Project Proposal" className="bg-[#1a1a1c]">Project Proposal</option>
                        <option value="Freelance Opportunity" className="bg-[#1a1a1c]">Freelance Opportunity</option>
                        <option value="General Question" className="bg-[#1a1a1c]">General Question</option>
                        <option value="Collaboration" className="bg-[#1a1a1c]">Collaboration</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
                {errors.inquiryType && <p className="text-red-400 text-xs mt-1">{errors.inquiryType.message}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project or inquiry"
                  {...register('message', { required: 'Message is required' })}
                  className="w-full bg-[#1a1a1c] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all resize-none"
                ></textarea>
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-purple-600 hover:bg-purple-700 disabled:opacity-70 disabled:cursor-not-allowed text-white font-medium py-3.5 rounded-full transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-500/25 active:scale-[0.99]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
              
              {submitStatus && (
                <div className={`p-4 rounded-lg text-sm ${submitStatus.success ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                    {submitStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      
      {/* Call To Action Section */}
      <SendMessage />
    </div>
  );
}
