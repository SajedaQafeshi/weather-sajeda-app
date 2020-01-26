import { PipeTransform, Pipe } from '@angular/core';


@Pipe({
    name :'searchFilter'
})
export class SearchFilterPipe implements PipeTransform{
    transform(array: string[], searchName:string): string[]{
        if(!array || !searchName){
            return array;
        }

        return array.filter(item => 
            item.toString().toLowerCase().includes(searchName.toString().toLowerCase()));
    }
}
