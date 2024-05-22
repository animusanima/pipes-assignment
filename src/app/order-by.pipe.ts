import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'orderByName',
  pure: false
})
export class OrderByPipe implements PipeTransform {

  transform(value: {
    instanceType: string,
    name: string,
    status: string,
    started: Date
  }[], order: "asc" | "desc" = "asc"): { instanceType: string, name: string, status: string, started: Date }[] {

    if (value.length === 0) {
      return value;
    }

    return value.sort((a, b) => {
      if (order === "asc") {
        return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
      } else if (order === "desc") {
        return b.name.toLowerCase().localeCompare(a.name.toLowerCase());
      }
      return 0;
    });
  }

}
