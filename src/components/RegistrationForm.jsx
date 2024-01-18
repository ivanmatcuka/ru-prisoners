import { Formik, Field, Form } from "formik";

export const RegistrationForm = () => {
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
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form>
            <div>
              <label className="block text-gray-900">Email address</label>
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

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-gray-900">Name</label>
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
                className="block bg-accent text-white rounded py-2 px-4 mb-2 w-full"
                type="submit"
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
