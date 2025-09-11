"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Calculator, DollarSign, RefreshCw, TrendingUp } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';

export const CostComparison = () => {
  const [equipmentCost, setEquipmentCost] = useState<number>(5000);
  const [rentalMonthly, setRentalMonthly] = useState<number>(300);
  const [duration, setDuration] = useState<number>(36);
  const [maintenanceRate, setMaintenanceRate] = useState<number>(15);
  const [techRefresh, setTechRefresh] = useState<number>(3);

  // Cálculos
  const purchaseTotal = equipmentCost + 
                       (equipmentCost * (maintenanceRate/100) * (duration/12)) +
                       (techRefresh > 0 ? equipmentCost * (duration/(techRefresh*12)) : 0);

  const rentalTotal = rentalMonthly * duration;
  const savings = purchaseTotal - rentalTotal;
  const savingsPercentage = (savings / purchaseTotal) * 100;

  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Calculadora de Economia</h2>
          <p className="text-muted-foreground mt-2">
            Compare os custos totais entre comprar e alugar equipamentos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-6 w-6 text-primary" />
                Parâmetros do Cálculo
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-6">
              <div>
                <Label htmlFor="equipmentCost">Valor do equipamento (compra)</Label>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-muted-foreground">R$</span>
                  <Input
                    id="equipmentCost"
                    type="number"
                    value={equipmentCost}
                    onChange={(e) => setEquipmentCost(Number(e.target.value))}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="rentalMonthly">Valor mensal da locação</Label>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-muted-foreground">R$</span>
                  <Input
                    id="rentalMonthly"
                    type="number"
                    value={rentalMonthly}
                    onChange={(e) => setRentalMonthly(Number(e.target.value))}
                  />
                </div>
              </div>

              <div>
                <Label>Duração do contrato (meses)</Label>
                <Slider
                  defaultValue={[duration]}
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
                <Label>Manutenção anual (% do valor do equipamento)</Label>
                <Slider
                  defaultValue={[maintenanceRate]}
                  min={0}
                  max={30}
                  step={1}
                  onValueChange={(value) => setMaintenanceRate(value[0])}
                  className="mt-2"
                />
                <div className="text-sm text-muted-foreground mt-1">
                  {maintenanceRate}% ao ano
                </div>
              </div>

              <div>
                <Label>Atualização tecnológica (anos)</Label>
                <Slider
                  defaultValue={[techRefresh]}
                  min={0}
                  max={5}
                  step={1}
                  onValueChange={(value) => setTechRefresh(value[0])}
                  className="mt-2"
                />
                <div className="text-sm text-muted-foreground mt-1">
                  {techRefresh > 0 ? `A cada ${techRefresh} anos` : 'Sem atualização'}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="p-6 bg-primary text-primary-foreground">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-6 w-6" />
                Resultado da Comparação
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background/10 p-4 rounded-lg">
                  <h3 className="text-sm font-medium">Custo Total (Compra)</h3>
                  <p className="text-2xl font-bold mt-1">
                    R$ {purchaseTotal.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}
                  </p>
                </div>
                <div className="bg-background/10 p-4 rounded-lg">
                  <h3 className="text-sm font-medium">Custo Total (Locação)</h3>
                  <p className="text-2xl font-bold mt-1">
                    R$ {rentalTotal.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}
                  </p>
                </div>
              </div>

              <div className="bg-background/10 p-4 rounded-lg">
                <h3 className="text-sm font-medium">Economia com Locação</h3>
                <p className={`text-3xl font-bold mt-1 ${savings > 0 ? 'text-green-300' : 'text-red-300'}`}>
                  {savings > 0 ? 'R$ ' + savings.toLocaleString('pt-BR', { maximumFractionDigits: 2 }) : 'Sem economia'}
                </p>
                {savings > 0 && (
                  <p className="text-sm mt-1">
                    ({savingsPercentage.toFixed(1)}% de economia em relação à compra)
                  </p>
                )}
              </div>

              <div className="bg-background/10 p-4 rounded-lg">
                <h3 className="text-sm font-medium">Benefícios Adicionais</h3>
                <ul className="mt-2 space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <RefreshCw className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>Atualização tecnológica incluída: {techRefresh > 0 ? 'Sim' : 'Não'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <DollarSign className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>Manutenção incluída: {maintenanceRate > 0 ? 'Sim' : 'Não'}</span>
                  </li>
                </ul>
              </div>

              <Button 
                variant="secondary" 
                className="w-full bg-white text-primary hover:bg-gray-100"
                onClick={() => {
                  setEquipmentCost(5000);
                  setRentalMonthly(300);
                  setDuration(36);
                  setMaintenanceRate(15);
                  setTechRefresh(3);
                }}
              >
                Redefinir Valores
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};