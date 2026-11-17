// Ways to start an email. A bare mailto: link does nothing on machines without a
// default desktop mail app (common on Windows), so web-mail options come first.
export function emailLinks(email: string, subject: string) {
  const to = encodeURIComponent(email);
  const su = encodeURIComponent(subject);
  return {
    gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${su}`,
    outlook: `https://outlook.live.com/mail/0/deeplink/compose?to=${to}&subject=${su}`,
    mailto: `mailto:${email}?subject=${su}`,
  };
}
