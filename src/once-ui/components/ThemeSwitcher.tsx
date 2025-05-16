"use client";

import React, { forwardRef } from "react";
import { Row, useTheme, IconButton } from "@/once-ui/components";

type ThemeType = "dark";

interface ThemeSwitchProps extends React.ComponentProps<typeof Row> {
  defaultTheme?: ThemeType;
}

// This component is kept for backward compatibility but only shows the dark theme button
const ThemeSwitcher = forwardRef<HTMLDivElement, ThemeSwitchProps>(
  ({ defaultTheme = "dark", ...rest }, ref) => {
    const { theme } = useTheme();

    return (
      <Row
        data-border="rounded"
        ref={ref}
        gap="2"
        border="neutral-alpha-weak"
        radius="full"
        {...rest}
      >
        <IconButton
          icon="dark"
          variant="primary"
          onClick={() => {}}
        />
      </Row>
    );
  },
);

ThemeSwitcher.displayName = "ThemeSwitcher";
export { ThemeSwitcher };
