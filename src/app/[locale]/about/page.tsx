import { Shield, Users, Target, Mail } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About SmartHDD
          </h1>
          <p className="text-xl text-gray-600">
            Protecting your data with innovative hardware solutions
          </p>
        </div>

        <div className="prose prose-lg max-w-none mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              SmartHDD was born from a simple observation: traditional backup solutions leave your data vulnerable 24/7. 
              Whether it's ransomware attacks, hardware failures, or unauthorized access, your backup drives are constantly 
              at risk when they remain connected to your computer.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We asked ourselves: "What if your backup drives could be physically disconnected when not in use?" 
              This question led us to develop the world's first automated backup device that combines smart scheduling 
              with physical disconnection - giving you the best of both worlds: convenience and security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-primary-50 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To provide the most secure and effortless backup solution for everyone who values their data
              </p>
            </div>

            <div className="bg-secondary-50 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
              <p className="text-gray-600">
                A world where data loss is a thing of the past, and backup security is guaranteed
              </p>
            </div>

            <div className="bg-accent-50 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Values</h3>
              <p className="text-gray-600">
                Privacy, security, simplicity, and innovation in everything we create
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Physical Disconnection Matters</h2>
            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed">
                <strong className="text-gray-900">Ransomware Protection:</strong> When your backup drive is disconnected, 
                ransomware cannot encrypt it. Your data stays safe even if your main computer is compromised.
              </p>
              <p className="leading-relaxed">
                <strong className="text-gray-900">Privacy Guarantee:</strong> Your data never touches the cloud. 
                No AI scans your files, no third parties have access, and you maintain complete control.
              </p>
              <p className="leading-relaxed">
                <strong className="text-gray-900">Hardware Longevity:</strong> Drives that aren't constantly powered 
                last significantly longer, reducing wear and extending the life of your hardware.
              </p>
              <p className="leading-relaxed">
                <strong className="text-gray-900">Zero Maintenance:</strong> Set your schedule once and never think 
                about backups again. SmartHDD handles everything automatically.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-900 to-secondary-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="mb-6">
              Have questions? Want to learn more? We'd love to hear from you.
            </p>
            <div className="flex items-center justify-center gap-2 text-primary-100">
              <Mail className="w-5 h-5" />
              <a href="mailto:smarthdd2026@gmail.com" className="hover:text-white transition-colors">
                smarthdd2026@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
