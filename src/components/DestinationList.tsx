import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Destination } from "@/types/destination";

type DestinationListProps = {
  destinations: Destination[];
  error: Error | null;
  isLoading: boolean;
  isRefreshing: boolean;
  onRetry: () => void;
};

export function DestinationList({
  destinations,
  error,
  isLoading,
  isRefreshing,
  onRetry,
}: DestinationListProps) {
  let content;

  if (isLoading) {
    content = <p className="text-sm text-muted-foreground">Loading destinations...</p>;
  } else if (error) {
    const errorMessage = error.message || "Unable to load destinations. Check your Xano URL and try again.";

    content = (
      <div className="space-y-3" role="alert">
        <p className="text-sm text-red-800">{errorMessage}</p>
        <Button type="button" onClick={onRetry}>Try again</Button>
      </div>
    );
  } else if (destinations.length === 0) {
    content = <p className="text-sm text-muted-foreground">No destinations yet. Add your first one above!</p>;
  } else {
    content = (
      <ul className="grid gap-3 sm:grid-cols-2">
        {destinations.map((destination) => (
          <li key={destination.id} className="rounded-lg border border-border bg-muted/50 p-4">
            <p className="font-semibold">{destination.city}</p>
            <p className="text-sm text-muted-foreground">{destination.country}</p>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between gap-4">
          <CardTitle>My Destinations</CardTitle>
          {isRefreshing && !isLoading ? (
            <span className="text-xs text-muted-foreground" role="status">Refreshing...</span>
          ) : null}
        </div>
      </CardHeader>
      <CardContent>{content}</CardContent>
    </Card>
  );
}
