'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

/* ============================================================
   S NEW ROOF INC. — FLOATING AI CHAT TAB
   Fixed vertical tab on right edge → fly-out chatbot panel
   ============================================================ */

interface ChatMessage {
  id: string;
  role: 'bot' | 'user';
  text: string;
  timestamp: Date;
}

const initialMessages: ChatMessage[] = [
  {
    id: '1',
    role: 'bot',
    text: 'Hi! I\'m the S New Roof AI assistant. I can help with roof inspections, leak detection, repair estimates, and more. How can I help you today?',
    timestamp: new Date(),
  },
];

const quickReplies = [
  'Roof Inspection',
  'Leak Detection',
  'Free Estimate',
  'Emergency Repair',
];

export default function FloatingAIChatTab() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [isOpen, messages, scrollToBottom]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleSendMessage = useCallback((text: string) => {
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: text.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const botResponses: Record<string, string> = {
        'roof inspection': 'Great choice! Our comprehensive roof inspection covers all major systems including flashing, shingles, underlayment, and ventilation. We use drone technology for hard-to-reach areas. Would you like to schedule one?',
        'leak detection': 'We specialize in advanced leak detection using thermal imaging and moisture mapping. This allows us to pinpoint the exact source without unnecessary demolition. Want to book a detection service?',
        'free estimate': 'Absolutely! We offer free, no-obligation estimates. Our team will visit your property to assess the condition and provide a detailed quote. Shall I help you fill out the request form?',
        'emergency repair': 'We offer 24/7 emergency tarping and repair services. If you have an active leak or storm damage, call us immediately at 714-770-4756. Would you like to learn more about our emergency response?',
      };

      const key = Object.keys(botResponses).find((k) =>
        text.toLowerCase().includes(k)
      );

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        text: botResponses[key] || 'Thank you for reaching out! Our team will review your inquiry and get back to you shortly. In the meantime, feel free to call us at 714-770-4756 for immediate assistance.',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1200);
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputValue);
  }, [inputValue, handleSendMessage]);

  const handleQuickReply = useCallback((reply: string) => {
    handleSendMessage(reply);
  }, [handleSendMessage]);

  return (
    <>
      {/* ── Floating Vertical Tab ── */}
      <button
        type="button"
        className={`snr-ai-tab ${isOpen ? 'snr-ai-tab--open' : ''}`}
        onClick={handleToggle}
        aria-label={isOpen ? 'Close AI assistant' : 'Open AI assistant'}
        aria-expanded={isOpen}
      >
        <span className="snr-ai-tab-text">Ask Leak Agent AI</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="snr-ai-tab-icon"
          aria-hidden="true"
        >
          {isOpen ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <>
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </>
          )}
        </svg>
      </button>

      {/* ── Chat Panel Fly-Out ── */}
      <div
        className={`snr-ai-panel ${isOpen ? 'snr-ai-panel--open' : ''}`}
        role="dialog"
        aria-modal="false"
        aria-label="AI Roofing Assistant"
      >
        {/* Panel Header */}
        <div className="snr-ai-panel-header">
          <div className="snr-ai-panel-header-left">
            <div className="snr-ai-panel-avatar">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2a5 5 0 015 5v3a5 5 0 01-10 0V7a5 5 0 015-5z" />
                <path d="M2 12h2m16 0h2M12 2v2m0 16v2" />
              </svg>
            </div>
            <div>
              <div className="snr-ai-panel-name">Leak Agent AI</div>
              <div className="snr-ai-panel-status">
                <span className="snr-ai-panel-status-dot" />
                Online
              </div>
            </div>
          </div>
          <button
            type="button"
            className="snr-ai-panel-close"
            onClick={handleToggle}
            aria-label="Close chat"
          >
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Chat Messages */}
        <div className="snr-ai-panel-messages">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`snr-ai-msg snr-ai-msg--${msg.role}`}
            >
              <div className="snr-ai-msg-bubble">
                {msg.text}
              </div>
              <div className="snr-ai-msg-time">
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="snr-ai-msg snr-ai-msg--bot">
              <div className="snr-ai-msg-bubble snr-ai-typing">
                <span />
                <span />
                <span />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Replies */}
        {messages.length <= 2 && (
          <div className="snr-ai-quick-replies">
            {quickReplies.map((reply) => (
              <button
                key={reply}
                type="button"
                className="snr-ai-quick-btn"
                onClick={() => handleQuickReply(reply)}
              >
                {reply}
              </button>
            ))}
          </div>
        )}

        {/* Input Bar */}
        <form className="snr-ai-panel-input-bar" onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="text"
            className="snr-ai-panel-input"
            placeholder="Type your question..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            aria-label="Chat message input"
          />
          <button
            type="submit"
            className="snr-ai-panel-send"
            aria-label="Send message"
            disabled={!inputValue.trim()}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
          </button>
        </form>
      </div>
    </>
  );
}
