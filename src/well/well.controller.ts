import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { WellDto } from './well.dto/well.dto';
import { WellService } from './well.service';

@Controller('well')
export class WellController {
    constructor(private readonly wellService: WellService) {}
    
    @Get()
    async GetAll(){
        return this.wellService.GetAll()
    }

    @Post()
    async Add(@Body() dto: WellDto){
        return this.wellService.Add(dto)
    }

    @Get(':id')
    async GetOneById(@Param('id') id: number){
        return this.wellService.GetOneById(id)
    }

    @Put(':id')
    async Update(@Param('id') id: number, @Body() dto: WellDto){
        return this.wellService.Update(id, dto)
    }

    @Delete(':id') 
    async Delete(@Param('id') id: number){
        return this.wellService.Delete(id)
    }
}
