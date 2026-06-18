import { Skeleton } from "@/components/ui/skeleton";

export function LivroPaginaSkeleton() {
  return (
    <main className="grid px-6">
      <section className="mb-6">
        <div className="flex gap-3 items-center justify-between mb-4">
          {/* Capa */}
          <Skeleton className="w-80 h-80 rounded-lg" />

          {/* Informações */}
          <ul className="grid gap-6">
            <li className="grid gap-2 px-6 py-4 border border-gray-200 rounded-2xl">
              <Skeleton className="h-5 w-16 mx-auto" />
              <Skeleton className="h-4 w-10 mx-auto" />
            </li>

            <li className="grid gap-2 px-6 py-4 border border-gray-200 rounded-2xl">
              <Skeleton className="h-5 w-24 mx-auto" />
              <Skeleton className="h-4 w-10 mx-auto" />
            </li>

            <li className="grid gap-2 px-6 py-4 border border-gray-200 rounded-2xl">
              <Skeleton className="h-5 w-20 mx-auto" />
              <Skeleton className="h-4 w-16 mx-auto" />
            </li>
          </ul>
        </div>

        <div className="grid gap-2">
          <Skeleton className="h-8 w-72" />
          <Skeleton className="h-5 w-48" />
        </div>
      </section>

      <section className="mb-6">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Skeleton className="h-8 w-40" />

            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[90%]" />
            <Skeleton className="h-4 w-[95%]" />
            <Skeleton className="h-4 w-[80%]" />
          </div>

          <Skeleton className="h-12 w-full rounded-xl" />
        </div>
      </section>
    </main>
  );
}
