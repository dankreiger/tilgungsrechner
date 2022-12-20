import {
  CallHandler,
  Controller,
  ExecutionContext,
  Get,
  Injectable,
  NestInterceptor,
  PipeTransform,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CalculationService } from './calculation.service';
import { CalculationInputDto } from './dto/calculation-input.dto';
import { MonthlyPaymentDetails } from './types';

@Injectable()
export class TimePeriodPipe implements PipeTransform {
  yearlyToMonthly = (years: number) => years / 12;

  transform(value: CalculationInputDto) {
    //
    return value;
  }
}

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before...');

    const now = Date.now();
    return next
      .handle()
      .pipe(tap(() => console.log(`After... ${Date.now() - now}ms`)));
  }
}

@Controller('calculation')
export class CalculationController {
  constructor(private calculationService: CalculationService) {}

  @Get('monthly-payment-details')
  @ApiOkResponse({ type: Number })
  @ApiTags('calculation')
  @ApiQuery({
    name: 'fixedInterestPeriodInYears',
    description:
      'Eine Sollzinsbindung zwischen 1 - 30 Jahren [eine Zahl von 1-30].',
    type: Number,
    required: true,
  })
  @ApiQuery({
    name: 'loanAmount',
    type: Number,
    required: true,
    description: 'Der Darlehensbetrag [eine positive Zahl].',
  })
  @ApiQuery({
    name: 'yearlyAmortizationPercent',
    type: Number,
    required: true,
    description:
      'Der Prozentsatz der anfänglichen Tilgung [eine Zahl von 0-100].',
  })
  @ApiQuery({
    name: 'yearlyInterestPercent',
    type: Number,
    required: true,
    description: 'Der Prozentsatz des Sollzinssatzes [eine Zahl von 0-100].',
  })
  @UsePipes(new ValidationPipe())
  calculateMonthlyPaymentDetails(
    @Query() input: CalculationInputDto
  ): MonthlyPaymentDetails {
    return this.calculationService.calculateMonthlyPaymentDetails(input);
  }
}
