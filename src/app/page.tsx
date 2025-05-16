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
  Carousel,
  RevealFx,
  Text,
  TiltFx,
} from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import TableOfContents from "@/components/home/TableOfContents";
import styles from "@/components/home/home.module.scss";
import { person, home, social } from "@/app/resources/content";
import { Schema } from "@/once-ui/modules";

// Define the image interface
interface ImageType {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

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
      title: home.personalProjects.title,
      display: home.personalProjects.display,
      items: home.personalProjects.projects.map((project) => project.name),
    },
    {
      title: home.academic.title,
      display: home.academic.display,
      items: home.academic.experiences.map((experience) => experience.company),
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
          {home.personalProjects.display && (
            <>

              <Column id={home.personalProjects.title} fillWidth gap="l">
                {home.personalProjects.projects.map((project, index) => (
                  <Column key={`${project.name}-${index}`} fillWidth marginBottom="m">
                    <TiltFx
                      direction="column"
                      horizontal={isMobile ? "center" : "start"}
                      vertical={isMobile ? "center" : "start"}
                      fillWidth
                      gap="8"
                    >
                      {project.images.length > 0 && (
                        <Carousel
                          indicator="thumbnail"
                          images={project.images}
                        />
                      )}
                    </TiltFx>

                    <Column marginTop="l" fillWidth gap="8" marginBottom="xl"> 
                      <Text id={project.name} variant="heading-strong-l">
                        {project.name}
                      </Text>
                      <Text variant="body-default-m" onBackground="neutral-weak" marginBottom="m">
                        {project.description}
                      </Text>
                      {project.website && (
                        <Button 
                          suffixIcon="chevronRight" 
                          data-border="rounded" 
                          variant="primary" 
                          href={project.website} 
                          label="Website" 
                        />
                      )}
                    </Column>
                  </Column>
                ))}
              </Column>
            </>
          )}

          <Column fillWidth>
            {home.academic.display && (
              <>
                <Row fillWidth center marginBottom="xl" gap="s" >
                  <Heading as="h2" variant="display-strong-s">
                      My Resume
                  </Heading>
                  <IconButton size="l" icon="download" variant="tertiary" href="/CV_Vladimir_Nechaev.pdf" download="CV_Vladimir_Nechaev.pdf"/>
                </Row>

                <Heading as="h2" id={home.academic.title} variant="display-strong-s" marginBottom="m">
                  {home.academic.title}
                </Heading>
                <Column fillWidth gap="l" marginBottom="40">
                  {home.academic.experiences.map((experience, index) => (
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
    </Column>
  );
}