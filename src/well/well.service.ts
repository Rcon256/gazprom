import { Injectable, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WellDto } from './well.dto/well.dto';
import { WellEntity } from './well.entity';

@Injectable()
export class WellService {

    constructor(@InjectRepository(WellEntity) private readonly wellRepository: Repository<WellEntity>){}

    async GetAll(){
        return this.wellRepository.find()
    }

    async Add(dto: WellDto){
        const well = this.wellRepository.create(dto)
        return this.wellRepository.save(well)
    }

    async GetOneById(id: number){
        return this.wellRepository.findOne({
            where:{
                Id: Number(id),
            }
        })
    }

    async Update(id: number, dto: WellDto){
        const well = await this.GetOneById(id)
        well.Name = dto.Name
        return this.wellRepository.save(well)
    }

    async Delete(id: number){
        return this.wellRepository.delete({Id: Number(id)})
    }
}
