'use client';
import React, { useState } from 'react';
import { sendRest } from '@/services/api/rest';

export default function SendTest() {
  const [message, setMessage] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault();

    const data = {
      message,
    };
    const url = 'http://localhost:4000/';

    const res = await sendRest<{ message: string }>(url, data);

    console.log('res', res);

    if (res.status && res.data) {
      setResult(res.data.message);
    } else {
      setResult(res.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <textarea
        placeholder="メッセージ"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="app-form-input"
      />
      <button
        type="submit"
        className="app-btn-primary"
      >
        送信
      </button>
      {result && <p>{result}</p>}
    </form>
  );
}
