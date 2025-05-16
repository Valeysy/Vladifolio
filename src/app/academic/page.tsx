import { Column, Heading } from "@/once-ui/components";
import { Posts } from "@/components/academic/Posts";
import { baseURL } from "@/app/resources";
import { academic, person } from "@/app/resources/content";
import { Meta, Schema } from "@/once-ui/modules";

export async function generateMetadata() {
  return Meta.generate({
    title: academic.title,
    description: academic.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(academic.title)}`,
    path: academic.path,
  });
}

export default function Academic() {
  return (
    <Column maxWidth="l">
      <Schema
        as="article"
        baseURL={baseURL}
        title={academic.title}
        description={academic.description}
        path={academic.path}
        image={`${baseURL}/og?title=${encodeURIComponent(academic.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/academic`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="display-strong-s">
        {academic.title1}
      </Heading>
      <Column
				fillWidth flex={1}>
				<Posts range={[1]} columns="3" thumbnail direction="column"/>
			</Column>



    </Column>
  );
}
