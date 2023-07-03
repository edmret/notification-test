"use client";
import { Alert, Box, Button, Divider, IconButton } from "@mui/material";
import Paper from "@mui/material/Paper/Paper";
import Typography from "@mui/material/Typography";
import { Form, Formik, FormikHelpers } from "formik";
import submissionFormSchema from "./submission.schema";
import { MessageDto } from "notification-core/src/types/Messages.type";
import { useLookup } from "@/hooks/apiHooks/lookup.hooks";
import SelectField from "../form/SelectField";
import CustomTextField from "../form/CustomTextField";
import { LoadingButton } from "@mui/lab";
import { useSendMessage } from "@/hooks/apiHooks/message.hooks";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ForumIcon from '@mui/icons-material/Forum';

const initialValues: MessageDto = {
  category: "",
  content: "",
};

const SubmissionForm = () => {
  const { isLoading, data } = useLookup(["category"]);
  const { isLoading: isSendingMessage, mutate } = useSendMessage();
  const [showSucces, setShowSuccess] = useState(false);

  const handleSubmit = async (values: MessageDto, { resetForm }:  FormikHelpers<MessageDto>) => {
    await mutate(values);
    setShowSuccess(true);
    resetForm();
  };

  return (
    <Paper elevation={3} sx={{ px: 2, py: 3 }}>
      <Typography variant="h4" sx={{ mb: 1 }} color="secondary">
        <ForumIcon /> Submission Form
      </Typography>
      <Divider />
      <Formik
        initialValues={initialValues}
        validationSchema={submissionFormSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          {showSucces && (
            <Alert
              variant="filled"
              severity="success"
              sx={{ my: 3, py: 2 }}
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => setShowSuccess(false)}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              Great news! Your message has been successfully sent!
            </Alert>
          )}
          <Box sx={{ py: 2 }}>
            <SelectField
              id="select-category"
              options={data?.category}
              isLoading={isLoading}
              name="category"
              label="Category"
              size="small"
              tabIndex={0}
            />
          </Box>
          <Box sx={{ py: 2 }}>
            <CustomTextField
              id="content"
              name="content"
              label="Message"
              multiline
              rows={4}
              fullWidth
              size="small"
              tabIndex={1}
            />
          </Box>
          <Box display="flex" justifyContent="end" sx={{ py: 2 }}>
            <Button
              variant="outlined"
              color="secondary"
              type="reset"
              disabled={isSendingMessage}
            >
              Cancel
            </Button>
            <LoadingButton
              loading={isSendingMessage}
              variant="contained"
              color="primary"
              type="submit"
              sx={{ ml: 2 }}
              tabIndex={3}
            >
              Send Message
            </LoadingButton>
          </Box>
        </Form>
      </Formik>
    </Paper>
  );
};

export default SubmissionForm;
