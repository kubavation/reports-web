import {HttpResponse} from "@angular/common/http";

export class FileUtil {

  static fileNameFromHeader(response: HttpResponse<Blob>): string {
    return response.headers.get('content-disposition');
  }
}
