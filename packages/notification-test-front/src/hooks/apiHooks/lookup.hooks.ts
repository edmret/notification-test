import { useQuery } from "@tanstack/react-query";

export const useLookup = (lookups: string[]) => {
  const lookupString = `?lookups[]=${lookups.join("&lookups[]=")}`;

  const { isLoading, error, data } = useQuery({
    queryKey: [`lookups-lookups${lookupString}`],
    queryFn: () =>
      fetch(`${process.env.NEXT_PUBLIC_API}/lookups${lookupString}`).then(
        (res) => res.json()
      ),
  });

  return { isLoading, error, data };
};
