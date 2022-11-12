export enum UserRoles {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL",
}

export type user = {
  id: string;
  email: string;
  password: string;
  name: string;
  role: UserRoles;
};

export interface UserInputDTO {
  name: string;
  email: string;
  password: string;
  role: string;
}

export interface LoginInputDTO {
  email: string;
  password: string;
}


export interface AuthenticationData {
  id: string;
  role: string;
}

export interface GetMyProfileInputDTO {
  token: string
}

export interface GetOtherProfileInputDTO {
  id: string,
  token: string
}

export interface FollowUserInputDTO {
  userToFollowId: string,
  token: string
}