"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Calculator, DollarSign, RefreshCw, TrendingUp, AlertCircle } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

// Dados de mercado reais (valores médios para notebooks corporativos)
const MARKET_DATA = {
  notebook: {
    purchasePrice: 4500, // Média para notebooks i5/16GB (Dell Latitude, Lenovo ThinkPad)
    rentalMonthly: 150,  // Média de locação com manutenção
    maintenanceRate: 8,  // % do valor anual para manutenção (compra)
    refreshCycle: 3,     // Ciclo médio de atualização (anos)
    lifespan: 5          // Vida útil média (anos)
  }
};

export const CostComparison = () => {
  const [equipmentType] = useState<'notebook'>('notebook');
  const [equipmentCost, setEquipmentCost] = useState<number>(MARKET_DATA.notebook.purchasePrice);
  const [rentalMonthly, setRentalMonthly] = useState<number>(MARKET_DATA.notebook.rentalMonthly);
  const [duration, setDuration] = useState<number>(36);
  const [maintenanceRate, setMaintenanceRate] = useState<number>(MARKET_DATA.notebook.maintenanceRate);
  const [techRefresh, setTechRefresh] = useState<number>(MARKET_DATA.notebook.refreshCycle);

  // Cálculos realistas
  const purchaseCosts = {
    initial: equipmentCost,
    maintenance: equipmentCost * (maintenanceRate/100) * (duration/12),
    replacement: techRefresh > 0 ? (equipmentCost * Math.floor(duration/(techRefresh*12))) : 0,
    residualValue: equipmentCost * 0.2 * (1 - (duration/12)/MARKET_DATA.notebook.lifespan) // Valor residual decrescente
  };

  const purchaseTotal = purchaseCosts.initial + purchaseCosts.maintenance + purchaseCosts.replacement - purchaseCosts.residualValue;
  const rentalTotal = rentalMonthly * duration;
  const savings = purchaseTotal - rentalTotal;
  const savingsPercentage = (savings / purchaseTotal) * 100;

  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Calculadora Realista de Economia</h2>
          <p className="text-muted-foreground mt-2">
            Baseado em dados de mercado para equipamentos corporativos
          </p>
        </div>

        <Alert className="mb-6 bg-blue-50 border-blue-200">
          <AlertCircle className="h-4 w-4 text-blue-600" />
          <AlertTitle>Dados de Referência</AlertTitle>
          <AlertDescription>
            Valores padrão calculados para notebooks corporativos (i5/16GB) com vida útil de 5 anos.
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-6 w-6 text-primary" />
                Parâmetros Reais
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-6">
              <div>
                <Label htmlFor="equipmentCost">Valor de compra do equipamento</Label>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-muted-foreground">R$</span>
                  <Input
                    id="equipmentCost"
                    type="number"
                    value={equipmentCost}
                    onChange={(e) => setEquipmentCost(Number(e.target.value))}
                    min={1000}
                    max={10000}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Faixa realista: R$ 3.000 - R$ 6.000 para notebooks corporativos
                </p>
              </div>

              <div>
                <Label htmlFor="rentalMonthly">Mensalidade de locação</Label>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-muted-foreground">R$</span>
                  <Input
                    id="rentalMonthly"
                    type="number"
                    value={rentalMonthly}
                    onChange={(e) => setRentalMonthly(Number(e.target.value))}
                    min={50}
                    max={300}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Média de mercado: 3-5% do valor do equipamento/mês
                </p>
              </div>

              <div>
                <Label>Prazo de comparação</Label>
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

              <div>
                <Label>Manutenção anual (compra)</Label>
                <Slider
                  value={[maintenanceRate]}
                  min={0}
                  max={15}
                  step={0.5}
                  onValueChange={(value) => setMaintenanceRate(value[0])}
                  className="mt-2"
                />
                <div className="text-sm text-muted-foreground mt-1">
                  {maintenanceRate}% ao ano (Média: 5-10% para notebooks)
                </div>
              </div>

              <div>
                <Label>Ciclo de atualização</Label>
                <Slider
                  value={[techRefresh]}
                  min={0}
                  max={5}
                  step={1}
                  onValueChange={(value) => setTechRefresh(value[0])}
                  className="mt-2"
                />
                <div className="text-sm text-muted-foreground mt-1">
                  {techRefresh > 0 ? `A cada ${techRefresh} anos` : 'Sem atualização'} (Recomendado: 3 anos)
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="p-6 bg-primary text-primary-foreground">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-6 w-6" />
                Resultado Detalhado
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background/10 p-4 rounded-lg">
                  <h3 className="text-sm font-medium">Custo Total (Compra)</h3>
                  <p className="text-2xl font-bold mt-1">
                    R$ {purchaseTotal.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}
                  </p>
                  <div className="text-xs mt-2 space-y-1">
                    <p>• Aquisição: R$ {purchaseCosts.initial.toLocaleString('pt-BR')}</p>
                    <p>• Manutenção: R$ {purchaseCosts.maintenance.toLocaleString('pt-BR')}</p>
                    <p>• Atualização: R$ {purchaseCosts.replacement.toLocaleString('pt-BR')}</p>
                    <p>• Valor residual: -R$ {purchaseCosts.residualValue.toLocaleString('pt-BR')}</p>
                  </div>
                </div>
                <div className="bg-background/10 p-4 rounded-lg">
                  <h3 className="text-sm font-medium">Custo Total (Locação)</h3>
                  <p className="text-2xl font-bold mt-1">
                    R$ {rentalTotal.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}
                  </p>
                  <p className="text-xs mt-2">
                    Inclui manutenção, trocas e upgrades
                  </p>
                </div>
              </div>

              <div className="bg-background/10 p-4 rounded-lg">
                <h3 className="text-sm font-medium">Economia com Locação</h3>
                <p className={`text-3xl font-bold mt-1 ${savings > 0 ? 'text-green-300' : 'text-red-300'}`}>
                  {savings > 0 ? 'R$ ' + savings.toLocaleString('pt-BR', { maximumFractionDigits: 2 }) : 'Sem economia'}
                </p>
                {savings > 0 ? (
                  <p className="text-sm mt-1">
                    ({savingsPercentage.toFixed(1)}% de economia) | Equivalente a {Math.abs(savings/duration).toLocaleString('pt-BR', {maximumFractionDigits:2})} por mês
                  </p>
                ) : (
                  <p className="text-sm mt-1 text-red-300">
                    Compra pode ser mais vantajosa para prazos curtos ({duration < 18 ? "<1.5 anos" : ""})
                  </p>
                )}
              </div>

              <div className="bg-background/10 p-4 rounded-lg">
                <h3 className="text-sm font-medium">Análise Financeira</h3>
                <ul className="mt-2 space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <DollarSign className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Break-even:</strong> {Math.ceil(equipmentCost/rentalMonthly)} meses para compensar a compra
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <RefreshCw className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Atualização:</strong> Economia de R$ {(equipmentCost * 0.7).toLocaleString('pt-BR')} a cada {techRefresh} anos
                    </span>
                  </li>
                </ul>
              </div>

              <Button 
                variant="secondary" 
                className="w-full bg-white text-primary hover:bg-gray-100"
                onClick={() => {
                  setEquipmentCost(MARKET_DATA.notebook.purchasePrice);
                  setRentalMonthly(MARKET_DATA.notebook.rentalMonthly);
                  setDuration(36);
                  setMaintenanceRate(MARKET_DATA.notebook.maintenanceRate);
                  setTechRefresh(MARKET_DATA.notebook.refreshCycle);
                }}
              >
                Usar Valores de Mercado
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};