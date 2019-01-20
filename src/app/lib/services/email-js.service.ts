import { Injectable } from '@angular/core';
import * as email from 'emailjs';

@Injectable({
  providedIn: 'root'
})
export class EmailJSService {

  public sendEmailHtml() {
    const server 	= email.server.connect({
      user:	'username',
      password: 'password',
      host:	'smtp.your-email.com',
      ssl:		true
    });

    const message	= {
      text:	'i hope this works',
      from:	'you <username@your-email.com>',
      to:		'someone <someone@your-email.com>, another <another@your-email.com>',
      cc:		'else <else@your-email.com>',
      subject:	'testing emailjs',
      attachment:
      [
          {data: '<html>i <i>hope</i> this works!</html>', alternative: true},
          {path: 'path/to/file.zip', type:'application/zip', name :'renamed.zip'}
      ]
    };

    server.send(message, function(err, message) { console.log(err || message); });
  }
}
