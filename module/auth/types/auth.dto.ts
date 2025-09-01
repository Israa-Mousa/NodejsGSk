import { User } from "../../user/user.entity";

export type LoginDTO={
    email: string;
    password: string;   
}

export type LoginResponseDTO=Omit<User,'password'>;

export type LoginResponseDTOWithJWT={
data:Omit<User,'password'>;
token:string;
}

export type RegisterDTO=Pick<User,'avatar'|'email'|'password'|'name'> ;
export type RegisterResponseDTO=Omit<User,'password'>;

