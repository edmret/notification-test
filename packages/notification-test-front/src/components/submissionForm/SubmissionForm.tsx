"use client"
import { Box, Button, Divider } from "@mui/material";
import Paper from "@mui/material/Paper/Paper";
import Typography from "@mui/material/Typography";
import { Form, Formik } from "formik";
import submissionFormSchema from "./submission.schema";
import { MessageDto } from "notification-core/src/types/Messages.type";
import { useLookup } from "@/hooks/apiHooks/lookup.hooks";
import SelectField from "../form/SelectField";
import CustomTextField from "../form/CustomTextField";
import { LoadingButton } from "@mui/lab";

const initialValues: MessageDto = {
    category: "",
    content: "",
};

const SubmissionForm = () => {

    const {isLoading, data} = useLookup(["category"]);

    const handleSubmit = (values: MessageDto) => {
        console.log(values);
    }

    return (
        <Paper elevation={3} sx={{px: 2, py: 3}}>
            <Typography variant="h4" sx={{mb: 1}}>
                Submission Form
            </Typography>
            <Divider />
            <Formik initialValues={initialValues} validationSchema={submissionFormSchema} onSubmit={handleSubmit}>
                <Form>
                    <Box sx={{py: 2}}>
                        <SelectField id="select-category" options={data?.category} isLoading={isLoading} name="category" label="Category" size="small" />
                    </Box>
                    <Box sx={{py: 2}}>
                        <CustomTextField id="content" name="content" label="Message" multiline rows={4} fullWidth size="small" />
                    </Box>
                    <Box display="flex" justifyContent="end" sx={{py: 2}}>
                        <Button variant="outlined" color="secondary" type="reset">
                            Cancel
                        </Button>
                        <LoadingButton variant="contained" color="primary" type="submit" sx={{ml: 2}}>
                            Send Message
                        </LoadingButton>
                    </Box>
                </Form>
            </Formik>
        </Paper>
    )
}

export default SubmissionForm;