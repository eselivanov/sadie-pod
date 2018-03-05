import { Pipe, PipeTransform } from '@angular/core';
import { SelectItem } from 'primeng/primeng';

interface KeyValue {
  key: string,
  value: string
}

@Pipe({
  name: 'selectItemPipe'
})
export class SelectItemPipePipe implements PipeTransform {

  transform(value: KeyValue[]): SelectItem[] {
    if (!value) return undefined;
    return value.map(p => ({ label: p.value, value: p.key }));
  }

}
