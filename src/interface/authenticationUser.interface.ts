export interface IAuthenticationUserInterface {
    userId: number;
    userName: string;
    userPassword: string;
    profileId: number;
    profileName: string;
    status: boolean;
    id: number,
    hostedServerName: string,
    serverInternetProtocol: string,
    authenticationDateTime: string,
    navigatorUserAgent: string,
    clientInternetProtocol: string,
    authenticated: string,
    authenticationStatus: string
}
export class AuthenticationUserModel implements IAuthenticationUserInterface {
    userId: number = 0;
    userName: string = '';
    userPassword: string = '';
    profileId: number = 0;
    profileName: string = ' ';
    status: boolean = true;
    id: number = 0;
    hostedServerName: string = '';
    serverInternetProtocol: string = '';
    authenticationDateTime: string = '';
    navigatorUserAgent: string = '';
    clientInternetProtocol: string = '';
    authenticated: string = '';
    authenticationStatus: string = '';
  }
