import { Test, TestingModule } from '@nestjs/testing';
import { CalculationController } from './calculation.controller';
import { CalculationService } from './calculation.service';

describe('CalculationController', () => {
  let controller: CalculationController;
  let service: CalculationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalculationController],
      providers: [CalculationService],
    }).compile();

    controller = module.get<CalculationController>(CalculationController);
    service = module.get<CalculationService>(CalculationService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
