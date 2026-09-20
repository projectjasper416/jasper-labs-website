// Public browser-side EmailJS identifiers reused from jasperlabs.in.
// These are not private API secrets. Environment overrides remain supported.
export const contactConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_z8aainp',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_2p8pjkk',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'r96bsVRG-qW5iQ24t',
  recipient: 'projectjasper416@gmail.com',
};
