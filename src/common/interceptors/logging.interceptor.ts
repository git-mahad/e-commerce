import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
	private readonly logger = new Logger(LoggingInterceptor.name);

	intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
		const req = context.switchToHttp().getRequest();
		const method = req?.method;
		const url = req?.originalUrl || req?.url;
		const ip = req?.ip;
		const user = req?.user ? { id: req.user.id, role: req.user.role } : undefined;
		const start = Date.now();

		this.logger.log(`${method} ${url} from ${ip}${user ? ` user=${JSON.stringify(user)}` : ''}`);

		return next.handle().pipe(
			tap((data) => {
				const ms = Date.now() - start;
				this.logger.log(`${method} ${url} ${ms}ms`);
			}),
			catchError((err) => {
				const ms = Date.now() - start;
				this.logger.error(`${method} ${url} ${ms}ms -> ${err?.status || 500} ${err?.message || err}`);
				throw err;
			}),
		);
	}
} 