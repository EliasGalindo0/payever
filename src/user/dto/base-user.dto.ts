export class BaseUserDto {
  name: string;
  age?: number;
  email: string;
  avatar: {
    data: Buffer;
    contentType: string;
  };
}
