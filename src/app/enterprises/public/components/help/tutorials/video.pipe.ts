import {Pipe,PipeTransform} from "@angular/core";
import { DomSanitizer } from '@angular/platform-browser';


@Pipe({name: 'youtubeSafeUrl'})
export class VideoPipe implements PipeTransform {

    constructor(private sanitizer:DomSanitizer) { }

    transform(idVideo : string) {
        return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+idVideo);
    }
}