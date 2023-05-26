import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    // withCredentials: true
})

export const postsAPI = {
	getPosts(page: number) {
		return instance.get<ResponseGetPostType>(`posts?_page=${page}`);
	},
	getPostsForUser(userId: number) {
		return instance.get<ResponseGetPostType>(`posts?userId=${userId}`);
	}
}

export type ResponseGetPostType = {
    userId: number
    id: number
    title: string
    body: string
}