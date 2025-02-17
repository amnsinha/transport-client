import {HttpHeaders} from '@angular/common/http';
import {environment} from "../../environments/environment";

/**
 * This class defines a base service class
 * Defines a pattern to get the base url for service calls
 */
export class BaseService {

  /**
   * Returns headers for static get operations, disables cache for get
   * @returns {RequestOptions}
   */
  protected getNoCacheRequestOptions(responseType ?: any, loading?: string): {} {
    return {
      headers: new HttpHeaders({
        'Cache-control': 'no-cache,no-store',
        Expires: '0',
        Pragma: 'no-cache',
        loading: loading ? loading : ''
      }),
      withCredentials: true,
      responseType
    };
  }

  protected getHttpHeaders() {
    return new HttpHeaders({
      'Content-type': 'application/json',
    });
  }


  /**
   * Returns the service url setting the server from the environment (if defined) in \Client\tools\env
   * @param path - relative path to the service
   * @returns {string} - full url or relative path if base url not defined in environment
   */
  protected getServiceUrl(path: string): string {
    if (environment.api) {
      return environment.api + path;
    } else {
      return path;
    }
  }
}
