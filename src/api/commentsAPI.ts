import {instance} from "./postsAPI";

export const commentsAPI = {
    getComments(postId: number) {
        return instance.get<ResponseGetCommentsType>(`comments?postId=${postId}`)
    }
}

/**
 * base type for comment
 */
export type ResponseGetCommentsType = {
	postId: number;
	id: number;
	name: string;
	email: string;
	body: string;
}