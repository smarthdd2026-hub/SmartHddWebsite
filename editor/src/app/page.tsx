'use client';

import { useState, useEffect } from 'react';
import { Save, Download, Upload, Image as ImageIcon, Globe, Eye } from 'lucide-react';

type Locale = 'en' | 'he' | 'ru';

interface TranslationData {
  [key: string]: any;
}

interface AllTranslations {
  en: TranslationData;
  he: TranslationData;
  ru: TranslationData;
}

export default function ContentEditor() {
  const [currentLocale, setCurrentLocale] = useState<Locale>('en');
  const [translations, setTranslations] = useState<AllTranslations>({
    en: {},
    he: {},
    ru: {}
  });
  const [images, setImages] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(true);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    try {
      const enRes = await fetch('/api/load-translations?locale=en');
      const heRes = await fetch('/api/load-translations?locale=he');
      const ruRes = await fetch('/api/load-translations?locale=ru');

      const en = await enRes.json();
      const he = await heRes.json();
      const ru = await ruRes.json();

      setTranslations({ en, he, ru });
      setLoading(false);
    } catch (error) {
      console.error('Error loading content:', error);
      setLoading(false);
    }
  };

  const updateTranslation = (path: string, value: string) => {
    setTranslations(prev => {
      const newTranslations = { ...prev };
      const keys = path.split('.');
      let current: any = newTranslations[currentLocale];
      
      for (let i = 0; i < keys.length - 1; i++) {
        if (!current[keys[i]]) current[keys[i]] = {};
        current = current[keys[i]];
      }
      
      current[keys[keys.length - 1]] = value;
      return newTranslations;
    });
    setSaved(false);
  };

  const saveChanges = async () => {
    try {
      await fetch('/api/save-translations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(translations)
      });
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (error) {
      console.error('Error saving:', error);
      alert('Error saving changes');
    }
  };

  const exportToProject = async () => {
    try {
      const response = await fetch('/api/export-to-project', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(translations)
      });
      
      if (response.ok) {
        alert('✅ Changes exported to project files!\n\nYour translation files have been updated:\n- messages/en.json\n- messages/he.json\n- messages/ru.json\n\nYou can now commit and push to GitHub.');
      }
    } catch (error) {
      console.error('Error exporting:', error);
      alert('Error exporting to project');
    }
  };

  const handleImageUpload = async (key: string, file: File) => {
    // Show preview immediately
    const reader = new FileReader();
    reader.onload = (e) => {
      setImages(prev => ({ ...prev, [key]: e.target?.result as string }));
    };
    reader.readAsDataURL(file);

    // Upload to server
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('key', key);

      const response = await fetch('/api/upload-image', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        const result = await response.json();
        alert(`✅ Image uploaded successfully!\n\nSaved as: ${result.filename}\nPath: ${result.path}`);
      } else {
        alert('❌ Failed to upload image');
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('❌ Error uploading image');
    }
  };

  const renderToggleField = (label: string, path: string, value: string) => {
    const isEnabled = value !== 'false';
    return (
      <div className="mb-4 flex items-center justify-between p-4 bg-gray-50 rounded-lg">
        <label className="text-sm font-semibold text-gray-700">
          {label}
        </label>
        <button
          onClick={() => updateTranslation(path, isEnabled ? 'false' : 'true')}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
            isEnabled ? 'bg-primary' : 'bg-gray-300'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              isEnabled ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>
    );
  };

  const renderEditableField = (label: string, path: string, value: string, multiline = false) => {
    return (
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          {label}
        </label>
        {multiline ? (
          <textarea
            value={value || ''}
            onChange={(e) => updateTranslation(path, e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary resize-none text-gray-900 bg-white"
            rows={3}
          />
        ) : (
          <input
            type="text"
            value={value || ''}
            onChange={(e) => updateTranslation(path, e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-gray-900 bg-white"
          />
        )}
      </div>
    );
  };

  const renderSection = (title: string, sectionKey: string, fields: { label: string; key: string; multiline?: boolean }[]) => {
    // Handle nested keys like 'products.basic'
    const keys = sectionKey.split('.');
    let sectionData: any = translations[currentLocale];
    for (const key of keys) {
      sectionData = sectionData?.[key] || {};
    }
    
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <div className="w-2 h-6 bg-primary rounded"></div>
          {title}
        </h3>
        {fields.map(field => (
          <div key={field.key}>
            {renderEditableField(
              field.label,
              `${sectionKey}.${field.key}`,
              sectionData[field.key],
              field.multiline
            )}
          </div>
        ))}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading content...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">SmartHDD Content Editor</h1>
              <p className="text-sm text-gray-600">Edit your website content visually</p>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Language Switcher */}
              <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setCurrentLocale('en')}
                  className={`px-4 py-2 rounded-md font-medium transition-colors ${
                    currentLocale === 'en' ? 'bg-white text-primary shadow-sm' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  🇺🇸 English
                </button>
                <button
                  onClick={() => setCurrentLocale('he')}
                  className={`px-4 py-2 rounded-md font-medium transition-colors ${
                    currentLocale === 'he' ? 'bg-white text-primary shadow-sm' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  🇮🇱 עברית
                </button>
                <button
                  onClick={() => setCurrentLocale('ru')}
                  className={`px-4 py-2 rounded-md font-medium transition-colors ${
                    currentLocale === 'ru' ? 'bg-white text-primary shadow-sm' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  🇷🇺 Русский
                </button>
              </div>

              {/* Action Buttons */}
              <button
                onClick={saveChanges}
                className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                <Save size={20} />
                {saved ? 'Saved!' : 'Save'}
              </button>
              
              <button
                onClick={exportToProject}
                className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent-600 transition-colors"
              >
                <Download size={20} />
                Export to Project
              </button>

              <a
                href="http://localhost:3000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary-700 transition-colors"
              >
                <Eye size={20} />
                Preview Site
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Navigation Section */}
          {renderSection('Navigation', 'nav', [
            { label: 'Home Link', key: 'home' },
            { label: 'Products Link', key: 'products' },
            { label: 'Download Link', key: 'download' },
            { label: 'How It Works Link', key: 'howItWorks' },
            { label: 'About Link', key: 'about' },
            { label: 'Contact Link', key: 'contact' },
          ])}

          {/* Hero Section */}
          {renderSection('Hero Section', 'hero', [
            { label: 'Main Title', key: 'title', multiline: true },
            { label: 'Subtitle', key: 'subtitle', multiline: true },
            { label: 'Call to Action Button', key: 'cta' },
            { label: 'Secondary CTA Button', key: 'ctaSecondary' },
            { label: 'YouTube Video URL (optional)', key: 'videoUrl' },
          ])}

          {/* Problem Section */}
          {renderSection('Problem Section', 'problem', [
            { label: 'Section Title', key: 'title' },
            { label: 'Always Connected - Title', key: 'alwaysConnected' },
            { label: 'Always Connected - Description', key: 'alwaysConnectedDesc', multiline: true },
            { label: 'Manual Backup - Title', key: 'manualBackup' },
            { label: 'Manual Backup - Description', key: 'manualBackupDesc', multiline: true },
            { label: 'Cloud Privacy - Title', key: 'cloudPrivacy' },
            { label: 'Cloud Privacy - Description', key: 'cloudPrivacyDesc', multiline: true },
          ])}

          {/* Solution Section */}
          {renderSection('Solution Section', 'solution', [
            { label: 'Section Title', key: 'title' },
            { label: 'Subtitle', key: 'subtitle', multiline: true },
            { label: 'Feature 1 - Title', key: 'feature1' },
            { label: 'Feature 1 - Description', key: 'feature1Desc', multiline: true },
            { label: 'Feature 2 - Title', key: 'feature2' },
            { label: 'Feature 2 - Description', key: 'feature2Desc', multiline: true },
            { label: 'Feature 3 - Title', key: 'feature3' },
            { label: 'Feature 3 - Description', key: 'feature3Desc', multiline: true },
          ])}

          {/* Products Settings */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <div className="w-2 h-6 bg-primary rounded"></div>
              Products Settings
            </h3>
            {renderToggleField('Show Prices on Website', 'products.showPrices', translations[currentLocale]?.products?.showPrices || 'true')}
            <p className="text-sm text-gray-500 mt-2">When disabled, prices will be hidden from the products page and comparison table.</p>
          </div>

          {/* Products Section */}
          {renderSection('Products - Basic', 'products.basic', [
            { label: 'Product Name', key: 'name' },
            { label: 'Subtitle', key: 'subtitle' },
            { label: 'Price', key: 'price' },
            { label: 'Feature 1', key: 'feature1' },
            { label: 'Feature 2', key: 'feature2' },
            { label: 'Feature 3', key: 'feature3' },
            { label: 'Feature 4', key: 'feature4' },
            { label: 'Feature 5', key: 'feature5' },
            { label: 'Feature 6', key: 'feature6' },
            { label: 'CTA Button', key: 'cta' },
          ])}

          {renderSection('Products - Pro', 'products.pro', [
            { label: 'Product Name', key: 'name' },
            { label: 'Subtitle', key: 'subtitle' },
            { label: 'Price', key: 'price' },
            { label: 'Popular Badge', key: 'popular' },
            { label: 'Feature 1', key: 'feature1' },
            { label: 'Feature 2', key: 'feature2' },
            { label: 'Feature 3', key: 'feature3' },
            { label: 'Feature 4', key: 'feature4' },
            { label: 'Feature 5', key: 'feature5' },
            { label: 'Feature 6', key: 'feature6' },
            { label: 'CTA Button', key: 'cta' },
          ])}

          {renderSection('Products Page - General', 'products', [
            { label: 'Page Title', key: 'title' },
            { label: 'Page Subtitle', key: 'pageSubtitle' },
            { label: 'Drives Not Included Note', key: 'note', multiline: true },
            { label: 'Feature Comparison Title', key: 'featureComparison' },
            { label: 'Feature Label', key: 'feature' },
            { label: 'Price Label', key: 'price' },
          ])}

          {/* Benefits Section */}
          {renderSection('Benefits', 'benefits', [
            { label: 'Section Title', key: 'title' },
            { label: 'Ransomware Protection - Title', key: 'ransomware' },
            { label: 'Ransomware Protection - Description', key: 'ransomwareDesc', multiline: true },
            { label: 'Privacy - Title', key: 'privacy' },
            { label: 'Privacy - Description', key: 'privacyDesc', multiline: true },
            { label: 'Automated - Title', key: 'automated' },
            { label: 'Automated - Description', key: 'automatedDesc', multiline: true },
            { label: 'Longevity - Title', key: 'longevity' },
            { label: 'Longevity - Description', key: 'longevityDesc', multiline: true },
            { label: 'Flexible - Title', key: 'flexible' },
            { label: 'Flexible - Description', key: 'flexibleDesc', multiline: true },
            { label: 'Simple - Title', key: 'simple' },
            { label: 'Simple - Description', key: 'simpleDesc', multiline: true },
          ])}

          {/* How It Works Section */}
          {renderSection('How It Works (Home Page)', 'howItWorks', [
            { label: 'Section Title', key: 'title' },
            { label: 'Step 1 - Title', key: 'step1' },
            { label: 'Step 1 - Description', key: 'step1Desc', multiline: true },
            { label: 'Step 2 - Title', key: 'step2' },
            { label: 'Step 2 - Description', key: 'step2Desc', multiline: true },
            { label: 'Step 3 - Title', key: 'step3' },
            { label: 'Step 3 - Description', key: 'step3Desc', multiline: true },
          ])}

          {/* How It Works Extended Section */}
          {renderSection('How It Works Page - Extended', 'howItWorksExtended', [
            { label: 'Page Subtitle', key: 'subtitle', multiline: true },
            { label: 'What Makes Unique - Title', key: 'whatMakesUnique' },
            { label: 'Physical Disconnection - Title', key: 'physicalDisconnection' },
            { label: 'Physical Disconnection - Description', key: 'physicalDesc', multiline: true },
            { label: 'Smart Scheduling - Title', key: 'smartScheduling' },
            { label: 'Smart Scheduling - Description', key: 'schedulingDesc', multiline: true },
            { label: 'Zero Touch - Title', key: 'zeroTouch' },
            { label: 'Zero Touch - Description', key: 'zeroTouchDesc', multiline: true },
            { label: 'Works With Any Drive - Title', key: 'worksWithAny' },
            { label: 'Works With Any Drive - Description', key: 'worksWithAnyDesc', multiline: true },
            { label: 'Technical Specs - Title', key: 'technicalSpecs' },
            { label: 'Hardware - Title', key: 'hardware' },
            { label: 'Hardware Spec 1', key: 'hwSpec1' },
            { label: 'Hardware Spec 2', key: 'hwSpec2' },
            { label: 'Hardware Spec 3', key: 'hwSpec3' },
            { label: 'Hardware Spec 4', key: 'hwSpec4' },
            { label: 'Hardware Spec 5', key: 'hwSpec5' },
            { label: 'Software - Title', key: 'software' },
            { label: 'Software Spec 1', key: 'swSpec1' },
            { label: 'Software Spec 2', key: 'swSpec2' },
            { label: 'Software Spec 3', key: 'swSpec3' },
            { label: 'Software Spec 4', key: 'swSpec4' },
            { label: 'Software Spec 5', key: 'swSpec5' },
          ])}

          {/* About Page Section */}
          {renderSection('About Page', 'about', [
            { label: 'Page Title', key: 'title' },
            { label: 'Page Subtitle', key: 'subtitle', multiline: true },
            { label: 'Our Story - Title', key: 'ourStory' },
            { label: 'Story Paragraph 1', key: 'storyPara1', multiline: true },
            { label: 'Story Paragraph 2', key: 'storyPara2', multiline: true },
            { label: 'Our Mission - Title', key: 'ourMission' },
            { label: 'Mission Description', key: 'missionDesc', multiline: true },
            { label: 'Our Vision - Title', key: 'ourVision' },
            { label: 'Vision Description', key: 'visionDesc', multiline: true },
            { label: 'Our Values - Title', key: 'ourValues' },
            { label: 'Values Description', key: 'valuesDesc', multiline: true },
            { label: 'Why Physical - Title', key: 'whyPhysical' },
            { label: 'Ransomware Title', key: 'ransomwareTitle' },
            { label: 'Ransomware Description', key: 'ransomwareDesc', multiline: true },
            { label: 'Privacy Title', key: 'privacyTitle' },
            { label: 'Privacy Description', key: 'privacyDesc', multiline: true },
            { label: 'Longevity Title', key: 'longevityTitle' },
            { label: 'Longevity Description', key: 'longevityDesc', multiline: true },
            { label: 'Zero Maintenance Title', key: 'zeroMaintenanceTitle' },
            { label: 'Zero Maintenance Description', key: 'zeroMaintenanceDesc', multiline: true },
            { label: 'Get In Touch - Title', key: 'getInTouch' },
            { label: 'Get In Touch - Description', key: 'getInTouchDesc', multiline: true },
            { label: 'Contact Button Text', key: 'contactButton' },
          ])}

          {/* Download Page Section */}
          {renderSection('Download Page', 'download', [
            { label: 'Page Title', key: 'title' },
            { label: 'Page Subtitle', key: 'subtitle', multiline: true },
            { label: 'Software Title', key: 'software' },
            { label: 'Version', key: 'version' },
            { label: 'Windows Text', key: 'windows' },
            { label: 'Download Software Button', key: 'downloadSoftware' },
            { label: 'User Manual Title', key: 'userManual' },
            { label: 'Instructions PDF', key: 'instructionsPdf' },
            { label: 'Complete Guide Text', key: 'completeGuide' },
            { label: 'Download Manual Button', key: 'downloadManual' },
            { label: 'System Requirements Title', key: 'systemRequirements' },
            { label: 'Requirement 1', key: 'req1' },
            { label: 'Requirement 2', key: 'req2' },
            { label: 'Requirement 3', key: 'req3' },
            { label: 'Requirement 4', key: 'req4' },
            { label: 'Installation Steps Title', key: 'installationSteps' },
            { label: 'Step 1', key: 'step1' },
            { label: 'Step 2', key: 'step2' },
            { label: 'Step 3', key: 'step3' },
            { label: 'Step 4', key: 'step4' },
            { label: 'Changelog Title', key: 'changelog' },
            { label: 'Version Date', key: 'versionDate' },
            { label: 'Change 1', key: 'change1' },
            { label: 'Change 2', key: 'change2' },
            { label: 'Change 3', key: 'change3' },
            { label: 'Change 4', key: 'change4' },
            { label: 'Change 5', key: 'change5' },
            { label: 'Need Help Text', key: 'needHelp', multiline: true },
            { label: 'Contact Support Button', key: 'contactSupport' },
          ])}

          {/* Contact Page Section */}
          {renderSection('Contact Page', 'contact', [
            { label: 'Page Title', key: 'title' },
            { label: 'Page Subtitle', key: 'subtitle', multiline: true },
            { label: 'Name Label', key: 'name' },
            { label: 'Name Placeholder', key: 'namePlaceholder' },
            { label: 'Email Label', key: 'email' },
            { label: 'Email Placeholder', key: 'emailPlaceholder' },
            { label: 'Phone Label', key: 'phone' },
            { label: 'Phone Placeholder', key: 'phonePlaceholder' },
            { label: 'Message Label', key: 'message' },
            { label: 'Message Placeholder', key: 'messagePlaceholder', multiline: true },
            { label: 'Send Button', key: 'send' },
            { label: 'Sending Text', key: 'sending' },
            { label: 'Success Title', key: 'success' },
            { label: 'Success Message', key: 'successMessage', multiline: true },
            { label: 'Send Another Button', key: 'sendAnother' },
          ])}

          {/* Footer Section */}
          {renderSection('Footer', 'footer', [
            { label: 'Tagline', key: 'tagline', multiline: true },
            { label: 'Products Section Title', key: 'products' },
            { label: 'Basic Product Link', key: 'basicProduct' },
            { label: 'Pro Product Link', key: 'proProduct' },
            { label: 'Support Section Title', key: 'support' },
            { label: 'Download Link', key: 'download' },
            { label: 'Contact Link', key: 'contact' },
            { label: 'Copyright Text', key: 'rights' },
          ])}
        </div>

        {/* Image Upload Section */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <ImageIcon className="text-primary" size={24} />
            Image Management
          </h3>
          <p className="text-gray-600 mb-4">
            Upload images for your website. Supported formats: JPG, PNG, WebP (max 5MB)
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Logo Upload */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-primary transition-colors">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => e.target.files?.[0] && handleImageUpload('logo', e.target.files[0])}
                className="hidden"
                id="logo-upload"
              />
              <label htmlFor="logo-upload" className="cursor-pointer">
                {images['logo'] ? (
                  <div className="space-y-2">
                    <img src={images['logo']} alt="Logo preview" className="w-32 h-32 object-contain mx-auto rounded" />
                    <p className="text-sm font-medium text-green-600">✓ Logo uploaded</p>
                    <p className="text-xs text-gray-500">Click to change</p>
                  </div>
                ) : (
                  <div>
                    <Upload className="mx-auto mb-2 text-gray-400" size={32} />
                    <p className="text-sm font-medium text-gray-700">Logo Image</p>
                    <p className="text-xs text-gray-500 mt-1">Click to upload</p>
                  </div>
                )}
              </label>
            </div>

            {/* Hero Upload */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-primary transition-colors">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => e.target.files?.[0] && handleImageUpload('hero', e.target.files[0])}
                className="hidden"
                id="hero-upload"
              />
              <label htmlFor="hero-upload" className="cursor-pointer">
                {images['hero'] ? (
                  <div className="space-y-2">
                    <img src={images['hero']} alt="Hero preview" className="w-full h-32 object-cover mx-auto rounded" />
                    <p className="text-sm font-medium text-green-600">✓ Hero image uploaded</p>
                    <p className="text-xs text-gray-500">Click to change</p>
                  </div>
                ) : (
                  <div>
                    <Upload className="mx-auto mb-2 text-gray-400" size={32} />
                    <p className="text-sm font-medium text-gray-700">Hero Image</p>
                    <p className="text-xs text-gray-500 mt-1">Click to upload</p>
                  </div>
                )}
              </label>
            </div>

            {/* Favicon Upload */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-primary transition-colors">
              <input
                type="file"
                accept="image/*,.ico"
                onChange={(e) => e.target.files?.[0] && handleImageUpload('favicon', e.target.files[0])}
                className="hidden"
                id="favicon-upload"
              />
              <label htmlFor="favicon-upload" className="cursor-pointer">
                {images['favicon'] ? (
                  <div className="space-y-2">
                    <img src={images['favicon']} alt="Favicon preview" className="w-16 h-16 object-contain mx-auto rounded" />
                    <p className="text-sm font-medium text-green-600">✓ Favicon uploaded</p>
                    <p className="text-xs text-gray-500">Click to change</p>
                  </div>
                ) : (
                  <div>
                    <Upload className="mx-auto mb-2 text-gray-400" size={32} />
                    <p className="text-sm font-medium text-gray-700">Favicon (Icon)</p>
                    <p className="text-xs text-gray-500 mt-1">ICO, PNG, or JPG</p>
                  </div>
                )}
              </label>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-blue-900 mb-2">📝 How to Use</h3>
          <ol className="list-decimal list-inside space-y-2 text-blue-800">
            <li>Switch between languages using the buttons at the top</li>
            <li>Edit any text field - changes are saved per language</li>
            <li>Click "Save" to save your changes temporarily</li>
            <li>Upload images in the Image Management section</li>
            <li>Click "Export to Project" to write changes back to your project files</li>
            <li>After exporting, commit and push to GitHub to deploy</li>
          </ol>
        </div>
      </main>
    </div>
  );
}
