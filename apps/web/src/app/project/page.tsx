import { Card } from "@/ui-shared/components/card";
import { PageWrapper } from "@/ui-shared/components/page-wrapper";

import { api } from "../../utils/api";

export type UsersPageProps = {
  searchParams: {
    page?: string;
  };
};

export default async function ProjectPage({ searchParams }: UsersPageProps) {
  const { body: projectResponse, status } = await api.git.loadFiles({
    body: { projectName: "example" },
  });

  if (status !== 200) {
    return (
      <PageWrapper contentWrapperClassName="items-center" isHeaderShown={false}>
        <Card className="mt-12 w-full max-w-[512px] px-6 py-4">
          <p className="text-headlineS mb-4 text-center">Users</p>
          <p className="text-headlineS mb-4 text-center">Users not found</p>
        </Card>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper contentWrapperClassName="items-center" isHeaderShown={false}>
      <Card className="mt-12 w-full max-w-[512px] px-6 py-4">
        <pre>{JSON.stringify(projectResponse, null, 2)}</pre>
      </Card>
    </PageWrapper>
  );
}
