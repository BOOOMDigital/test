import { sendContactForm } from '@/lib/api/contactForm'
import { COLORS } from '@/lib/consts'
import { ErrorMessage, Field, Form as FormikForm, Formik } from 'formik'
import { useState } from 'react'
import { PulseLoader } from 'react-spinners'
import * as Yup from 'yup'
import ArrowButton from '../Buttons/ArrowButton'
import Link from '../presets/Link'
import InputLabel from './InputLabel'

const FormFields = ({ type }: any) => {
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState('')

    const inputClasses =
        'w-full px-5 py-4 md:text-base mb-4 border-none shadow-md rounded-md'

    const initalValues = {
        name: '',
        insertion: '',
        lastname: '',
        email: '',
        tel: '',
        message: '',
        subject: type,
        agreement: false,
    }

    const errorClasses =
        'text-red-500 text-sm bg-red-100 py-2 px-4 mb-2 rounded-full inline-block'

    const validationSchema = Yup.object({
        name: Yup.string(),
        insertion: Yup.string(),
        lastname: Yup.string(),
        tel: Yup.string(),
        email: Yup.string()
            .email('Invalid email')
            .required('E-mailadres is verplicht'),
        subject: Yup.string(),
        message: Yup.string(),
        agreement: Yup.boolean().oneOf([true], 'Disclaimer is verplicht'),
    })

    const handleSubmit = async (values: any, actions: any) => {
        setLoading(true)
        actions.resetForm()

        await sendContactForm(values)
            .then((res) => {
                setLoading(false)
                console.log(res)
                setSuccess('Bedankt voor je aanmelding!')
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
            })
    }

    return (
        <>
            {success !== '' && (
                <div
                    role="alert"
                    className="rounded border-l-4 border-lime-500 bg-gray-100 p-4 mb-8">
                    <strong className="block font-medium text-lime-600">
                        {success}
                    </strong>
                </div>
            )}
            <Formik
                initialValues={initalValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}>
                {({ values, errors, handleChange }) => (
                    <FormikForm>
                        <div className="grid grid-cols-12 gap-3">
                            <div className="col-span-5 relative">
                                <InputLabel>Voornaam</InputLabel>
                                <input
                                    className={inputClasses}
                                    type="text"
                                    name="name"
                                    placeholder="John"
                                    value={values.name}
                                    onChange={handleChange}
                                />
                                <ErrorMessage name="name">
                                    {(msg) => (
                                        <span className={errorClasses}>
                                            {msg}
                                        </span>
                                    )}
                                </ErrorMessage>
                            </div>
                            <div className="col-span-2 relative">
                                <InputLabel>Tussenvoegsel</InputLabel>
                                <input
                                    className={inputClasses}
                                    type="text"
                                    name="insertion"
                                    placeholder="Van"
                                    value={values.insertion}
                                    onChange={handleChange}
                                />
                                <ErrorMessage name="insertion">
                                    {(msg) => (
                                        <span className={errorClasses}>
                                            {msg}
                                        </span>
                                    )}
                                </ErrorMessage>
                            </div>
                            <div className="col-span-5 relative">
                                <InputLabel>Achternaam</InputLabel>
                                <input
                                    className={inputClasses}
                                    type="text"
                                    name="lastname"
                                    placeholder="De Wit"
                                    value={values.lastname}
                                    onChange={handleChange}
                                />
                                <ErrorMessage name="lastname">
                                    {(msg) => (
                                        <span className={errorClasses}>
                                            {msg}
                                        </span>
                                    )}
                                </ErrorMessage>
                            </div>
                            <div className="col-span-6 relative">
                                <InputLabel>E-mail*</InputLabel>
                                <input
                                    className={inputClasses}
                                    type="email"
                                    name="email"
                                    placeholder="johndewit@hotmail.com"
                                    value={values.email}
                                    onChange={handleChange}
                                />
                                <ErrorMessage name="email">
                                    {(msg) => (
                                        <span className={errorClasses}>
                                            {msg}
                                        </span>
                                    )}
                                </ErrorMessage>
                            </div>
                            <div className="col-span-3 relative">
                                <InputLabel>Telefoonnummer</InputLabel>
                                <input
                                    className={inputClasses}
                                    type="tel"
                                    name="tel"
                                    placeholder="+31 6 12 345 678"
                                    value={values.tel}
                                    onChange={handleChange}
                                />
                                <ErrorMessage name="tel">
                                    {(msg) => (
                                        <span className={errorClasses}>
                                            {msg}
                                        </span>
                                    )}
                                </ErrorMessage>
                            </div>
                            <div className="col-span-12 relative">
                                <InputLabel>Opmerking</InputLabel>
                                <textarea
                                    name="message"
                                    placeholder="Typ hier jouw opmerking"
                                    value={values.message}
                                    onChange={handleChange}
                                    className={inputClasses + ' h-[132px]'}
                                />
                                <ErrorMessage name="message">
                                    {(msg) => (
                                        <span className={errorClasses}>
                                            {msg}
                                        </span>
                                    )}
                                </ErrorMessage>
                            </div>
                            {/* hidden */}
                            <input
                                className={inputClasses}
                                type="hidden"
                                name="subject"
                                value={values.subject}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex mt-2 mb-8">
                            <input
                                type="checkbox"
                                name="agreement"
                                id="agreement"
                                className="p-2 rounded-full border-1 border-black mr-6"
                                onChange={handleChange}
                            />
                            <label htmlFor="agreement">
                                Ja, ik ga akkoord met de{' '}
                                <Link
                                    style={{
                                        color: COLORS.orange,
                                    }}
                                    href="/privacy-policy">
                                    privacy statement*
                                </Link>
                            </label>
                        </div>
                        <div className="block">
                            <ErrorMessage name="agreement">
                                {(msg) => (
                                    <span className={errorClasses}>{msg}</span>
                                )}
                            </ErrorMessage>
                        </div>
                        <ArrowButton
                            noLink
                            className="rounded-md gap-6"
                            style={{
                                backgroundColor: COLORS.grey,
                            }}>
                            {loading ? (
                                <PulseLoader
                                    color={'#fff'}
                                    loading={loading}
                                    size={10}
                                />
                            ) : (
                                'Aanmelden'
                            )}
                        </ArrowButton>
                    </FormikForm>
                )}
            </Formik>
        </>
    )
}
export default FormFields
