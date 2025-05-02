'use client';

import { useRef } from 'react';

export default function RegistrationForm() {
  const formRef = useRef(null);

  const regexValidators = {
    fullName: {
      regex: /^[A-Za-z\s'-]{2,}$/,      
      message: 'Full Name must be at least 2 letters and contain only letters, spaces, apostrophes or hyphens.',
    },
    firstName: {
      regex: /^[A-Za-z\s'-]{2,}$/,      
      message: 'First Name must be at least 2 letters and contain only letters, spaces, apostrophes or hyphens.',
    },
    lastName: {
      regex: /^[A-Za-z\s'-]{2,}$/,      
      message: 'Last Name must be at least 2 letters and contain only letters, spaces, apostrophes or hyphens.',
    },
    zip: {
      regex: /^\d{5}(?:-\d{4})?$/,      
      message: 'Postal/Zip Code must be 5 digits (or 5+4).',
    },
    mobile: {
      regex: /^\+?\d{10,15}$/,      
      message: 'Mobile Number must be 10–15 digits, optionally starting with +.',
    },
    home: {
      regex: /^\+?\d{10,15}$/,      
      message: 'Home Number must be 10–15 digits, optionally starting with +.',
    },
    ssn: {
      regex: /^\d{3}-\d{2}-\d{4}$/,      
      message: 'SSN must be in the format 123-45-6789.',
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const data = {
      fullName: formData.get('fullName')?.toString().trim(),
      firstName: formData.get('firstName')?.toString().trim(),
      lastName: formData.get('lastName')?.toString().trim(),
      birthDate: formData.get('birthDate')?.toString(),
      gender: formData.get('gender')?.toString(),
      address1: formData.get('address1')?.toString().trim(),
      address2: formData.get('address2')?.toString().trim(),
      city: formData.get('city')?.toString().trim(),
      state: formData.get('state')?.toString().trim(),
      zip: formData.get('zip')?.toString().trim(),
      mobile: formData.get('mobile')?.toString().trim(),
      home: formData.get('home')?.toString().trim(),
      ssn: formData.get('ssn')?.toString().trim(),
      signature: formData.get('signature')?.toString().trim(),
      idFront: formData.get('idFront') instanceof File ? formData.get('idFront').name : '',
      idBack: formData.get('idBack') instanceof File ? formData.get('idBack').name : '',
    };

    const required = [
      'fullName','firstName','lastName','birthDate','gender',
      'address1','city','state','zip','mobile','ssn','signature','idFront','idBack'
    ];
    const missing = required.filter((key) => !data[key]);

    const invalid = Object.entries(regexValidators)
      .filter(([field, { regex }]) => data[field] && !regex.test(data[field]))
      .map(([field, { message }]) => `${field}: ${message}`);

    if (missing.length || invalid.length) {
      let msg = '';
      if (missing.length) msg += `Please complete required: ${missing.join(', ')}.\n`;
      if (invalid.length) msg += `Please fix errors:\n- ${invalid.join('\n- ')}`;
      alert(msg);
      return;
    }

    console.log('Registration Data:', data);
    alert('Form submitted! Check console.');
    form.reset();
  };

  const handleClear = () => {
    formRef.current?.reset();
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow space-y-6"
    >
      <h2 className="text-2xl font-bold text-center">Registration Form</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium mb-1">Full Name</label>
          <input id="fullName" name="fullName" type="text" placeholder="Full Name" className="w-full border border-gray-300 p-2 rounded" />
        </div>
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium mb-1">First Name</label>
          <input id="firstName" name="firstName" type="text" placeholder="First Name" className="w-full border border-gray-300 p-2 rounded" />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium mb-1">Last Name</label>
          <input id="lastName" name="lastName" type="text" placeholder="Last Name" className="w-full border border-gray-300 p-2 rounded" />
        </div>
        <div>
          <label htmlFor="birthDate" className="block text-sm font-medium mb-1">Birth Date</label>
          <input id="birthDate" name="birthDate" type="date" className="w-full border border-gray-300 p-2 rounded" />
        </div>
      </div>

      <div>
        <label htmlFor="gender" className="block text-sm font-medium mb-1">Gender</label>
        <select id="gender" name="gender" className="w-full border border-gray-300 p-2 rounded">
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="address1" className="block text-sm font-medium mb-1">Street Address</label>
          <input id="address1" name="address1" type="text" placeholder="Street Address" className="w-full border border-gray-300 p-2 rounded" />
        </div>
        <div>
          <label htmlFor="address2" className="block text-sm font-medium mb-1">Address Line 2</label>
          <input id="address2" name="address2" type="text" placeholder="Address Line 2" className="w-full border border-gray-300 p-2 rounded" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="city" className="block text-sm font-medium mb-1">City</label>
          <input id="city" name="city" type="text" placeholder="City" className="w-full border border-gray-300 p-2 rounded" />
        </div>
        <div>
          <label htmlFor="state" className="block text-sm font-medium mb-1">State/Province</label>
          <input id="state" name="state" type="text" placeholder="State/Province" className="w-full border border-gray-300 p-2 rounded" />
        </div>
        <div>
          <label htmlFor="zip" className="block text-sm font-medium mb-1">Postal/Zip Code</label>
          <input id="zip" name="zip" type="text" placeholder="Postal/Zip Code" className="w-full border border-gray-300 p-2 rounded" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="mobile" className="block text-sm font-medium mb-1">Mobile Number</label>
          <input id="mobile" name="mobile" type="tel" placeholder="Mobile Number" className="w-full border border-gray-300 p-2 rounded" />
        </div>
        <div>
          <label htmlFor="home" className="block text-sm font-medium mb-1">Home Number</label>
          <input id="home" name="home" type="tel" placeholder="Home Number" className="w-full border border-gray-300 p-2 rounded" />
        </div>
      </div>

      <div>
        <label htmlFor="ssn" className="block text-sm font-medium mb-1">SSN (123-45-6789)</label>
        <input id="ssn" name="ssn" type="text" placeholder="SSN (123-45-6789)" className="w-full border border-gray-300 p-2 rounded" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="idFront" className="block text-sm font-medium mb-1">ID Upload (Front)</label>
          <input id="idFront" name="idFront" type="file" accept="image/*,.pdf" className="w-full" />
        </div>
        <div>
          <label htmlFor="idBack" className="block text-sm font-medium mb-1">ID Upload (Back)</label>
          <input id="idBack" name="idBack" type="file" accept="image/*,.pdf" className="w-full" />
        </div>
      </div>

      <div>
        <label htmlFor="signature" className="block text-sm font-medium mb-1">Signature</label>
        <textarea id="signature" name="signature" rows={3} placeholder="Type your full name" className="w-full border border-gray-300 p-2 rounded" />
      </div>

      <div className="flex justify-between pt-4">
        <button type="button" onClick={handleClear} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Clear
        </button>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Submit
        </button>
      </div>
    </form>
  );
}
