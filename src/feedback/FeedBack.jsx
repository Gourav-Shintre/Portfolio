import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function FeedBack() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    toast.success('Feedback submitted successfully!', {
      autoClose: 3000,
      position: "top-right",
    });
    setTimeout(() => {
      reset();
    }, 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white bg-opacity-90 shadow-2xl rounded-lg p-8 max-w-md w-full transform transition duration-500 hover:scale-105">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">We Value Your Feedback</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Your Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-teal-500"
              placeholder="John Doe"
              {...register("name", {
                required: 'This field is required',
                minLength: { value: 2, message: 'Min length is 2' },
                maxLength: { value: 30, message: 'Max length is 30' }
              })}
            />
            {errors.name && <p className="text-red-600 mt-2">{errors.name.message}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Your Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-teal-500"
              placeholder="example@email.com"
              {...register("email", {
                required: 'This field is required',
              })}
            />
            {errors.email && <p className="text-red-600 mt-2">{errors.email.message}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="feedback" className="block text-gray-700 font-semibold mb-2">Your Feedback</label>
            <textarea
              id="feedback"
              rows="4"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-teal-500"
              placeholder="Write your feedback here..."
              {...register("feedback", {
                required: 'This field is required',
                minLength: { value: 10, message: 'Min length is 10 characters' },
                maxLength: { value: 250, message: 'Max length is 250 characters' }
              })}
            ></textarea>
            {errors.feedback && <p className="text-red-600 mt-2">{errors.feedback.message}</p>}
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none transition duration-300 ease-in-out"
            >
              Submit Feedback
            </button>
          </div>
        </form>

        <ToastContainer />
      </div>
    </div>
  );
}

export default FeedBack;
