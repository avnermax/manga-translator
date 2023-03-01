#! /usr/bin/env node

received = process.argv[2];

const translate = require('@saipulanuar/google-translate-api');

translate(received, {to: 'en'}).then(res => {
    console.log(res.text);
    console.log(res.from.language.iso);
}).catch(err => {
    console.error(err);
});
