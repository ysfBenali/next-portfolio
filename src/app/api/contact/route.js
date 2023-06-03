import { NextResponse } from 'next/server';
import * as Yup from 'yup';

const Schema = Yup.object().shape({
  fullName: Yup.string().required(),
  email: Yup.string().email().required(),
  subject: Yup.string().required(),
  reason: Yup.string().required(),
  message: Yup.string().required(),
});

export async function POST(request) {
  try {
    const request_data = await request.json();

    const data = await Schema.validate(request_data);

    await fetch(`${process.env.FORMIUM_ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return new NextResponse('success!', {
      status: 200,
      body: 'success!',
    });
  } catch (error) {
    console.log('error', error);
    return new NextResponse('error!', {
      status: 400,
      body: 'error!',
    });
  }
}
