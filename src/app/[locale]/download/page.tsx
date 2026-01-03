import { Download, CheckCircle, AlertCircle, FileText } from 'lucide-react';
import Link from 'next/link';

export default function DownloadPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Download SmartHDD Software
          </h1>
          <p className="text-xl text-gray-600">
            Free backup software for Windows - Required to use with your SmartHDD device
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8">
            <div className="flex flex-col items-center text-center gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  SmartHDD Software
                </h2>
                <p className="text-gray-600 mb-2">Version 1.0.0</p>
                <p className="text-sm text-gray-500">Windows 10/11</p>
              </div>
              <a
                href="https://github.com/smarthdd2026-hub/SmartHddWebsite/releases/download/v1.0.0/SmartHDD-Setup.exe"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-primary rounded-full hover:bg-primary-700 transition-all hover:scale-105 shadow-xl"
                download
              >
                <Download className="mr-2" size={24} />
                Download Software
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-accent-50 to-primary-50 rounded-3xl p-8">
            <div className="flex flex-col items-center text-center gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  User Manual
                </h2>
                <p className="text-gray-600 mb-2">Instructions PDF</p>
                <p className="text-sm text-gray-500">Complete setup guide</p>
              </div>
              <a
                href="/Instructions.pdf"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-accent rounded-full hover:bg-accent-600 transition-all hover:scale-105 shadow-xl"
                download
              >
                <FileText className="mr-2" size={24} />
                Download Manual
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle className="text-accent" size={24} />
              System Requirements
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Windows 10 or Windows 11</li>
              <li>• 500MB free disk space</li>
              <li>• USB 2.0 port (or higher)</li>
              <li>• Internet connection (for initial setup)</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <AlertCircle className="text-secondary" size={24} />
              Installation Steps
            </h3>
            <ol className="space-y-2 text-gray-600">
              <li>1. Download the installer</li>
              <li>2. Run the .exe file</li>
              <li>3. Follow the setup wizard</li>
              <li>4. Connect your SmartHDD device</li>
            </ol>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Changelog</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-bold text-gray-900">Version 1.0.0</span>
                <span className="text-sm text-gray-500">• January 15, 2026</span>
              </div>
              <ul className="text-gray-600 space-y-1">
                <li>• Initial release</li>
                <li>• Support for Basic and Pro models</li>
                <li>• Full and incremental backup options</li>
                <li>• Daily, weekly, and monthly scheduling</li>
                <li>• Multi-language support (English, Hebrew, Russian)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 text-center">
          <p className="text-amber-900 font-medium mb-4">
            Need help? Have questions about installation?
          </p>
          <Link
            href="/en/contact"
            className="inline-block px-6 py-3 bg-amber-900 text-white rounded-lg font-semibold hover:bg-amber-800 transition-colors"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
