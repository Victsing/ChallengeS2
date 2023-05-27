import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AppointmentModule } from './appointment/appointment.module';
import { CompanyModule } from './company/company.module';
import { CompanyRevenueOptionsModule } from './company-revenue-options/company-revenue-options.module';
import { CompanySectorOptionsModule } from './company-sector-options/company-sector-options.module';
import { CompanySizeOptionsModule } from './company-size-options/company-size-options.module';
import { JobAdsModule } from './job-ads/job-ads.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgresdb',
      port: 5432,
      username: process.env.DATABASE_POSTGRES_USER,
      password: process.env.DATABASE_POSTGRES_PASSWORD,
      database: process.env.DATABASE_POSTGRES_NAME,
      synchronize: true, // TODO: Remove this in production
      autoLoadEntities: true
    }),
    UsersModule,
    AppointmentModule,
    CompanyModule,
    CompanyRevenueOptionsModule,
    CompanySectorOptionsModule,
    CompanySizeOptionsModule,
    JobAdsModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
