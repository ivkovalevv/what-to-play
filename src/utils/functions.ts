export const generateRandomCode = (length = 6) => {
  const numberChars = "0123456789";

  let code = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * numberChars.length);
    code += numberChars[randomIndex];
  }

  return code;
};

export const validateEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};
