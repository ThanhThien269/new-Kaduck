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
   
    getUserProfile(){
        return "User profile"
    }
}
