'use client';

import { FormEvent, useState } from 'react';
import { SafeParseReturnType, z } from 'zod';
import Dropdown, { DropdownOption } from './Dropdown';
import ValidationMessage from './ValidationMessage';
import './DropUsALineForm.scss';

const FormSchema = z.object({
  who: z.string().nonempty('Please select a value'),
  firstName: z.string().nonempty('Field must contain at least 1 character(s)'),
  lastName: z.string().nonempty('Field must contain at least 1 character(s)'),
  email: z.string().nonempty('Field must contain at least 1 character(s)').email(),
  subject: z.string().nonempty('Field must contain at least 1 character(s)'),
  message: z.string().nonempty('Field must contain at least 1 character(s)'),
});

type FormType = z.infer<typeof FormSchema>;

export default function DropUsALineForm() {
  const whoAreYouOptions: DropdownOption[] = [
    {
      value: 'Borrower',
      text: 'Borrower',
    },
    {
      value: 'Cosigner',
      text: 'Cosigner',
    },
    {
      value: 'Lender',
      text: 'Lender',
    },
    {
      value: 'University',
      text: 'University',
    },
    {
      value: 'Employer',
      text: 'Employer',
    },
    {
      value: 'Other',
      text: 'Other',
    },
  ];

  const [formValue, setFormValue] = useState<FormType>({
    who: whoAreYouOptions[0].value,
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [zodResult, setZodResult] = useState<SafeParseReturnType<FormType, FormType> | null>(null);

  function sendMessage() {
    const newZodResult = FormSchema.safeParse(formValue);
    setZodResult(newZodResult);

    if (newZodResult?.success) {
      alert(`Message sent: ${JSON.stringify(newZodResult.data)}`);
    }
  }

  function createInputHandler(field: keyof FormType) {
    return (event: FormEvent<HTMLInputElement> | FormEvent<HTMLTextAreaElement>) => {
      const clone = JSON.parse(JSON.stringify(formValue));
      // @ts-ignore
      clone[field] = event.target.value;
      setFormValue(clone);
    };
  }

  function handleOnSelectWho(value: string | null) {
    const clone = JSON.parse(JSON.stringify(formValue));
    clone.who = value;
    setFormValue(clone);
  }

  return (
    <div className="main__form">
      <h2>Drop us a line</h2>
      <p>Have a question or a suggestion? We&apos;d love to hear from you!</p>

      <label>Who are you?</label>
      <Dropdown
        selectedOption={formValue.who}
        onSelect={handleOnSelectWho}
        options={whoAreYouOptions}
      />
      <ValidationMessage zodResult={zodResult} field={'who'} />

      <div className="main__form__row">
        <div>
          <label>First Name</label>
          <input
            value={formValue.firstName}
            onInput={createInputHandler('firstName')}
            type="text"
            placeholder="Enter your first name"
          />
          <ValidationMessage zodResult={zodResult} field={'firstName'} />
        </div>

        <div>
          <label>Last Name</label>
          <input
            value={formValue.lastName}
            onInput={createInputHandler('lastName')}
            type="text"
            placeholder="Enter your last name"
          />
          <ValidationMessage zodResult={zodResult} field={'lastName'} />
        </div>
      </div>

      <label>Email</label>
      <input
        value={formValue.email}
        onInput={createInputHandler('email')}
        type="email"
        placeholder="Enter your email"
      />
      <ValidationMessage zodResult={zodResult} field={'email'} />

      <label>Subject</label>
      <input
        value={formValue.subject}
        onInput={createInputHandler('subject')}
        type="text"
        placeholder="Enter your subject"
      />
      <ValidationMessage zodResult={zodResult} field={'subject'} />

      <label>Message</label>
      <textarea
        value={formValue.message}
        onInput={createInputHandler('message')}
        className="main__form__message-field"
        placeholder="Start typing your message here..."
      ></textarea>
      <ValidationMessage zodResult={zodResult} field={'message'} />

      <p className="main__form__subtitle">
        By proceeding, I agree to Sparrow&apos;s <a href="#">Terms of Service</a> and{' '}
        <a href="#">Privacy Policy</a>
      </p>

      <button className="main__form__send" onClick={sendMessage}>
        Send Message
      </button>
    </div>
  );
}
