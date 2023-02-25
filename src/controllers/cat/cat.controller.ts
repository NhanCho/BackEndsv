/* eslint-disable prettier/prettier */
import { ItemModel } from './../../interfaces/cat';
import { CatService } from './../../services/cat.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('cat')
export class CatController {
  constructor(private catService: CatService) {}

  @Get('all')
  getAll() {
    return this.catService.getAll();
  }

  @Post('create')
  async createItem(@Body() items:ItemModel) {
    return this.catService.createItem(items);
  }
}
