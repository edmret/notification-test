import * as Yup from 'yup';

const submissionFormSchema = Yup.object().shape({
    categiry: Yup.string().required('Required'),
    content: Yup.string().required('Required'),
});

export default submissionFormSchema;
