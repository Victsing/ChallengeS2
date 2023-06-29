import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JobAds } from './job-ads.entity';
import { Repository } from 'typeorm';
import { SuccessResponse } from 'src/global';
import { RpcException } from '@nestjs/microservices';
import { CreateJobAdsRequest } from './job-ads.dto';
import { User } from 'src/users/users.entity';

@Injectable()
export class JobAdsService {
  public constructor(
    @InjectRepository(JobAds)
    private readonly jobAdsRepository: Repository<JobAds>
  ) {}

  public async getJobAds(): Promise<SuccessResponse> {
    let res: JobAds[];
    try {
      res = await this.jobAdsRepository.find({
        order: {
          id: 'ASC'
        },
        relations: {
          candidates: true
        }
      });
    } catch (error) {
      throw new RpcException({
        statusCode: 500,
        message: error.message
      });
    }
    return {
      success: true,
      data: res
    };
  }

  public async getJobAdsById(id: string): Promise<SuccessResponse> {
    let res: JobAds;
    try {
      res = await this.jobAdsRepository.findOneBy({
        id: parseInt(id)
      });
      if (!res) {
        throw new RpcException({
          statusCode: 404,
          message: 'Job ad not found'
        });
      }
    } catch (error) {
      throw new RpcException({
        statusCode: 500,
        message: error.message
      });
    }
    return {
      success: true,
      data: res
    };
  }

  public async createJobAds(
    data: CreateJobAdsRequest,
    user: User
  ): Promise<SuccessResponse> {
    let res: JobAds;
    try {
      const newJobAds = new JobAds();
      newJobAds.title = data.title;
      newJobAds.description = data.description;
      newJobAds.city = data.city;
      newJobAds.country = data.country;
      newJobAds.contractType = data.contractType;
      newJobAds.salary = data.salary;
      newJobAds.company = user.company;
      newJobAds.created_at = new Date();
      newJobAds.updated_at = new Date();
      res = await this.jobAdsRepository.save(newJobAds);
    } catch (error) {
      throw new RpcException({
        statusCode: 500,
        message: error.message
      });
    }
    return {
      success: true,
      data: res
    };
  }

  public async updateJobAds(
    data: CreateJobAdsRequest,
    id: string,
    user: User
  ): Promise<SuccessResponse> {
    let res: JobAds;
    try {
      const jobAdsToUpdate = await this.jobAdsRepository.findOneBy({
        id: parseInt(id)
      });
      if (!jobAdsToUpdate) {
        throw new RpcException({
          statusCode: 404,
          message: 'Job ad not found'
        });
      }
      if (jobAdsToUpdate.company.id !== user.company.id) {
        throw new RpcException({
          statusCode: 403,
          message: 'Forbidden'
        });
      }
      jobAdsToUpdate.title = data.title || jobAdsToUpdate.title;
      jobAdsToUpdate.description =
        data.description || jobAdsToUpdate.description;
      jobAdsToUpdate.city = data.city || jobAdsToUpdate.city;
      jobAdsToUpdate.country = data.country || jobAdsToUpdate.country;
      jobAdsToUpdate.contractType =
        data.contractType || jobAdsToUpdate.contractType;
      jobAdsToUpdate.salary = data.salary || jobAdsToUpdate.salary;
      res = await this.jobAdsRepository.save(jobAdsToUpdate);
    } catch (error) {
      throw new RpcException({
        statusCode: 500,
        message: error.message
      });
    }
    return {
      success: true,
      data: res
    };
  }

  public async deleteJobAds(id: string, user: User): Promise<SuccessResponse> {
    let res: JobAds;
    try {
      res = await this.jobAdsRepository.findOneBy({
        id: parseInt(id)
      });
      if (!res) {
        throw new RpcException({
          statusCode: 404,
          message: 'Job ad not found'
        });
      }
      if (res.company.id !== user.company.id) {
        throw new RpcException({
          statusCode: 403,
          message: 'Forbidden'
        });
      }
      res = await this.jobAdsRepository.remove(res);
    } catch (error) {
      throw new RpcException({
        statusCode: 500,
        message: error.message
      });
    }
    return {
      success: true,
      data: res
    };
  }
}