import { useQuery } from "@tanstack/react-query";

import { DestinationForm } from "@/components/DestinationForm";
import { DestinationList } from "@/components/DestinationList";
import gdcLogo from "@/assets/gdc-logo.png";
import { getDestinations } from "@/lib/api";
import { destinationQueryKey } from "@/lib/queryKeys";

export function TravelWishlist() {
  const {
    data: destinations = [],
    error,
    isPending,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: destinationQueryKey,
    queryFn: getDestinations,
  });

  return (
    <main className="min-h-screen bg-background px-4 py-12 text-foreground sm:px-6">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8">
        <header className="space-y-3 text-center">
          <img
            src={gdcLogo}
            alt="Girls Dream Code — Aspire To Be Great and Innovate!"
            className="mx-auto h-auto w-full max-w-xl"
          />
          <h1 className="pt-2 text-4xl font-bold tracking-tight sm:text-5xl">Travel Wishlist</h1>
          <p className="mx-auto max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            Add somewhere you'd love to visit! This page will save your destinations and display them here.
          </p>
        </header>

        <DestinationForm />
        <DestinationList
          destinations={destinations}
          error={error}
          isLoading={isPending}
          isRefreshing={isFetching}
          onRetry={() => void refetch()}
        />
      </div>
    </main>
  );
}
