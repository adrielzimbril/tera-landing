import fs from 'fs';
import https from 'https';

const images = [
  'fb6415fd-bf4d-4ccf-8e9d-7ab445e99207_1600w.jpg',
  '724142aa-44a6-48d3-9cf3-761e00d05b78_1600w.jpg',
  '005600e5-f6ab-4e59-bc86-eaeb02797dfa_1600w.jpg',
  '7f78131e-65e9-49b2-aa1f-ccc33e28df9f_1600w.webp'
];

const baseUrl = 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/';
const dir = './public/assets';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

images.forEach(img => {
  const file = fs.createWriteStream(`${dir}/${img}`);
  https.get(`${baseUrl}${img}`, function(response) {
    response.pipe(file);
    file.on('finish', function() {
      file.close();  // close() is async, call cb after close completes.
      console.log('Downloaded ' + img);
    });
  }).on('error', function(err) { // Handle errors
    fs.unlink(`${dir}/${img}`, () => {}); // Delete the file async. (But we don't check the result)
    console.error('Error downloading ' + img + ':', err.message);
  });
});
