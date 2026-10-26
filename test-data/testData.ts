import path from 'path';

export const users = {
  valid: { username: 'tomsmith', password: 'SuperSecretPassword!' },
  invalid: { username: 'toms', password: 'SuperSecretPassword!' },
};

export const messages = {
  loginSuccess: 'You logged into a secure area!',
  invalidUsername: 'Your username is invalid!',
};

export const uploadFile = path.join(__dirname, 'files', 'bb.txt');
