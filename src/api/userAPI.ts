import {instance} from "./postsAPI";

export const userAPI = {
    getUsers(userId: number) {
        return instance.get<ResponseUserType>(`users?id=${userId}`)
    }
}

/**
 * base type for user
 */
export type ResponseUserType = {
	id: number;
	name: string;
	username: string;
	email: string;
	address: ResponseUserTypeAddress;
	phone: string;
	website: string;
	company: ResponseUserTypeCompany;
}
export type ResponseUserTypeAddressGeo = {
	lat: string;
	lng: string;
}
export type ResponseUserTypeAddress = {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: ResponseUserTypeAddressGeo;
}
export type ResponseUserTypeCompany = {
	name: string;
	catchPhrase: string;
	bs: string;
}