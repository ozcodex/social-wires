import { CreateUserDto, UserDto } from './dto/user.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signup(body: CreateUserDto): Promise<UserDto>;
}
