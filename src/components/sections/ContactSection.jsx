import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiSend, FiUser, FiMessageSquare } from 'react-icons/fi';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const contactInfo = [
    { icon: <FiMail />, text: 'angelo.ripamonti.1@gmail.com', href: 'mailto:angelo.ripamonti.1@gmail.com' },
    { icon: <FiGithub />, text: 'github.com/AngeloRipamonti', href: 'https://github.com/AngeloRipamonti' },
    { icon: <FiLinkedin />, text: 'linkedin.com/in/angelo-ripamonti-1912372a3', href: 'https://linkedin.com/in/angelo-ripamonti-1912372a3' },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-dark-light">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          Contattami
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          {/* Informazioni di contatto */}
          <motion.div 
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">Restiamo in contatto</h3>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Hai un progetto in mente o vuoi semplicemente fare due chiacchiere? Sentiti libero di contattarmi attraverso il form o utilizzando uno dei canali qui sotto.
              <br></br><small>Note: Il form di contatto è attualmente disabilitato. Usare i canali qui sotto.</small>
            </p>
            
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                    {info.icon}
                  </div>
                  <span>{info.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form di contatto */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">Inviami un messaggio</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Nome
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500 dark:text-gray-400">
                      <FiUser />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-primary focus:border-primary bg-white dark:bg-dark text-gray-900 dark:text-gray-100"
                      placeholder="Il tuo nome"
                      disabled
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500 dark:text-gray-400">
                      <FiMail />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-primary focus:border-primary bg-white dark:bg-dark text-gray-900 dark:text-gray-100"
                      placeholder="La tua email"
                      disabled
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Messaggio
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 flex items-start pointer-events-none text-gray-500 dark:text-gray-400">
                      <FiMessageSquare />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-primary focus:border-primary bg-white dark:bg-dark text-gray-900 dark:text-gray-100"
                      placeholder="Il tuo messaggio"
                      disabled
                    ></textarea>
                  </div>
                </div>
                
                <div>
                  <motion.button
                    type="submit"
                    className="w-full flex justify-center items-center btn-primary"
                    disabled={true} //isSubmitting
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      'Invio in corso...'
                    ) : (
                      <>
                        <FiSend className="mr-2" /> Invia messaggio
                      </>
                    )}
                  </motion.button>
                </div>
                
                {submitStatus === 'success' && (
                  <motion.div 
                    className="text-green-600 dark:text-green-400 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    Messaggio inviato con successo! Ti risponderò al più presto.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;