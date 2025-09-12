"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Calculator, DollarSign, RefreshCw, TrendingUp, AlertCircle, Gem } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

// Dados atualizados com cálculos corretos
const MARKET_DATA = {
  notebook: {
    purchasePrice: 4500,
    rentalMonthly: 150,
    maintenanceRate: 8, // % do valor ao ano
    taxRates: {
      irpj: 0.25,    // 15% + 10% adicional (para lucros > 60k/mês)
      csll: 0.09,
      pisCofins: 0.0925,
      total: 0.4325  // Soma total dos impostos (25% + 9% + 9.25%)
    },
    residualValue: 0.2 // 20% do valor após 3 anos
  }
};

export const CostComparison = () => {
  const [equipmentCost, setEquipmentCost] = useState(MARKET_DATA.notebook.purchasePrice);
  const [rentalMonthly, setRentalMonthly] = useState(MARKET_DATA.notebook.rentalMonthly);
  const [duration, setDuration] = useState(36);
  const [monthlyProfit, setMonthlyProfit] = useState(100000);
  const [equipmentQty, setEquipmentQty] = useState(10);

  // Cálculos CORRETOS para Lucro Real:
  const taxRate = monthlyProfit > 60000 ? 
    MARKET_DATA.notebook.taxRates.total : 
    MARKET_DATA.notebook.taxRates.total - 0.10;

  // 1. Custo de COMPRA (considerando apenas depreciação linear)
  const depreciationPeriod = Math.min(duration, 36); // Máximo 3 anos para equipamentos
  const monthlyDepreciation = equipmentCost / 36; // Depreciação em 3 anos
  const purchaseTaxBenefit = monthlyDepreciation * depreciationPeriod * taxRate;
  
  const residualValue = equipmentCost * MARKET_DATA.notebook.residualValue;
  const purchaseNetCost = (equipmentCost - residualValue) - purchaseTaxBenefit;

  // 2. Custo de LOCAÇÃO (100% dedutível como despesa)
  const rentalGrossCost = rentalMonthly * duration;
  const rentalTaxBenefit = rentalGrossCost * taxRate;
  const rentalNetCost = rentalGrossCost - rentalTaxBenefit;

  // 3. Comparação final
  const savings = purchaseNetCost - rentalNetCost;
  const monthlySavings = savings / duration;

  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Vantagem Real da Locação</h2>
          <p className="text-muted-foreground mt-2">
            Cálculo preciso para empresas no Lucro Real
          </p>
        </div>

        <Alert className="mb-6 bg-blue-50 border-blue-200">
          <Gem className="h-4 w-4 text-blue-600" />
          <AlertTitle>Por que a locação é vantajosa?</AlertTitle>
          <AlertDescription>
            No Lucro Real, você deduz 100% das parcelas como despesa, enquanto na compra só aproveita a depreciação.
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-6 w-6 text-primary" />
                Configure seu Cenário
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-6">
              <div>
                <Label>Quantidade de equipamentos</Label>
                <Input
                  type="number"
                  value={equipmentQty}
                  onChange={(e) => setEquipmentQty(Number(e.target.value))}
                  min={1}
                  max={100}
                />
              </div>

              <div>
                <Label>Valor unitário (compra)</Label>
                <div className="flex items-center gap-2 mt-1">
                  <span>R$</span>
                  <Input
                    value={equipmentCost}
                    onChange={(e) => setEquipmentCost(Number(e.target.value))}
                    min={1000}
                    max={10000}
                  />
                </div>
              </div>

              <div>
                <Label>Mensalidade (locação)</Label>
                <div className="flex items-center gap-2 mt-1">
                  <span>R$</span>
                  <Input
                    value={rentalMonthly}
                    onChange={(e) => setRentalMonthly(Number(e.target.value))}
                    min={50}
                    max={300}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {((rentalMonthly/equipmentCost)*100).toFixed(1)}% do valor mensal
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
                />
                <div className="text-sm text-muted-foreground mt-1">
                  {duration} meses ({Math.floor(duration/12)} anos)
                </div>
              </div>

              <div>
                <Label>Lucro mensal da empresa (R$)</Label>
                <Input
                  value={monthlyProfit}
                  onChange={(e) => setMonthlyProfit(Number(e.target.value))}
                  min={20000}
                  max={500000}
                />
                <p className="text-xs text-muted-foreground mt-1">
                  {monthlyProfit > 60000 ? 
                    "Sujeito a IRPJ adicional (25% total)" : 
                    "Taxa normal de IRPJ (15%)"}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="p-6 bg-primary text-primary-foreground">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-6 w-6" />
                Resultado Financeiro
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background/10 p-4 rounded-lg">
                  <h3 className="text-sm font-medium">Compra (Líquido)</h3>
                  <p className="text-2xl font-bold mt-1">
                    R$ {(purchaseNetCost * equipmentQty).toLocaleString('pt-BR')}
                  </p>
                  <p className="text-xs mt-2">
                    Economia fiscal: R$ {(purchaseTaxBenefit * equipmentQty).toLocaleString('pt-BR')}
                  </p>
                </div>
                <div className="bg-background/10 p-4 rounded-lg">
                  <h3 className="text-sm font-medium">Locação (Líquido)</h3>
                  <p className="text-2xl font-bold mt-1">
                    R$ {(rentalNetCost * equipmentQty).toLocaleString('pt-BR')}
                  </p>
                  <p className="text-xs mt-2">
                    Economia fiscal: R$ {(rentalTaxBenefit * equipmentQty).toLocaleString('pt-BR')}
                  </p>
                </div>
              </div>

              <div className="bg-background/10 p-4 rounded-lg">
                <h3 className="text-sm font-medium">Vantagem da Locação</h3>
                <p className="text-3xl font-bold mt-1 text-green-300">
                  R$ {(savings * equipmentQty).toLocaleString('pt-BR')}
                </p>
                <p className="text-sm mt-1">
                  {monthlySavings > 0 ? 
                    `Equivalente a R$ ${monthlySavings.toLocaleString('pt-BR')} por mês por equipamento` : 
                    "Sem vantagem financeira"}
                </p>
              </div>

              <div className="bg-background/10 p-4 rounded-lg">
                <h3 className="text-sm font-medium">Detalhes Tributários</h3>
                <ul className="mt-2 space-y-1 text-xs">
                  <li className="flex justify-between">
                    <span>Alíquota efetiva total:</span>
                    <span>{(taxRate * 100).toFixed(2)}%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>IRPJ:</span>
                    <span>{(monthlyProfit > 60000 ? 25 : 15)}%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>CSLL:</span>
                    <span>9%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>PIS/COFINS:</span>
                    <span>9.25%</span>
                  </li>
                </ul>
              </div>

              <Alert className="bg-background/10 border-white/20">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Exemplo Real</AlertTitle>
                <AlertDescription className="text-xs">
                  Para {equipmentQty} equipamentos em {duration} meses, a locação proporciona uma economia tributária de R$ {(rentalTaxBenefit * equipmentQty).toLocaleString('pt-BR')} contra R$ {(purchaseTaxBenefit * equipmentQty).toLocaleString('pt-BR')} da compra.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};