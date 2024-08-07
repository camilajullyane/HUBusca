import { api } from "../api/api"

export const UserServices = {
    async getUserData(name: string) {
        return api.get(`/users/${name}`);
    },

    async getUsersRepositories(name: string) {
        return api.get(`/users/${name}/repos`);
    }
}

