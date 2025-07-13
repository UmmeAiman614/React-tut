import conf from "../conf/conf";
import { Client, ID, Databases, Query, Storage } from "appwrite";

export class Service {
    Client = new Client();
    databases;
    storage;

    constructor() {
        this.Client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.Client);
        this.storage = new Storage(this.Client);
    }


    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            );
            return response;
        } catch (error) {
            console.error("Error creating post:", error);
            throw error;
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("Appwrite error in uodating post:", error);
        }

    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        }

        catch (error) {
            console.error("Error deleting post:", error);
            return false;
        }
    }

    async getPost(slug) {
        try {
            await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )

        }

        catch (error) {
            console.error("Error in getting post:", error);
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            );

        } catch (error) {
            console.error("Error fetching posts:", error);
            return false;
        }
    }


    async uploadFile(file) {
        try {
            return await this.storage.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            );
        } catch (error) {
            console.error("Error uploading file:", error);
            throw error;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.storage.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite in deleting file: ", error);
            return false;

        }
    }

    getFilePreview(fileId) {
        return this.storage.deleteFile(
            conf.appwriteBucketId,
            fileId 
        )
    }
}


const service = new Service();

export default service;