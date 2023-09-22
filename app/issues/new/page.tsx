import dynamic from "next/dynamic";
import IssueFormSkeleton from "./loading";

const IssueForm = dynamic(
  () => import('@/app/issues/_components/IssueForm'),
  { 
    ssr: false,
    loading: () => <IssueFormSkeleton />
  }
);

const NewIssuePage = () => {
  return (
    <IssueForm />
  )
}

export default NewIssuePage