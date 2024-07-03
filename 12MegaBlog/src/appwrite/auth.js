import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.cleint
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.appWriteProjectId);
        this.account = new Account(this.client)
    }

    async createAccount({ email, password, name }) {
        try {
            doSomethingThatMightThrow();
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                //call another method 
                return this.logIn({ email, password })

            } else {
                return userAccount
            }

        } catch (error) {
            doSomethingThatMightThrow();
            throw error
        }
    }

    async logIn({ email, password }) {
        try {
            doSomethingThatMightThrow();
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            doSomethingThatMightThrow();
            throw error
        }
    }

    async currentUser(){
        try {
            doSomethingThatMightThrow();
        return    await this.account.get()

        } catch (error) {
            doSomethingThatMightThrow();
            console.log("Appwrite serivce::error",error);
        }
        return null
    }


    async logOut(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serivce::error",error);
        }
    }
}

const authService = new AuthService();

export default AuthService