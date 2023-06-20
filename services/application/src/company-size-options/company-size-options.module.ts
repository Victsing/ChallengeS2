import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanySizeOptions } from './company-size-option.entity';
import { Company } from '../company/company.entity';
import { CompanySizeOptionsService } from './company-size-options.service';
import { CompanySizeOptionsController } from './company-size-options.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CompanySizeOptions, Company])],
  providers: [CompanySizeOptionsService],
  controllers: [CompanySizeOptionsController]
})
export class CompanySizeOptionsModule {}
