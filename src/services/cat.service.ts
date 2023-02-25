/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import { ItemModel } from '../interfaces/cat';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
  items: ItemModel[] = [
    {
      id: '1',
      name: 'Garfield',
      age: '2',
    },
  ];

  getAll(): ItemModel[] {
    return this.items;
  }

  getItemById(id: string): ItemModel[] {
    return this.items.filter((item) =>{return item.id === id});
  }

  createItem(item: ItemModel) {
    this.items.push(item);
  }
  updateItemById(item: ItemModel): string{
    let temp = this.items.findIndex((x) => {return x.id === item.id});
    if (temp === -1) {
      return 'Item not found';
    }else{
      this.items[temp] = item;
      return 'Item updated';
    }
  }
}
