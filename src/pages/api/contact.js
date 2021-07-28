import axios from 'axios';
import * as Yup from 'yup';

const handler = async (req, res) => {
  const Schema = Yup.object().shape({
    fullName: Yup.string().required(),
    email: Yup.string().email().required(),
    subject: Yup.string().required(),
    reason: Yup.string().required(),
    message: Yup.string().required(),
  });
  try {
    const data = await Schema.validate(req.body);

    await axios({
      url: `${process.env.FORMIUM_ENDPOINT}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    });
    res.status(200).json({ message: 'success!' });
  } catch (error) {
    res.status(400).json({ message: 'error!' });
  }
};

export default handler;
