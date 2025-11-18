/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

const stripe = Stripe(
  'pk_test_51SScNREJO7pRNLzP71dk4dj5Jt4KXOqzJFTZAh6CaqyyuD9hYeFyGxFdzRwPNY7YQ8uIzpSTlJcbIn2D9XjLAql800ILdPAovl',
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`,
    );
    console.log(session);

    // 2) Create ckeckout form + charge credit Card
    // await stripe.redirectToCheckout({
    //   sessionId: session.data.session.id,
    // });
    window.location.href = session.data.session.url; // ✅ redirecionamento direto;
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
