import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    // withCredentials: true
})

export const postsAPI = {
	getPosts(page: number) {
		return instance.get<ResponseGetPostType>(`posts?_page=${page}`);
	},
    getUser() {
        return instance.get<ResponseGetUsersType>("users")
    }
}

export type ResponseGetPostType = {
    userId: number
    id: number
    title: string
    body: string
}

export type ResponseGetUsersType = {
	id: number
	name: string
	username: string
	email: string
	address: ResponseGetUsersTypeAddress
	phone: string
	website: string
	company: ResponseGetUsersTypeCompany
}
export type ResponseGetUsersTypeAddressGeo = {
	lat: string
	lng: string
}
export type ResponseGetUsersTypeAddress = {
	street: string
	suite: string
	city: string
	zipcode: string
	geo: ResponseGetUsersTypeAddressGeo;
}
export type ResponseGetUsersTypeCompany = {
	name: string
	catchPhrase: string
	bs: string
}