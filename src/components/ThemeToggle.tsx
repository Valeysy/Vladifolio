'use client';

import React from 'react';
import { ToggleButton } from '@/once-ui/components';

export const ThemeToggle: React.FC = () => {
  return (
    <>
      <ToggleButton
        prefixIcon='moon'
        onClick={() => {}}
        selected={false}
        aria-label="Dark mode"
      />
    </>
  );
};
