import { Button } from "./ui/button";

const GetStarted = () => {
  return (
    <section
      id="get-started"
      className="container mx-auto px-4 py-12 sm:py-20 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-4 sm:mb-6">
        Ready to Join the Energy Revolution?
      </h2>
      <p className="text-lg sm:text-xl text-green-700 mb-6 sm:mb-8">
        Start trading energy and contributing to a sustainable future today.
      </p>
      <Button
        size="lg"
        className="bg-green-600 hover:bg-green-700 text-white text-sm sm:text-base">
        Create Your Account
      </Button>
    </section>
  );
};

export default GetStarted;
