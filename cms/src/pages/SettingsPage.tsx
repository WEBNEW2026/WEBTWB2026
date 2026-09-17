import React, { useEffect, useState } from 'react';
import { Save, Download, Upload, RefreshCw } from 'lucide-react';
import { dataService } from '../services/dataService';
import { CMSSettings } from '../types';

const SettingsPage: React.FC = () => {
    const [settings, setSettings] = useState<CMSSettings | null>(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        loadSettings();
    }, []);

    const loadSettings = async () => {
        try {
            const data = await dataService.getSettings();
            setSettings(data);
        } catch (error) {
            console.error('Failed to load settings:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async () => {
        if (!settings) return;

        setSaving(true);
        try {
            await dataService.updateSettings(settings);
            alert('Settings saved successfully!');
        } catch (error) {
            console.error('Failed to save settings:', error);
            alert('Failed to save settings');
        } finally {
            setSaving(false);
        }
    };

    const handleExport = async () => {
        try {
            await dataService.exportToMainWebsite();
            alert('Data exported successfully! Check your downloads folder.');
        } catch (error) {
            console.error('Failed to export data:', error);
            alert('Failed to export data');
        }
    };

    const handleImport = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        try {
            await dataService.importFromFile(file);
            alert('Data imported successfully!');
            window.location.reload();
        } catch (error) {
            console.error('Failed to import data:', error);
            alert('Failed to import data');
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-96">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
            </div>
        );
    }

    if (!settings) return null;

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
                    <p className="text-gray-600 mt-2">Manage website settings and configurations</p>
                </div>
                <button
                    onClick={handleSave}
                    disabled={saving}
                    className="btn-primary flex items-center gap-2"
                >
                    <Save size={20} />
                    {saving ? 'Saving...' : 'Save Changes'}
                </button>
            </div>

            {/* General Settings */}
            <div className="card">
                <h2 className="text-xl font-bold text-gray-900 mb-4">General Information</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Site Name
                        </label>
                        <input
                            type="text"
                            value={settings.siteName}
                            onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                            className="input-field"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Site Description
                        </label>
                        <textarea
                            value={settings.siteDescription}
                            onChange={(e) => setSettings({ ...settings, siteDescription: e.target.value })}
                            className="input-field"
                            rows={3}
                        />
                    </div>
                </div>
            </div>

            {/* Contact Settings */}
            <div className="card">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Contact Email
                        </label>
                        <input
                            type="email"
                            value={settings.contactEmail}
                            onChange={(e) => setSettings({ ...settings, contactEmail: e.target.value })}
                            className="input-field"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Contact Phone
                        </label>
                        <input
                            type="tel"
                            value={settings.contactPhone}
                            onChange={(e) => setSettings({ ...settings, contactPhone: e.target.value })}
                            className="input-field"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            WhatsApp Number
                        </label>
                        <input
                            type="tel"
                            value={settings.whatsappNumber}
                            onChange={(e) => setSettings({ ...settings, whatsappNumber: e.target.value })}
                            className="input-field"
                            placeholder="628123456789"
                        />
                    </div>
                </div>
            </div>

            {/* Social Media */}
            <div className="card">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Social Media</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Facebook URL
                        </label>
                        <input
                            type="url"
                            value={settings.socialMedia.facebook || ''}
                            onChange={(e) =>
                                setSettings({
                                    ...settings,
                                    socialMedia: { ...settings.socialMedia, facebook: e.target.value },
                                })
                            }
                            className="input-field"
                            placeholder="https://facebook.com/..."
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Instagram URL
                        </label>
                        <input
                            type="url"
                            value={settings.socialMedia.instagram || ''}
                            onChange={(e) =>
                                setSettings({
                                    ...settings,
                                    socialMedia: { ...settings.socialMedia, instagram: e.target.value },
                                })
                            }
                            className="input-field"
                            placeholder="https://instagram.com/..."
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Twitter URL
                        </label>
                        <input
                            type="url"
                            value={settings.socialMedia.twitter || ''}
                            onChange={(e) =>
                                setSettings({
                                    ...settings,
                                    socialMedia: { ...settings.socialMedia, twitter: e.target.value },
                                })
                            }
                            className="input-field"
                            placeholder="https://twitter.com/..."
                        />
                    </div>
                </div>
            </div>

            {/* Booking Settings */}
            <div className="card">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Booking Configuration</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Max Advance Booking Days
                        </label>
                        <input
                            type="number"
                            value={settings.booking.maxAdvanceDays}
                            onChange={(e) =>
                                setSettings({
                                    ...settings,
                                    booking: { ...settings.booking, maxAdvanceDays: parseInt(e.target.value) },
                                })
                            }
                            className="input-field"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Minimum Stay Nights
                        </label>
                        <input
                            type="number"
                            value={settings.booking.minStayNights}
                            onChange={(e) =>
                                setSettings({
                                    ...settings,
                                    booking: { ...settings.booking, minStayNights: parseInt(e.target.value) },
                                })
                            }
                            className="input-field"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Check-in Time
                        </label>
                        <input
                            type="time"
                            value={settings.booking.checkInTime}
                            onChange={(e) =>
                                setSettings({
                                    ...settings,
                                    booking: { ...settings.booking, checkInTime: e.target.value },
                                })
                            }
                            className="input-field"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Check-out Time
                        </label>
                        <input
                            type="time"
                            value={settings.booking.checkOutTime}
                            onChange={(e) =>
                                setSettings({
                                    ...settings,
                                    booking: { ...settings.booking, checkOutTime: e.target.value },
                                })
                            }
                            className="input-field"
                        />
                    </div>
                </div>
            </div>

            {/* Data Management */}
            <div className="card">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Data Management</h2>
                <p className="text-gray-600 mb-4">
                    Export or import all CMS data for backup or migration purposes
                </p>
                <div className="flex flex-wrap gap-4">
                    <button
                        onClick={handleExport}
                        className="btn-primary flex items-center gap-2"
                    >
                        <Download size={20} />
                        Export All Data
                    </button>
                    <label className="btn-secondary flex items-center gap-2 cursor-pointer">
                        <Upload size={20} />
                        Import Data
                        <input
                            type="file"
                            accept=".json"
                            onChange={handleImport}
                            className="hidden"
                        />
                    </label>
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;
