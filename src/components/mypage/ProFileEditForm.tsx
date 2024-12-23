import React, { useState } from 'react';

interface ProfileEditFormProps {
  initialValues: {
    name: string;
    nickname: string;
    email: string;
    phone: string;
    organization: string;
  };
  onSubmit: (values: any) => void;
}

const ProfileEditForm: React.FC<ProfileEditFormProps> = ({ initialValues, onSubmit }) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {Object.keys(initialValues).map((key) => (
        <div key={key}>
          <label htmlFor={key} className="block text-sm font-medium text-gray-700">
            {key}
          </label>
          <input
            type="text"
            id={key}
            name={key}
            value={(values as any)[key]}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
          />
        </div>
      ))}
      <div className="flex justify-end gap-2">
        <button type="button" className="text-red-500">취소하기</button>
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded-md">정보 수정</button>
      </div>
    </form>
  );
};

export default ProfileEditForm;
