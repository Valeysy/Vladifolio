import { Column, Heading } from "@/once-ui/components";
import { Documents } from "@/components";
import { baseURL } from "@/app/resources";
import { document, person } from "@/app/resources/content";
import { Meta, Schema } from "@/once-ui/modules";

export async function generateMetadata() {
  return Meta.generate({
    title: document.title,
    description: document.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(document.title)}`,
    path: document.path,
  });
}

export default function Document() {
  return (
    <Column maxWidth="l">
      <Schema
        as="article"
        baseURL={baseURL}
        title={document.title}
        description={document.description}
        path={document.path}
        image={`${baseURL}/og?title=${encodeURIComponent(document.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/document`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      <Heading marginBottom="l" variant="display-strong-s">
        {document.title1}
      </Heading>
      
      <Column fillWidth flex={1}>
        <Documents columns="3" direction="column" thumbnail />
      </Column>
    </Column>
  );
}
