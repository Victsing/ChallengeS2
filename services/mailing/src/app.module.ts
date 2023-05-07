import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

@Module({
  imports: [
    MailerModule.forRoot({
      // TODO: replace with real smtp server
      // transport: 'smtps://user@domain.com:pass@smtp.domain.com',
      transport: {
        host: 'mailcatcher',
        port: 1025,
        ignoreTLS: true,
        secure: false
        // auth: {
        //   user: 'test',
        //   pass: 'test'
        // }
      },
      defaults: {
        from: '"nest-modules" <modules@nestjs.com>'
      },

      template: {
        dir: process.cwd() + '/mails/',
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true
        }
      }
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
