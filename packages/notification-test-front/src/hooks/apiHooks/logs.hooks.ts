import { useQuery } from "@tanstack/react-query";
import { LogDto } from "notification-core";

export const useLogs = () => {
  const query = useQuery<LogDto []>({
    queryKey: ["logs"],
    refetchInterval: 3000,
    queryFn: () =>
      fetch(`${process.env.NEXT_PUBLIC_API}/log`).then((res) => res.json()),
  });

  return query;
};
