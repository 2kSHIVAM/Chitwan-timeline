import { SetMetadata } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

export const hashPassword = (password: string) => {
    return bcrypt.hash(password, 10)
}

export const ifPasswordMatches = (password: string,hash: string) => {
    return bcrypt.compare(password, hash);
}