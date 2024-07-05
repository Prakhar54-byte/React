import conf from "../conf/conf";
import { Client, Databases, ID, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.appWriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client)
    }

    async createPost({ title, slug, content, featuresImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuresImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("Appwrite serivce::error", error);
        }
    }

    async updatePost(slug, { title, content, featuresImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appWriteDatabaseId, conf.appWriteCollectionId
                , slug,
                {
                    title,
                    content,
                    featuresImage,
                    status,

                }
            )
        } catch (error) {
            console.log("Appwrite serivce::error", error);
        }
    }


    async deletePost(slug) {
        try {
            return await this.databases.deleteDocument(
                conf.appWriteDatabaseId, conf.appWriteCollectionId
                , slug
            )
        } catch (error) {
            console.log("Appwrite serivce::error", error);
        }
    }


    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId, slug
            )
        } catch (error) {
            console.log("Appwrite serivce::error", error);
        }
    }

    async gestPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log("Appwrite serivce::error", error);
            return false;
        }
    }

    // file upload services

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appWriteBucketId,
                ID.unique(),
                file,
            )
        } catch (error) {
            console.log("Appwrite serivce::error", error);
            return false
        }
    }

    async deleteFile(file) {
        try {
            return await this.bucket.deleteFile(
                conf.appWriteBucketId,
                file
            )
        } catch (error) {
            console.log("Appwrite serivce::error", error);
            return false
        }
    }

    getFilePreview(file) {
        return this.bucket.getFilePreview(
            conf.appWriteBucketId,
            file
        )
    }
}


const service = new Service()
export default service 