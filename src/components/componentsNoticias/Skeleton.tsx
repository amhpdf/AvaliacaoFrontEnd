import { Card } from "flowbite-react/lib/esm/components/Card/Card";

export const Skeleton = () => {
  return (
    <>
      <Card className="w-96 h-96 animate-pulse bg-slate-600"></Card>
      <Card className="w-96 h-96 animate-pulse bg-slate-600"></Card>
      <Card className="w-96 h-96 animate-pulse bg-slate-600"></Card>
      <Card className="w-96 h-96 animate-pulse bg-slate-600"></Card>
    </>
  );
};
