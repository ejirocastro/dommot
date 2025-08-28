'use client';

import React from 'react';
import { Edit, Plus, CheckCircle, AlertCircle } from 'lucide-react';

interface InfoFieldProps {
  label: string;
  value?: string;
  placeholder?: string;
  verified?: boolean;
  required?: boolean;
  actionType?: 'edit' | 'add';
  onAction?: () => void;
}

const InfoField: React.FC<InfoFieldProps> = ({
  label,
  value,
  placeholder,
  verified = false,
  required = false,
  actionType = 'edit',
  onAction
}) => {
  const hasValue = value && value.trim() !== '';
  const Icon = actionType === 'add' ? Plus : Edit;

  return (
    <div className="border-b border-gray-100 pb-6 mb-6 last:border-b-0 last:mb-0 last:pb-0">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="text-sm font-medium text-gray-900">{label}</h3>
            {required && <span className="text-red-500 text-xs">*</span>}
            {verified && (
              <div className="flex items-center space-x-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-xs text-green-600 font-medium">Verified</span>
              </div>
            )}
          </div>
          
          {hasValue ? (
            <p className="text-gray-700 font-medium">{value}</p>
          ) : (
            <p className="text-gray-400 italic">{placeholder || 'Not provided'}</p>
          )}
          
          {!verified && hasValue && label === 'Identity verification' && (
            <div className="flex items-center space-x-1 mt-1">
              <AlertCircle className="w-4 h-4 text-amber-500" />
              <span className="text-xs text-amber-600">Verification pending</span>
            </div>
          )}
        </div>
        
        <button
          onClick={onAction}
          className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-sky-700 hover:text-sky-800 hover:bg-sky-50 rounded-lg transition-colors duration-200 border border-sky-200 hover:border-sky-300"
        >
          <Icon className="w-4 h-4" />
          <span>{actionType === 'add' ? 'Add' : 'Edit'}</span>
        </button>
      </div>
    </div>
  );
};

export const PersonalInformation: React.FC = () => {
  const handleEdit = (field: string) => {
    console.log(`Edit ${field}`);
  };

  const handleAdd = (field: string) => {
    console.log(`Add ${field}`);
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Personal information</h2>
        <p className="text-gray-600">
          Update your information and learn how it's used.
        </p>
      </div>

      <div className="space-y-6">
        <InfoField
          label="Legal name"
          value="John Anderson Smith"
          required
          onAction={() => handleEdit('legal-name')}
        />

        <InfoField
          label="Preferred first name"
          value="John"
          onAction={() => handleEdit('preferred-name')}
        />

        <InfoField
          label="Email"
          value="john.smith@example.com"
          verified
          required
          onAction={() => handleEdit('email')}
        />

        <InfoField
          label="Phone number"
          value="+1 (555) 123-4567"
          verified
          onAction={() => handleEdit('phone')}
        />

        <InfoField
          label="Identity verification"
          value="Government ID uploaded"
          onAction={() => handleEdit('identity')}
        />

        <InfoField
          label="Residential address"
          value="123 Main Street, San Francisco, CA 94102, United States"
          onAction={() => handleEdit('residential-address')}
        />

        <InfoField
          label="Mailing address"
          placeholder="Add your mailing address"
          actionType="add"
          onAction={() => handleAdd('mailing-address')}
        />

        <InfoField
          label="Emergency contact"
          placeholder="Add an emergency contact"
          actionType="add"
          onAction={() => handleAdd('emergency-contact')}
        />
      </div>

      <div className="mt-8 pt-6 border-t border-gray-100">
        <div className="bg-sky-50 border border-sky-200 rounded-xl p-4">
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 text-sky-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="text-sm font-medium text-sky-900 mb-1">
                Keep your information up to date
              </h4>
              <p className="text-sm text-sky-700">
                Having accurate information helps us provide better service and ensures smooth bookings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};