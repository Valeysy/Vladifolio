import { Meta } from "@/once-ui/modules";
import { baseURL } from "@/app/resources";
import { home } from "@/app/resources/content";

export async function generateMetadata() {
  return Meta.generate({
    title: "Home",
    description: home.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent("Home")}`,
    path: "/",
  });
} 