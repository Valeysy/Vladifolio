"use client";

import { Column, Flex, Button, Text, SmartLink, SmartImage } from '@/once-ui/components';
import styles from './Documents.module.scss';

interface DocumentFile {
  name: string;
  path: string;
  size: number;
  lastModified: Date;
  thumbnail?: string;
}

interface DocumentProps {
  document?: DocumentFile;
  direction?: "row" | "column";
  empty?: boolean;
  thumbnail?: boolean;
}

export default function Document({ document, direction = "column", empty = false, thumbnail = false }: DocumentProps) {
  if (empty) {
    return (
      <Flex
        radius="l"
        padding="24"
        border="neutral-alpha-weak"
        horizontal="center"
        vertical="center"
        height={24}>
        <Text align="center">No documents available at the moment.</Text>
      </Flex>
    );
  }

  // Use one of the gallery images as thumbnail based on document name
  const getGalleryThumbnail = (filename: string) => {
    // For example, assign gallery images based on patterns in the name
    if (filename.toLowerCase().includes('fr')) {
      return '/images/gallery/CV_Vladimir_Nechaev_FR.png';
    } 
    return '/images/gallery/CV_Vladimir_Nechaev.png';
  };
  
  const thumbnailSrc = document?.thumbnail || getGalleryThumbnail(document?.name || '');
  
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
      {thumbnail && (
        <SmartImage
          priority
          className={styles.image}
          sizes="(max-width: 768px) 100vw, 640px"
          border="neutral-alpha-weak"
          cursor="interactive"
          radius="l"
          src={thumbnailSrc}
          alt={'Thumbnail of ' + document?.name}
          aspectRatio="16 / 9"
        />
      )}
      <Column
        position="relative"
        fillWidth gap="m"
        padding="24"
        vertical="center">
        <Column gap="8">
          <Text variant="body-strong-s">{document?.name}</Text>
          <Text variant="body-default-xs" color="neutral-on-background-weak">
            {document?.size} KB • Modified on {new Date(document?.lastModified || "").toLocaleDateString('en-US')}
          </Text>
        </Column>
        <SmartLink fillWidth href={document?.path} download>
          <Button prefixIcon="download" fillWidth>Download</Button>
        </SmartLink>
      </Column>
    </Flex>
  );
} 