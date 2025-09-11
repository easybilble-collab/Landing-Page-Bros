"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Calculator, DollarSign, RefreshCw, TrendingUp, AlertCircle, Gem } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

// Dados de mercado + tributação BR (2024)
const MARKET_DATA = {
  notebook: {
    purchasePrice: 4500,
    rentalMonthly: 150,
    maintenanceRate: 8,
    refreshCycle: 3,
    lifespan: 5,
    taxRates: {
      irpj: 0.15,       // IRPJ (15% + 10% adicional sobre lucro > R$60k/mês)
      csll: 0.09,       // CSLL
      pisCofins: 0.0925 // PIS/COFINS (regime cumulativo)
    }
  }
};

export const CostComparison = () => {
  const [equipmentCost, setEquipmentCost] = useState<number>(MARKET_DATA.notebook.purchasePrice);
  const [rentalMonthly, setRentalMonthly] = useState<number>(MARKET_DATA.notebook.rentalMonthly);
  const [duration, setDuration] = useState<number>(36);
  const [monthlyProfit, setMonthlyProfit] = useState<number>(100000); // Lucro médio mensal da empresa
  const [includeTax, setIncludeTax] = useState<boolean>(true);

  // Cálculos tributários
  const taxSavings = (value: number) => {
    if (!includeTax) return 0;
    const { irpj, csll, pisCofins } = MARKET_DATA.notebook.taxRates;
    return value * (irpj + csll + pisCofins); // Economia tributária total
  };

  // Cálculos para COMPRA
  const depreciationPerMonth = equipmentCost / (MARKET_DATA.notebook.lifespan * 12);
  const purchaseTaxBenefits = taxSavings(depreciationPerMonth * Math.min(duration, MARKET_DATA.notebook.lifespan * 12));

  // Cálculos para LOCAÇÃO
  const rentalTaxBenefits = taxSavings(rentalMonthly * duration);

  // Custo Líquido
  const purchaseNetCost = equipmentCost - purchaseTaxBenefits;
  const rentalNetCost = (rentalMonthly * duration) - rentalTaxBenefits;
  const savings = purchaseNetCost - rentalNetCost;

  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Calculadora para Lucro Real</h2>
          <p className="text-muted-foreground mt-2">
            Comparação com benefícios fiscais (IRPJ, CSLL, PIS/COFINS)
          </p>
        </div>

        <Alert className="mb-6 bg-blue-50 border-blue-200">
          <Gem className="h-4 w-4 text-blue-600" />
          <AlertTitle>Vantagem Tributária</AlertTitle>
          <AlertDescription>
            No Lucro Real, a locação é 100% dedutível como despesa operacional, reduzindo a base de cálculo dos impostos.
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-6 w-6 text-primary" />
                Parâmetros Financeiros
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-6">
              <div className="flex items-center gap-3">
                <Label className="flex-1">Incluir benefícios fiscais?</Label>
                <Button
                  variant={includeTax ? "default" : "outline"}
                  size="sm"
                  onClick={() => setIncludeTax(true)}
                >
                  Sim
                </Button>
                <Button
                  variant={!includeTax ? "default" : "outline"}
                  size="sm"
                  onClick={() => setIncludeTax(false)}
                >
                  Não
                </Button>
              </div>

              <div>
                <Label>Valor do equipamento (compra)</Label>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-muted-foreground">R$</span>
                  <Input
                    value={equipmentCost}
                    onChange={(e) => setEquipmentCost(Number(e.target.value))}
                    min={1000}
                    max={10000}
                  />
                </div>
              </div>

              <div>
                <Label>Mensalidade de locação</Label>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-muted-foreground">R$</span>
                  <Input
                    value={rentalMonthly}
                    onChange={(e) => setRentalMonthly(Number(e.target.value))}
                    min={50}
                    max={300}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Média: 3-5% do valor do equipamento/mês
                </p>
              </div>

              <div>
                <Label>Prazo (meses)</Label>
                <Slider
                  value={[duration]}
                  min={6}
                  max={60}
                  step={1}
                  onValueChange={(value) => setDuration(value[0])}
                  className="mt-2"
                />
                <div className="text-sm text-muted-foreground mt-1">
                  {duration} meses ({Math.floor(duration/12)} anos)
                </div>
              </div>

              {includeTax && (
                <div>
                  <Label>Lucro mensal da empresa (R$)</Label>
                  <Input
                    value={monthlyProfit}
                    onChange={(e) => setMonthlyProfit(Number(e.target.value))}
                    min={20000}
                    max={500000}
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Para cálculo do IRPJ adicional (10% sobre lucro acima de R$60k/mês)
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="p-6 bg-primary text-primary-foreground">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-6 w-6" />
                Resultado Tributário
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background/10 p-4 rounded-lg">
                  <h3 className="text-sm font-medium">Compra (Líquido)</h3>
                  <p className="text-2xl font-bold mt-1">
                    R$ {purchaseNetCost.toLocaleString('pt-BR', {maximumFractionDigits: 2})}
                  </p>
                  {includeTax && (
                    <p className="text-xs mt-1">
                      Economia fiscal: R$ {purchaseTaxBenefits.toLocaleString('pt-BR')}
                    </p>
                  )}
                </div>
                <div className="bg-background/10 p-4 rounded-lg">
                  <h3 className="text-sm font-medium">Locação (Líquido)</h3>
                  <p className="text-2xl font-bold mt-1">
                    R$ {rentalNetCost.toLocaleString('pt-BR', {maximumFractionDigits: 2})}
                  </p>
                  {includeTax && (
                    <p className="text-xs mt-1">
                      Economia fiscal: R$ {rentalTaxBenefits.toLocaleString('pt-BR')}
                    </p>
                  )}
                </div>
              </div>

              <div className="bg-background/10 p-4 rounded-lg">
                <h3 className="text-sm font-medium">Vantagem da Locação</h3>
                <p className={`text-3xl font-bold mt-1 ${savings > 0 ? 'text-green-300' : 'text-red-300'}`}>
                  {savings > 0 ? 'R$ ' + savings.toLocaleString('pt-BR') : 'Sem vantagem'}
                </p>
                {includeTax && savings > 0 && (
                  <p className="text-sm mt-1">
                    Incluindo economia fiscal de {(savings/(purchaseNetCost+savings)*100).toFixed(1)}%
                  </p>
                )}
              </div>

              {includeTax && (
                <div className="bg-background/10 p-4 rounded-lg">
                  <h3 className="text-sm font-medium">Detalhes Tributários</h3>
                  <ul className="mt-2 space-y-2 text-xs">
                    <li className="flex justify-between">
                      <span>Redução no IRPJ:</span>
                      <span>15% {monthlyProfit > 60000 ? '+ 10% adicional' : ''}</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Redução na CSLL:</span>
                      <span>9%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Redução no PIS/COFINS:</span>
                      <span>9.25%</span>
                    </li>
                    <li className="flex justify-between pt-2 mt-2 border-t border-white/20">
                      <span>Total de economia fiscal:</span>
                      <span className="font-bold">
                        {(MARKET_DATA.notebook.taxRates.irpj + 
                          MARKET_DATA.notebook.taxRates.csll + 
                          MARKET_DATA.notebook.taxRates.pisCofins) * 100}%
                      </span>
                    </li>
                  </ul>
                </div>
              )}

              <Button 
                variant="secondary" 
                className="w-full bg-white text-primary hover:bg-gray-100"
                onClick={() => {
                  setEquipmentCost(MARKET_DATA.notebook.purchasePrice);
                  setRentalMonthly(MARKET_DATA.notebook.rentalMonthly);
                  setDuration(36);
                  setMonthlyProfit(100000);
                }}
              >
                Redefinir Valores
              </Button>
            </CardContent>
          </Card>
        </div>

        <Alert className="mt-8 bg-green-50 border-green-200">
          <AlertCircle className="h-4 w-4 text-green-600" />
          <AlertTitle>Exemplo Prático</AlertTitle>
          <AlertDescription>
            Para uma empresa com lucro de R$100k/mês, a locação de 10 notebooks economiza até <strong>R$ {(taxSavings(1500)*10).toLocaleString('pt-BR')}/ano</strong> em impostos.
          </AlertDescription>
        </Alert>
      </div>
    </section>
  );
};