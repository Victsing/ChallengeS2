import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Appointment } from './appointment.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SERVICE_NAME } from '../global';
import { UsersController } from '../users/users.controller';
import { UsersService } from '../users/users.service';
import { AppointmentService } from './appointment.service';
import { AppointmentController } from './appointment.controller';
import { User } from '../users/users.entity';
import { JobAds } from '../job-ads/job-ads.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Appointment, User, JobAds]),
    ClientsModule.register([
      {
        name: SERVICE_NAME.MAILING,
        transport: Transport.TCP,
        options: {
          host: process.env.APPOINTMENT_HOST,
          port: parseInt(process.env.MAILING_SERVICE_PORT) ?? 3024
        }
      }
    ])
  ],
  controllers: [AppointmentController],
  providers: [AppointmentService]
})
export class AppointmentModule {}
