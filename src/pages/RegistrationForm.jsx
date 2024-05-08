import { useState } from "react";
import FormInput from "../components/FormInput";
import Success from "../components/Success";
import Navbar from "../ui/Navbar";

function RegistrationForm() {
  const [success, setSuccess] = useState(false);

  return (
    <section>
      {success ? (
        <Success />
      ) : (
        <>
          <Navbar />
          <FormInput success={success} setSuccess={setSuccess} />
        </>
      )}
    </section>
  );
}

export default RegistrationForm;
