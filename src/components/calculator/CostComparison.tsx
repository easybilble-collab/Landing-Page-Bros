"use client";

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Calculator, TrendingUp, AlertCircle, Gem } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

// Dados atualizados com cálculos realistas para o mercado brasileiro
const MARKET_DATA = {
  notebook: {
    purchasePrice: 4500,
    rentalMonthly: 150,
    maintenanceRate: 0.15, // 15% do valor ao ano (custo de suporte, reparos, etc.)
    depreciationPeriodMonths: 60, // 5 anos, conforme legislação fiscal
    taxRates: {
      irpj: 0.25,    // 15% + 10% adicional (para lucros > 60k/mês)
      csll: 0.09,
      pisCofins: 0.0925,
      total: 0.4325  // Soma total dos impostos (25% + 9% + 9.25%)
    },
    residualValueRate: 0.2 // 20% do valor de revenda após o período
  }
};

export const CostComparison = () => {
  const [equipmentCost, setEquipmentCost] = useState(MARKET_DATA.notebook.purchasePrice);
  const [rentalMonthly, setRentalMonthly] = useState(MARKET_DATA.notebook.rentalMonthly);
  const [duration, setDuration] = useState(36);
  const [monthlyProfit, setMonthlyProfit] = useState(100000);
  const [equipmentQty, setEquipmentQty] = useState(10);

  // Alíquota de imposto baseada no lucro
  const taxRate = monthlyProfit > 60000 ? 
    MARKET_DATA.notebook.taxRates.total : 
    MARKET_DATA.notebook.taxRates.total - 0.10;

  // --- CÁLCULO DE COMPRA (CORRIGIDO) ---
  // 1. Custo de Manutenção
  const annualMaintenanceCost = equipmentCost * MARKET_DATA.notebook.maintenanceRate;
  const totalMaintenanceCost = annualMaintenanceCost * (duration / 12);
  const maintenanceTaxBenefit = totalMaintenanceCost * taxRate;
  const netMaintenanceCost = totalMaintenanceCost - maintenanceTaxBenefit;

  // 2. Benefício da Depreciação (limitado a 5 anos)
  const monthlyDepreciation = equipmentCost / MARKET_DATA.notebook.depreciationPeriodMonths;
  const totalDepreciationInPeriod = monthlyDepreciation * duration;
  const depreciationTaxBenefit = totalDepreciationInPeriod * taxRate;

  // 3. Custo Líquido da Compra (Total Cost of Ownership)
  const residualValue = equipmentCost * MARKET_DATA.notebook.residualValueRate;
  const netAssetCost = equipmentCost - residualValue - depreciationTaxBenefit;
  const purchaseNetCost = netAssetCost + netMaintenanceCost;

  // --- CÁLCULO DE LOCAÇÃO ---
  const rentalGrossCost = rentalMonthly * duration;
  const rentalTaxBenefit = rentalGrossCost * taxRate;
  const rentalNetCost = rentalGrossCost - rentalTaxBenefit;

  // --- COMPARAÇÃO FINAL ---
  const savings = purchaseNetCost - rentalNetCost;

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
            Na locação, 100% do valor é dedutível como despesa. Na compra, você deduz apenas a depreciação (parcial) e custos de manutenção, tornando o benefício fiscal menor.
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
                    max={500}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {((rentalMonthly/equipmentCost)*100).toFixed(1)}% do valor do ativo/mês
                </p>
              </div>

              <div>
                <Label>Prazo do contrato (meses)</Label>
                <Slider
                  value={[duration]}
                  min={12}
                  max={60}
                  step={1}
                  onValueChange={(value) => setDuration(value[0])}
                />
                <div className="text-sm text-muted-foreground mt-1">
                  {duration} meses ({Math.floor(duration/12)} anos e {duration % 12} meses)
                </div>
              </div>

              <div>
                <Label>Lucro mensal da empresa (R$)</Label>
                <Input
                  type="number"
                  value={monthlyProfit}
                  onChange={(e) => setMonthlyProfit(Number(e.target.value))}
                  min={20000}
                  max={1000000}
                  step={10000}
                />
                <p className="text-xs text-muted-foreground mt-1">
                  {monthlyProfit > 60000 ? 
                    "Acima de R$60k, IRPJ tem adicional de 10%" : 
                    "Abaixo de R$60k, IRPJ padrão de 15%"}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="p-6 bg-primary text-primary-foreground">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-6 w-6" />
                Resultado Financeiro (Custo Total no Período)
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background/10 p-4 rounded-lg">
                  <h3 className="text-sm font-medium">Compra (Líquido)</h3>
                  <p className="text-2xl font-bold mt-1">
                    R$ {(purchaseNetCost * equipmentQty).toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
                  </p>
                  <p className="text-xs mt-2">
                    Custo Ativo: R$ {(netAssetCost * equipmentQty).toLocaleString('pt-BR', { maximumFractionDigits: 0 })}<br/>
                    Manutenção: R$ {(netMaintenanceCost * equipmentQty).toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
                  </p>
                </div>
                <div className="bg-background/10 p-4 rounded-lg">
                  <h3 className="text-sm font-medium">Locação (Líquido)</h3>
                  <p className="text-2xl font-bold mt-1">
                    R$ {(rentalNetCost * equipmentQty).toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
                  </p>
                   <p className="text-xs mt-2">
                    Economia fiscal total:<br/>R$ {(rentalTaxBenefit * equipmentQty).toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
                  </p>
                </div>
              </div>

              <div className="bg-green-400/20 p-4 rounded-lg text-center">
                <h3 className="text-sm font-medium text-green-200">Economia com a Locação</h3>
                <p className="text-3xl font-bold mt-1 text-white">
                  R$ {(savings * equipmentQty).toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
                </p>
                <p className="text-sm mt-1 text-green-200">
                  {savings > 0 ? 
                    `Sua empresa economiza ${((savings / purchaseNetCost) * 100).toFixed(1)}% no período` : 
                    "Ajuste os valores para ver a economia"}
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
                <AlertTitle>Nota</AlertTitle>
                <AlertDescription className="text-xs">
                  Este é um cálculo simplificado. Custos como gerenciamento de ativos, descarte e o custo de oportunidade do capital não foram incluídos, mas aumentariam ainda mais a vantagem da locação.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};