import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { environment } from "src/environments/environment.dev";
import { User } from "src/app/enterprises/public/components/login/services/model/login.model";

@Injectable({
  providedIn: 'root'
})
export class FilesService {
  _user: User;

  constructor(private _httpClient: HttpClient) { }

  convenantsDownload(fileName: any): any {
    return this._httpClient.get(`${environment.DOMAIN_LOCAL}maintainerUser/assignedAgreements/?nameFile=${fileName}`, {responseType: 'blob'})
    .subscribe((res: any) => {
      let blob = new Blob([res], { type: 'application/pdf' });
      saveAs(blob, `${fileName}.pdf`);
      console.log(blob);
      let downloadUrl = URL.createObjectURL(blob);
      window.open(downloadUrl);
    }, err => {
      console.log(err);
      return err;
    });
  };

}
