import { Formik, Field, Form } from "formik";
import Toastify from "toastify-js";
import JsFileDownloader from "js-file-downloader";
import { useState } from "react";
export const RegistrationForm = () => {
  const [isDownloading, setIsDownloading] = useState();
  const [isSaving, setIsSaving] = useState();

  return (
    <div className="flex min-h-full flex-col justify-start w-full px-0 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-2xl font-medium">Einladungskarten</h2>
        <div className="news-block__notch mb-4 mt-4"></div>
      </div>

      <div className="w-full">
        <Formik
          className="space-y-6"
          initialValues={{
            email: "",
            name: "",
          }}
          onSubmit={({ email, name }, { resetForm }) => {
            setIsDownloading(true);
            setIsSaving(true);

            const formData = new FormData();
            formData.append("date", new Date(Date.now()));
            formData.append("email", email);
            formData.append("name", name);

            fetch(process.env.GOOGLE_APPS_SCRIPT, {
              method: "POST",
              body: formData,
            })
              .then((response) => {
                return response.json();
              })
              .then((data) => {
                console.log(data);
              });
            new JsFileDownloader({
              url: "/invitation.jpg",
            })
              .then(() => {
                Toastify({
                  text: "Vielen Dank! Der Brief mit den Tickets wurde an Ihre E-Mail-Adresse gesendet.",
                  duration: 3000,
                  close: true,
                  gravity: "top",
                  position: "left",
                  stopOnFocus: true,
                  backgroundColor: "#00b37f",
                }).showToast();
                resetForm();
              })
              .catch((error) => {
                // Called when an error occurred
              })
              .finally(() => {
                setIsDownloading(false);
                setIsSaving(false);
              });
          }}
        >
          <Form>
            <div>
              <label className="block text-gray-900">Email:</label>
              <div className="mt-2">
                <Field
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between">
                <label className="block text-gray-900">Name:</label>
              </div>
              <div className="mt-2">
                <Field
                  id="name"
                  name="name"
                  className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>

            <div className="mt-6">
              <button
                className="block bg-accent text-white rounded py-2 px-4 mb-2 w-full disabled:opacity-50"
                type="submit"
                disabled={isDownloading || isSaving}
              >
                Tickets sichern
              </button>
              <button className="block bg-grey border border-black rounded py-2 px-4 w-full">
                Konzertprogramm
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
