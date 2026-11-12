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

export const downloadFolder = path.join(__dirname, '..', 'download');

export const jpegFile = path.join(__dirname, 'files', 'Jpeg_with_exif.jpeg');

export const docFile = path.join(__dirname, 'files', 'doc.txt');

export const screenshotFolder = path.join(__dirname, '..', 'screenshots');
