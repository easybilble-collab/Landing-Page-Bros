"use client";

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Calculator, TrendingUp, AlertCircle, Gem, HelpCircle } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

// CONSTANTES FISCAIS E DE MERCADO (BRASIL - LUCRO REAL)
const PIS_COFINS_RATE = 0.0925;
const CSLL_RATE = 0.09;
const IRPJ_BASE_RATE = 0.15;
const IRPJ_ADDITIONAL_RATE = 0.10;
const MONTHLY_PROFIT_THRESHOLD_FOR_ADDITIONAL_IRPJ = 20000; // Limite mensal por RIR

const IT_ASSET_DEPRECIATION_MONTHS = 60; // 5 anos (Receita Federal)
const DEFAULT_MAINTENANCE_RATE = 0.12; // 12% ao ano sobre o valor do ativo
const DEFAULT_RESIDUAL_VALUE_RATE = 0.15; // 15% do valor de compra após o período

export const CostComparison = () => {
  const [equipmentCost, setEquipmentCost] = useState(5000);
  const [rentalMonthly, setRentalMonthly] = useState(180);
  const [duration, setDuration] = useState(36);
  const [monthlyProfit, setMonthlyProfit] = useState(80000);
  const [equipmentQty, setEquipmentQty] = useState(10);

  // --- CÁLCULOS DINÂMICOS ---
  const irpjRate = monthlyProfit > MONTHLY_PROFIT_THRESHOLD_FOR_ADDITIONAL_IRPJ ? IRPJ_BASE_RATE + IRPJ_ADDITIONAL_RATE : IRPJ_BASE_RATE;
  const totalTaxOnProfitRate = irpjRate + CSLL_RATE;

  // --- ANÁLISE DE CUSTO: COMPRA (CAPEX) ---
  const totalPurchaseValue = equipmentCost * equipmentQty;
  const totalMaintenanceCost = (equipmentCost * DEFAULT_MAINTENANCE_RATE / 12) * duration * equipmentQty;
  
  // Despesas Dedutíveis na Compra
  const totalDepreciation = (totalPurchaseValue / IT_ASSET_DEPRECIATION_MONTHS) * duration;
  const deductibleExpensesOnPurchase = totalDepreciation + totalMaintenanceCost;
  
  // Benefício Fiscal na Compra (apenas sobre despesas)
  const taxBenefitOnPurchase = deductibleExpensesOnPurchase * totalTaxOnProfitRate;
  
  // Custo Líquido da Compra (TCO - Total Cost of Ownership)
  const residualValue = totalPurchaseValue * DEFAULT_RESIDUAL_VALUE_RATE;
  const netPurchaseCost = (totalPurchaseValue + totalMaintenanceCost) - residualValue - taxBenefitOnPurchase;

  // --- ANÁLISE DE CUSTO: LOCAÇÃO (OPEX) ---
  const totalRentalValue = rentalMonthly * duration * equipmentQty;
  
  // Benefício Fiscal na Locação (Crédito + Dedução)
  const pisCofinsCredit = totalRentalValue * PIS_COFINS_RATE; // Crédito direto
  const taxBenefitOnRental = totalRentalValue * totalTaxOnProfitRate; // Dedução da base de cálculo
  
  // Custo Líquido da Locação
  const netRentalCost = totalRentalValue - pisCofinsCredit - taxBenefitOnRental;

  // --- RESULTADO FINAL ---
  const savingsWithRental = netPurchaseCost - netRentalCost;

  return (
    <TooltipProvider>
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Análise Fiscal: Compra (CAPEX) vs. Locação (OPEX)</h2>
            <p className="text-muted-foreground mt-2">
              Simulador para empresas no regime de Lucro Real, seguindo as normas da Receita Federal.
            </p>
          </div>

          <Alert className="mb-6 bg-amber-50 border-amber-200">
            <Gem className="h-4 w-4 text-amber-700" />
            <AlertTitle className="text-amber-800">O Ponto Crucial: Crédito de PIS/COFINS</AlertTitle>
            <AlertDescription className="text-amber-700">
              Na locação (serviço), sua empresa gera um crédito de 9,25% sobre o valor total, reduzindo o imposto a pagar. Na compra de ativos (imobilizado), esse benefício não existe. Esta é a maior vantagem fiscal direta.
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* PAINEL DE CONTROLES */}
            <Card className="p-6">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-6 w-6 text-primary" />
                  Parâmetros da Simulação
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-6">
                <div>
                  <Label>Quantidade de Equipamentos</Label>
                  <Input type="number" value={equipmentQty} onChange={(e) => setEquipmentQty(Number(e.target.value))} />
                </div>
                <div>
                  <Label>Valor de Compra (Unitário)</Label>
                  <Input type="number" value={equipmentCost} onChange={(e) => setEquipmentCost(Number(e.target.value))} />
                </div>
                <div>
                  <Label>Valor da Locação (Mensal/Unitário)</Label>
                  <Input type="number" value={rentalMonthly} onChange={(e) => setRentalMonthly(Number(e.target.value))} />
                </div>
                <div>
                  <Label>Prazo do Contrato ({duration} meses)</Label>
                  <Slider value={[duration]} min={12} max={60} step={1} onValueChange={(v) => setDuration(v[0])} />
                </div>
                <div>
                  <Label>Lucro Médio Mensal (Base IRPJ/CSLL)</Label>
                  <Input type="number" value={monthlyProfit} onChange={(e) => setMonthlyProfit(Number(e.target.value))} step={10000} />
                  <p className="text-xs text-muted-foreground mt-1">
                    Define a alíquota de IRPJ (15% ou 25%).
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* PAINEL DE RESULTADOS */}
            <Card className="p-6 bg-primary text-primary-foreground">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-6 w-6" />
                  Resultado da Análise Fiscal ({duration} meses)
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-4">
                {/* COMPRA */}
                <div className="bg-background/10 p-4 rounded-lg">
                  <h3 className="font-bold text-lg">Cenário Compra (CAPEX)</h3>
                  <ul className="text-sm mt-2 space-y-1">
                    <li className="flex justify-between"><span>Custo Total (Ativo + Manutenção)</span> <span>R$ {(totalPurchaseValue + totalMaintenanceCost).toLocaleString('pt-BR', { maximumFractionDigits: 0 })}</span></li>
                    <li className="flex justify-between items-center">
                      <span>Despesas Dedutíveis (Depreciação + Manut.)</span>
                      <Tooltip>
                        <TooltipTrigger><HelpCircle className="h-4 w-4 opacity-70" /></TooltipTrigger>
                        <TooltipContent>Apenas estas despesas reduzem a base de cálculo do IRPJ/CSLL.</TooltipContent>
                      </Tooltip>
                      <span>R$ {deductibleExpensesOnPurchase.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}</span>
                    </li>
                    <li className="flex justify-between text-green-300"><span>(-) Benefício Fiscal (IRPJ/CSLL)</span> <span>R$ {taxBenefitOnPurchase.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}</span></li>
                    <li className="flex justify-between border-t border-white/20 pt-1 mt-1 font-bold"><span>Custo Líquido Final (TCO)</span> <span>R$ {netPurchaseCost.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}</span></li>
                  </ul>
                </div>

                {/* LOCAÇÃO */}
                <div className="bg-background/10 p-4 rounded-lg">
                  <h3 className="font-bold text-lg">Cenário Locação (OPEX)</h3>
                  <ul className="text-sm mt-2 space-y-1">
                    <li className="flex justify-between"><span>Custo Total (Aluguel)</span> <span>R$ {totalRentalValue.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}</span></li>
                    <li className="flex justify-between items-center text-green-300">
                      <span>(-) Crédito PIS/COFINS (9,25%)</span>
                      <Tooltip>
                        <TooltipTrigger><HelpCircle className="h-4 w-4 opacity-70" /></TooltipTrigger>
                        <TooltipContent>Benefício direto, reduz o valor do imposto a pagar.</TooltipContent>
                      </Tooltip>
                      <span>R$ {pisCofinsCredit.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}</span>
                    </li>
                    <li className="flex justify-between text-green-300"><span>(-) Benefício Fiscal (IRPJ/CSLL)</span> <span>R$ {taxBenefitOnRental.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}</span></li>
                    <li className="flex justify-between border-t border-white/20 pt-1 mt-1 font-bold"><span>Custo Líquido Final</span> <span>R$ {netRentalCost.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}</span></li>
                  </ul>
                </div>

                {/* CONCLUSÃO */}
                <div className="bg-green-400/20 p-4 rounded-lg text-center">
                  <h3 className="text-sm font-medium text-green-200">Economia Líquida com a Locação</h3>
                  <p className="text-3xl font-bold mt-1 text-white">
                    R$ {savingsWithRental.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
                  </p>
                  <p className="text-sm mt-1 text-green-200">
                    {savingsWithRental > 0 ? 
                      `A locação é ${((savingsWithRental / netPurchaseCost) * 100).toFixed(1)}% mais eficiente que a compra.` : 
                      "Neste cenário, a compra é mais vantajosa."}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
};