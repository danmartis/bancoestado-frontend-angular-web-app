import { Pipe, PipeTransform } from '@angular/core';
import { rutFormat } from 'src/app/shared/utils/utils';

@Pipe({
  name: 'rut'
})
export class RutPipe implements PipeTransform {
  public transform(value: string): string {
    return rutFormat(value);
  }
}
