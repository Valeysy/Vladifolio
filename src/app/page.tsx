"use client";

import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  IconButton,
  SmartImage,
  Row,
  RevealFx,
  Text,
} from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import TableOfContents from "@/components/home/TableOfContents";
import styles from "@/components/home/home.module.scss";
import { person, home, social } from "@/app/resources/content";
import { Schema } from "@/once-ui/modules";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  // Responsive flag for mobile layout
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 600px)");
    const handler = (e: MediaQueryListEvent | MediaQueryList) => setIsMobile(e.matches);
    handler(mql);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  const structure = [
    {
      title: home.intro.title,
      display: home.intro.display,
      items: [],
    },
    {
      title: home.school.title,
      display: home.school.display,
      items: home.school.experiences.map((experience) => experience.company),
    },
    {
      title: home.studies.title,
      display: home.studies.display,
      items: home.studies.institutions.map((institution) => institution.name),
    },
    {
      title: home.technical.title,
      display: home.technical.display,
      items: home.technical.skills.map((skill) => skill.title),
    },
  ];

  return (
    <Column maxWidth="m" fillWidth>
      <Schema
        as="webPage"
        baseURL={baseURL}
        title="Home"
        description={home.description}
        path="/"
        image={`${baseURL}/og?title=${encodeURIComponent("Home")}`}
        author={{
          name: person.name,
          url: `${baseURL}/`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {home.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          hide="s"
        >
          <TableOfContents structure={structure} home={home} />
        </Column>
      )}

      <Column fillWidth mobileDirection="column" horizontal="center" marginTop={isMobile ? "xl" : "xl"}>
        <Row
          mobileDirection="column"
          marginBottom="xl"
          fillWidth
          vertical={isMobile ? "center" : "start"}
          horizontal="center"
          gap={isMobile ? undefined : "xl"}
        >
          {home.avatar.display && (
            <RevealFx
              translateY={0.5}
              direction="column"
              minWidth="160"
              paddingX="l"
              paddingBottom="xl"
              gap="m"
              flex={3}
              horizontal="center"
            >
              <Avatar src={person.avatar} size="xl" />
              <Flex gap="8" vertical="center">
                <Icon onBackground="accent-weak" name="globe" />
                {person.location}
              </Flex>
            </RevealFx>
          )}

          <Column
            id={home.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            <RevealFx
              delay={0.2}
              translateY={0.5}
              direction="column"
              horizontal={isMobile ? "center" : "start"}
              vertical={isMobile ? "center" : "start"}
              fillWidth
              gap="8"
            >
              <Heading className={styles.textAlign} variant="display-strong-l">
                Hi, I'm {person.name}
              </Heading>

              <Text
                className={styles.textAlign}
                variant="heading-default-xl"
                onBackground="neutral-weak"
              >
                {person.role}
              </Text>

              {home.intro.display && (
                <Column
                  textVariant="body-default-l"
                  fillWidth
                  gap="m"
                  marginBottom="m"
                  align={isMobile ? "center" : "start"}
                >
                  {home.intro.description}
                </Column>
              )}
            </RevealFx>

            {social.length > 0 && (
              <RevealFx
                delay={0.4}
                translateY={1}
                className={styles.blockAlign}
                paddingBottom="8"
                gap="8"
                wrap
                horizontal="center"
                fitWidth
                data-border="rounded"
              >
                {social.map(
                  (item) =>
                    item.link && (
                      <React.Fragment key={item.name}>
                        <Button
                          className="s-flex-hide"
                          key={item.name}
                          href={item.link}
                          prefixIcon={item.icon}
                          label={item.name}
                          size="s"
                          variant="secondary"
                        />
                        <IconButton
                          className="s-flex-show"
                          size="l"
                          key={`${item.name}-icon`}
                          href={item.link}
                          icon={item.icon}
                          variant="secondary"
                        />
                      </React.Fragment>
                    )
                )}
              </RevealFx>
            )}
          </Column>
        </Row>

        <Column fillWidth>
          {home.school.display && (
            <>
              <Heading as="h2" id={home.school.title} variant="display-strong-s" marginBottom="m">
                {home.school.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {home.school.experiences.map((experience, index) => (
                  <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth>
                    <Flex fillWidth horizontal="space-between" vertical="end" marginBottom="4">
                      <Text id={experience.company} variant="heading-strong-l">
                        {experience.company}
                      </Text>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {experience.timeframe}
                      </Text>
                    </Flex>
                    <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                      {experience.role}
                    </Text>
                    <Column as="ul" gap="16">
                      {experience.achievements.map((achievement, index) => (
                        <Text
                          as="li"
                          variant="body-default-m"
                          key={`${experience.company}-${index}`}
                        >
                          {achievement}
                        </Text>
                      ))}
                    </Column>
                    {experience.images.length > 0 && (
                      <Flex fillWidth paddingTop="m" paddingLeft="40" wrap>
                        {experience.images.map((image, index) => (
                          <Flex
                            key={index}
                            border="neutral-medium"
                            radius="m"
                            minWidth={image.width}
                            height={image.height}
                          >
                            <SmartImage
                              enlarge
                              radius="m"
                              sizes={image.width.toString()}
                              alt={image.alt}
                              src={image.src}
                            />
                          </Flex>
                        ))}
                      </Flex>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {home.studies.display && (
            <>
              <Heading as="h2" id={home.studies.title} variant="display-strong-s" marginBottom="m">
                {home.studies.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {home.studies.institutions.map((institution, index) => (
                  <Column key={`${institution.name}-${index}`} fillWidth gap="8">
                    <Text id={institution.name} variant="heading-strong-l">
                      {institution.name}
                    </Text>
                    <Text variant="body-default-m">{institution.description}</Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {home.technical.display && (
            <>
              <Heading as="h2" id={home.technical.title} variant="display-strong-s" marginBottom="m">
                {home.technical.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {home.technical.skills.map((skill, index) => (
                  <Column key={`${skill.title}-${index}`} fillWidth gap="8">
                    <Text id={skill.title} variant="heading-strong-l">
                      {skill.title}
                    </Text>
                    <Text variant="body-default-m">{skill.description}</Text>
                    {skill.images.length > 0 && (
                      <Flex fillWidth paddingTop="m" paddingLeft="40" wrap>
                        {skill.images.map((image, index) => (
                          <Flex
                            key={index}
                            border="neutral-medium"
                            radius="m"
                            minWidth={image.width}
                            height={image.height}
                          >
                            <SmartImage
                              enlarge
                              radius="m"
                              sizes={image.width.toString()}
                              alt={image.alt}
                              src={image.src}
                            />
                          </Flex>
                        ))}
                      </Flex>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}
        </Column>
      </Column>
    </Column>
  );
}