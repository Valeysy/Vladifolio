import { Column, Heading } from "@/once-ui/components";
import { Posts } from "@/components/work/Posts";
import { baseURL } from "@/app/resources";
import { work, person } from "@/app/resources/content";
import { Meta, Schema } from "@/once-ui/modules";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  return (
    <Column maxWidth="l">
      <Schema
        as="work"
        baseURL={baseURL}
        title={work.title}
        description={work.description}
        path={work.path}
        image={`${baseURL}/og?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/work`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="display-strong-s">
        {work.title}
      </Heading>
      <Column
				fillWidth flex={1}>
				<Posts range={[1]} columns="3" thumbnail direction="column"/>
			</Column>

   <Heading marginBottom="l" variant="display-strong-s">
        {work.title1}
      </Heading>

    </Column>
  );
}
