import { Injectable } from '@nestjs/common';
import { getApp } from 'firebase-admin/app';
import { Auth, DecodedIdToken, getAuth } from 'firebase-admin/auth';

@Injectable()
export class AuthService {
    private auth : Auth;
    constructor(){
        const admin = getApp();
        this.auth = getAuth(admin);
    }
    async verifyToken (token: string): Promise<DecodedIdToken>{
        let decodedData = await this.auth.verifyIdToken(token);
    return decodedData;
    }
   ProFile ={
    "OWy3c3DjUvUpBhePELxw07IapLA3" : "Minh profile",
   }
   
    getUserProfile(uid: string){
        return this.ProFile[uid];
    }
}
