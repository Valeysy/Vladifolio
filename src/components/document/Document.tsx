"use client";

import { Column, Flex, Button, Text, SmartLink } from '@/once-ui/components';
import styles from './Documents.module.scss';

interface DocumentFile {
  name: string;
  path: string;
  size: number;
  lastModified: Date;
}

interface DocumentProps {
  document?: DocumentFile;
  direction?: "row" | "column";
  empty?: boolean;
}

export default function Document({ document, direction = "column", empty = false }: DocumentProps) {
  if (empty) {
    return (
      <Flex
        radius="l"
        padding="24"
        border="neutral-alpha-weak"
        horizontal="center"
        vertical="center"
        height={24}>
        <Text align="center">Aucun document n'est disponible pour le moment.</Text>
      </Flex>
    );
  }

  return (
    <Flex
      position="relative"
      transition="micro-medium"
      direction={direction}
      radius="l"
      className={styles.hover}
      shadow="m"
      mobileDirection="column"
      height={24}
      fillWidth>
      <Column
        position="relative"
        fillWidth gap="m"
        padding="24"
        vertical="center">
        <Column gap="8">
          <Text variant="body-strong-s">{document?.name}</Text>
          <Text variant="body-default-xs" color="neutral-on-background-weak">
            {document?.size} KB • Modifié le {new Date(document?.lastModified || "").toLocaleDateString('fr-FR')}
          </Text>
        </Column>
        <SmartLink fillWidth href={document?.path} download>
          <Button prefixIcon="download" fillWidth>Télécharger</Button>
        </SmartLink>
      </Column>
    </Flex>
  );
} 