"use client";
import Layout from "@/components/layout/Layout";
import SubmissionForm from "@/components/submissionForm/SubmissionForm";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <SubmissionForm />
      </Layout>
    </QueryClientProvider>
  );
}
