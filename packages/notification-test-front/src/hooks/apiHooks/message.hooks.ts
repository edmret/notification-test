import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MessageDto } from "notification-core/src/types/Messages.type";

export const useSendMessage = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (newMessage: MessageDto) => {
      return fetch(`${process.env.NEXT_PUBLIC_API}/message`, {
        method: "POST",
        body: JSON.stringify(newMessage),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then((res) => res.json());
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["logs"]);
    },
  });

  return mutation;
};
