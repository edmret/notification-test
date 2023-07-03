"use client";
import Layout from "@/components/layout/Layout";
import SubmissionForm from "@/components/submissionForm/SubmissionForm";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LogHistory from "./log-history/LogHistory";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <SubmissionForm />
        <LogHistory />
      </Layout>
    </QueryClientProvider>
  );
}
