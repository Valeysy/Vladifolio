"use client";

import { Column, Flex, Button, Text, SmartLink, SmartImage, Tag } from '@/once-ui/components';
import styles from './Documents.module.scss';
import { formatDate } from '@/app/utils/formatDate';

interface DocumentFile {
  title: string;
  summary: string;
  publishedAt: string;
  tag?: string;
  image?: string;
  file?: string;
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
      {thumbnail && document?.image && (
        <SmartImage
          priority
          className={styles.image}
          sizes="(max-width: 768px) 100vw, 640px"
          border="neutral-alpha-weak"
          cursor="interactive"
          radius="l"
          src={document.image}
          alt={'Thumbnail of ' + document.title}
          aspectRatio="16 / 9"
        />
      )}
      <Column
        position="relative"
        fillWidth gap="m"
        padding="24"
        vertical="center">
        <Column gap="8">
          <Text variant="body-strong-s">{document?.title}</Text>
          <Text variant="body-default-xs" color="neutral-on-background-weak">
            {document?.publishedAt && formatDate(document.publishedAt, false)}
          </Text>
          {document?.tag && (
            <Tag
              label={document.tag}
              variant="neutral"
            />
          )}
        </Column>
        {document?.file && (
          <SmartLink fillWidth href={document.file} download>
            <Button prefixIcon="download" fillWidth>Download</Button>
          </SmartLink>
        )}
      </Column>
    </Flex>
  );
} 