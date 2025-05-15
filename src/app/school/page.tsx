import { Column, Heading } from "@/once-ui/components";
import { Posts } from "@/components/school/Posts";
import { baseURL } from "@/app/resources";
import { school, person } from "@/app/resources/content";
import { Meta, Schema } from "@/once-ui/modules";

export async function generateMetadata() {
  return Meta.generate({
    title: school.title,
    description: school.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(school.title)}`,
    path: school.path,
  });
}

export default function School() {
  return (
    <Column maxWidth="l">
      <Schema
        as="article"
        baseURL={baseURL}
        title={school.title}
        description={school.description}
        path={school.path}
        image={`${baseURL}/og?title=${encodeURIComponent(school.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/school`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="display-strong-s">
        {school.title1}
      </Heading>
      <Column
				fillWidth flex={1}>
				<Posts range={[1]} columns="3" thumbnail direction="column"/>
			</Column>



    </Column>
  );
}
