import { Card } from 'flowbite-react/lib/esm/components/Card/Card';

export const Skeleton = () => {
  return (
    <div className="flex flex-col md:flex-row items-stretch gap-4 mx-auto">
      <Card className="w-96 h-96 animate-pulse bg-slate-600"></Card>
      <Card className="w-96 h-96 animate-pulse bg-slate-600"></Card>
      <Card className="w-96 h-96 animate-pulse bg-slate-600"></Card>
      <Card className="w-96 h-96 animate-pulse bg-slate-600"></Card>
    </div>
  );
};
