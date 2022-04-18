import { useCallback, useState } from 'react';

type SelectedItems<T> = {
  selected: T[];
  toggle: (item: T) => void;
  selectAll: () => void;
  isSelected: (item: T) => boolean;
  areAllSelected: () => boolean;
  setSelected: (items: T[]) => void;
};

export const useSelectedItems = <T, U extends keyof T>(items: T[], compareBy?: U, initial?: T[]): SelectedItems<T> => {
  const [selected, setSelected] = useState<T[]>(initial ?? []);

  const toggleCallback = (item: T) => {

    let index: number;
    if (compareBy) {
      index = selected.map((selectedItem) => selectedItem[compareBy]).indexOf(item[compareBy]);
    } else {
      index = selected.indexOf(item);
    }
    if (index === -1) {
      setSelected([...selected, item]);
    } else {
      setSelected((current) => {
        const newState = [...current];
        newState.splice(index, 1);
        return [...newState];
      });
    }
  };
  const toggle = useCallback(toggleCallback, [compareBy, selected]);
  const selectAll = () => {
    setSelected(selected.length === items.length ? [] : [...items]);
  };
  const isSelected = useCallback(
    (item) => {
      if (compareBy) {
        return selected.map((selectedItem) => selectedItem[compareBy]).indexOf(item[compareBy]) !== -1;
      }
      return selected.indexOf(item) !== -1;
    },
    [compareBy, selected]
  );
  const areAllSelected = () => {
    return selected.length === items.length;
  };
  return {
    selected,
    toggle,
    selectAll,
    areAllSelected,
    isSelected,
    setSelected,
  };
};
