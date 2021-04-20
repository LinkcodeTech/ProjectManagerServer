import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { report } from 'process';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { Report, ReportDocument } from './entities/report.entity';

@Injectable()
export class ReportService {

  constructor(@InjectModel(Report.name) private reportModel: Model<ReportDocument>) {

  }

  create(createReportDto: CreateReportDto) {
    const createdReport = new this.reportModel(createReportDto);
    return createdReport.save();
  }

  findAll() {
    return this.reportModel.find().populate('userId').populate('projectId');
  }


  async findAllReportsByUserId(userId: string): Promise<Report[]> {
    return await (await this.reportModel.find().populate('userId projectId')).filter((o) => {
      if (o.developers.includes(userId)) {
        return o;
      }
    });
  }

  findOne(id: string) {
    return this.reportModel.find({_id : id}).populate('userId').populate('projectId');
  }

  update(id: number, updateReportDto: UpdateReportDto) {
    return `This action updates a #${id} report`;
  }

  remove(id: string) {
    return this.reportModel.remove({_id : id});
  }
}
