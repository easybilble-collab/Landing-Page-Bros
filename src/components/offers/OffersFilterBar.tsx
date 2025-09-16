import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const brands = ["Todos", "Apple", "Dell", "Lenovo", "HP"];
const sortOptions = [
  { value: "price-asc", label: "Preço: Menor para o Maior" },
  { value: "price-desc", label: "Preço: Maior para o Menor" },
];

interface OffersFilterBarProps {
  selectedBrand: string;
  onBrandChange: (brand: string) => void;
  sortOrder: string;
  onSortOrderChange: (order: string) => void;
}

export const OffersFilterBar = ({ selectedBrand, onBrandChange, sortOrder, onSortOrderChange }: OffersFilterBarProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 p-4 bg-secondary rounded-lg border">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="font-semibold shrink-0">Filtrar por Marca:</span>
        <ToggleGroup
          type="single"
          value={selectedBrand}
          onValueChange={(value) => { if (value) onBrandChange(value) }}
          className="flex-wrap justify-start"
        >
          {brands.map(brand => (
            <ToggleGroupItem key={brand} value={brand}>{brand}</ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <span className="font-semibold">Ordenar por:</span>
        <Select value={sortOrder} onValueChange={onSortOrderChange}>
          <SelectTrigger className="w-[240px]">
            <SelectValue placeholder="Ordenar por..." />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map(option => (
              <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};