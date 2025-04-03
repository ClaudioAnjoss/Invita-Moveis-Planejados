import * as React from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/_shadcn/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/_shadcn/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/_shadcn/popover'

interface iComboboxProps {
  items: string[] // Lista simples de strings
  value: string // Valor selecionado
  onChange: (newValue: string) => void // Função para atualizar o valor
}

export function Combobox({ items, value, onChange }: iComboboxProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        {/* Envolva o Button com um div para evitar o erro de ref */}
        <div>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            {value || 'Selecione...'}
            <ChevronsUpDown className="opacity-50" />
          </Button>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Buscar..." />
          <CommandList>
            <CommandEmpty>Não encontrado</CommandEmpty>
            <CommandGroup>
              {items.map((item) => (
                <CommandItem
                  key={item}
                  value={item}
                  onSelect={(currentValue) => {
                    onChange(currentValue) // Atualiza o valor
                    setOpen(false)
                  }}
                >
                  {item}
                  <Check
                    className={cn(
                      'ml-auto',
                      value === item ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
