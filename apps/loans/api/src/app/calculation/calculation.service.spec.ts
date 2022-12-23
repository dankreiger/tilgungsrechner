import { Test, TestingModule } from '@nestjs/testing';
import { CalculationService } from './calculation.service';
import { CalculationInputDto } from './dto/calculation-input.dto';
import { MonthlyPaymentOverviewItem } from './types/monthly-payment-overview-item';

describe('CalculationService', () => {
  let calculationService: CalculationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalculationService],
    }).compile();
    calculationService = module.get<CalculationService>(CalculationService);
  });

  describe('calculatefixedMonthlyPaymentDetails', () => {
    it('should calculate the monthly installment correctly', () => {
      const input: CalculationInputDto = {
        loanAmount: 250000,
        borrowingRate: 2,
        repaymentRate: 3,
        fixedInterestPeriodInYears: 2,
      };

      const details = calculationService.calculateMonthlyPaymentDetails(input);

      expect(details.fixedMonthlyPayment).toBeCloseTo(1041.67);
      expect(details.remainingDebtAtEndOfFixedInterestPeriod).toBeCloseTo(
        234708.96
      );
      expect(details.monthlyOverviewList).toEqual<MonthlyPaymentOverviewItem[]>(
        [
          {
            amortizationAmount: 625,
            fixedMonthlyPayment: 1041.6666666666667,
            interestAmount: 416.6666666666667,
            monthNumber: 1,
            remainingDebt: 249375,
            yearNumber: 1,
          },
          {
            amortizationAmount: 626.0416666666667,
            fixedMonthlyPayment: 1041.6666666666667,
            interestAmount: 415.625,
            monthNumber: 2,
            remainingDebt: 248748.95833333334,
            yearNumber: 1,
          },
          {
            amortizationAmount: 627.0850694444445,
            fixedMonthlyPayment: 1041.6666666666667,
            interestAmount: 414.5815972222223,
            monthNumber: 3,
            remainingDebt: 248121.8732638889,
            yearNumber: 1,
          },
          {
            amortizationAmount: 628.1302112268519,
            fixedMonthlyPayment: 1041.6666666666667,
            interestAmount: 413.53645543981486,
            monthNumber: 4,
            remainingDebt: 247493.74305266206,
            yearNumber: 1,
          },
          {
            amortizationAmount: 629.1770949122299,
            fixedMonthlyPayment: 1041.6666666666667,
            interestAmount: 412.4895717544368,
            monthNumber: 5,
            remainingDebt: 246864.56595774982,
            yearNumber: 1,
          },
          {
            amortizationAmount: 630.2257234037504,
            fixedMonthlyPayment: 1041.6666666666667,
            interestAmount: 411.4409432629164,
            monthNumber: 6,
            remainingDebt: 246234.34023434608,
            yearNumber: 1,
          },
          {
            amortizationAmount: 631.2760996094232,
            fixedMonthlyPayment: 1041.6666666666667,
            interestAmount: 410.3905670572435,
            monthNumber: 7,
            remainingDebt: 245603.06413473666,
            yearNumber: 1,
          },
          {
            amortizationAmount: 632.3282264421057,
            fixedMonthlyPayment: 1041.6666666666667,
            interestAmount: 409.3384402245611,
            monthNumber: 8,
            remainingDebt: 244970.73590829456,
            yearNumber: 1,
          },
          {
            amortizationAmount: 633.3821068195091,
            fixedMonthlyPayment: 1041.6666666666667,
            interestAmount: 408.28455984715765,
            monthNumber: 9,
            remainingDebt: 244337.35380147505,
            yearNumber: 1,
          },
          {
            amortizationAmount: 634.4377436642083,
            fixedMonthlyPayment: 1041.6666666666667,
            interestAmount: 407.22892300245843,
            monthNumber: 10,
            remainingDebt: 243702.91605781086,
            yearNumber: 1,
          },
          {
            amortizationAmount: 635.4951399036486,
            fixedMonthlyPayment: 1041.6666666666667,
            interestAmount: 406.1715267630181,
            monthNumber: 11,
            remainingDebt: 243067.4209179072,
            yearNumber: 1,
          },
          {
            amortizationAmount: 636.5542984701547,
            fixedMonthlyPayment: 1041.6666666666667,
            interestAmount: 405.112368196512,
            monthNumber: 12,
            remainingDebt: 242430.86661943706,
            yearNumber: 1,
          },
          {
            amortizationAmount: 637.6152223009383,
            fixedMonthlyPayment: 1041.6666666666667,
            interestAmount: 404.05144436572846,
            monthNumber: 13,
            remainingDebt: 241793.25139713613,
            yearNumber: 2,
          },
          {
            amortizationAmount: 638.6779143381066,
            fixedMonthlyPayment: 1041.6666666666667,
            interestAmount: 402.9887523285602,
            monthNumber: 14,
            remainingDebt: 241154.57348279803,
            yearNumber: 2,
          },
          {
            amortizationAmount: 639.74237752867,
            fixedMonthlyPayment: 1041.6666666666667,
            interestAmount: 401.92428913799677,
            monthNumber: 15,
            remainingDebt: 240514.83110526938,
            yearNumber: 2,
          },
          {
            amortizationAmount: 640.8086148245511,
            fixedMonthlyPayment: 1041.6666666666667,
            interestAmount: 400.85805184211563,
            monthNumber: 16,
            remainingDebt: 239874.02249044483,
            yearNumber: 2,
          },
          {
            amortizationAmount: 641.8766291825921,
            fixedMonthlyPayment: 1041.6666666666667,
            interestAmount: 399.79003748407473,
            monthNumber: 17,
            remainingDebt: 239232.14586126222,
            yearNumber: 2,
          },
          {
            amortizationAmount: 642.946423564563,
            fixedMonthlyPayment: 1041.6666666666667,
            interestAmount: 398.7202431021037,
            monthNumber: 18,
            remainingDebt: 238589.19943769765,
            yearNumber: 2,
          },
          {
            amortizationAmount: 644.0180009371707,
            fixedMonthlyPayment: 1041.6666666666667,
            interestAmount: 397.6486657294961,
            monthNumber: 19,
            remainingDebt: 237945.18143676047,
            yearNumber: 2,
          },
          {
            amortizationAmount: 645.0913642720659,
            fixedMonthlyPayment: 1041.6666666666667,
            interestAmount: 396.5753023946008,
            monthNumber: 20,
            remainingDebt: 237300.0900724884,
            yearNumber: 2,
          },
          {
            amortizationAmount: 646.1665165458527,
            fixedMonthlyPayment: 1041.6666666666667,
            interestAmount: 395.50015012081406,
            monthNumber: 21,
            remainingDebt: 236653.92355594257,
            yearNumber: 2,
          },
          {
            amortizationAmount: 647.2434607400958,
            fixedMonthlyPayment: 1041.6666666666667,
            interestAmount: 394.423205926571,
            monthNumber: 22,
            remainingDebt: 236006.68009520246,
            yearNumber: 2,
          },
          {
            amortizationAmount: 648.3221998413293,
            fixedMonthlyPayment: 1041.6666666666667,
            interestAmount: 393.34446682533746,
            monthNumber: 23,
            remainingDebt: 235358.35789536114,
            yearNumber: 2,
          },
          {
            amortizationAmount: 649.4027368410648,
            fixedMonthlyPayment: 1041.6666666666667,
            interestAmount: 392.2639298256019,
            monthNumber: 24,
            remainingDebt: 234708.95515852008,
            yearNumber: 2,
          },
        ]
      );
    });
  });
});
