import { FaEnvelope, FaPhone, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

export default function Contact() {
  const contacts = [
    { icon: <FaEnvelope />, text: "iqbalrdn013@email.com", link: "mailto:iqbalrdn013@email.com" },
    { icon: <FaPhone />, text: "+62 858 6442 7221" },
    { icon: <FaLinkedin />, text: "LinkedIn", link: "https://linkedin.com/in/iqbalramadhan" },
    { icon: <FaGithub />, text: "Github", link: "https://github.com/balldhan" },
    { icon: <FaInstagram />, text: "Instagram", link: "https://instagram.com/balldhan_" },
  ];

  return (
    <section id="contact" className="px-6 py-12 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-cyan-600 dark:text-cyan-400">Contact</h2>
        <div className="space-y-4">
          {contacts.map((item, idx) => (
            <div key={idx} className="flex items-center justify-center gap-3 text-lg">
              <div className="text-cyan-500 text-xl">{item.icon}</div>
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {item.text}
                </a>
              ) : (
                <span>{item.text}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
