import { useQuery } from "@tanstack/react-query";
import { LookupType } from "notification-core";

export const useLookup = (lookups: string[]) => {
  const lookupString = `?lookups[]=${lookups.join("&lookups[]=")}`;

  const { isLoading, error, data } = useQuery<Record<string, LookupType []>>({
    queryKey: [`lookups-lookups${lookupString}`],
    queryFn: () =>
      fetch(`${process.env.NEXT_PUBLIC_API}/lookups${lookupString}`).then(
        (res) => res.json()
      ),
  });

  return { isLoading, error, data };
};
